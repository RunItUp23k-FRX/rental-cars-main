<?php

namespace App\Http\Controllers;

use App\Mail\OrderConfirmation;
use App\Models\Car;
use App\Models\Order;
use App\Services\FirebaseNotificationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;
use Mail;

class OrderController extends Controller
{
    protected $firebaseNotification;

    public function __construct(FirebaseNotificationService $firebaseNotification)
    {
        $this->firebaseNotification = $firebaseNotification;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Order::with(['car.marque', 'updater:id,name']);

        // Search filter
        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('customer_name', 'like', "%{$search}%")
                    ->orWhere('customer_email', 'like', "%{$search}%")
                    ->orWhere('customer_phone', 'like', "%{$search}%");
            });
        }

        // Status filter
        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        // Payment status filter
        if ($request->has('payment_status') && $request->payment_status !== 'all') {
            switch ($request->payment_status) {
                case 'paid':
                    $query->where('solde_du', '<=', 0);
                    break;
                case 'partial':
                    $query->where('solde_du', '>', 0)
                        ->whereColumn('solde_du', '<', 'total_price');
                    break;
                case 'unpaid':
                    $query->whereColumn('solde_du', '=', 'total_price');
                    break;
            }
        }

        // Date range filter
        if ($request->has('date_from') && $request->date_from) {
            $query->where('pickup_date', '>=', $request->date_from);
        }

        if ($request->has('date_to') && $request->date_to) {
            $query->where('pickup_date', '<=', $request->date_to);
        }

        // Sort by most recent
        $query->orderBy('created_at', 'desc');

        $orders = $query->paginate(12)->withQueryString();

        return inertia('Orders/Index', [
            'orders' => $orders,
            'filters' => $request->only(['search', 'status', 'payment_status', 'date_from', 'date_to'])
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'car_id' => ['required', 'integer', 'exists:cars,id'],
            'customer_name' => ['required', 'string', 'max:100'],
            'customer_email' => ['required', 'email', 'max:100'],
            'customer_phone' => ['required', 'string', 'max:20'],
            'customer_address' => ['nullable', 'string', 'max:255'],
            'pickup_date' => ['required', 'date', 'after_or_equal:today'],
            'return_date' => ['required', 'date', 'after:pickup_date'],
            'pickup_location' => ['nullable', 'string', 'max:255'],
            'drop_location' => ['nullable', 'string', 'max:255'],
            'notes' => ['nullable', 'string', 'max:1000'],
        ]);

        // Get the car
        $car = Car::findOrFail($validated['car_id']);

        // Check if car is available
        if ($car->status !== 'available') {
            return back()->with("error", "This car is not available for booking...");
        }

        // Check for overlapping reservations
        $hasOverlap = Order::where('car_id', $car->id)
            ->whereIn('status', ['pending', 'confirmed', 'active'])
            ->where(function ($query) use ($validated) {
                $query->whereBetween('pickup_date', [$validated['pickup_date'], $validated['return_date']])
                    ->orWhereBetween('drop_date', [$validated['pickup_date'], $validated['return_date']])
                    ->orWhere(function ($q) use ($validated) {
                        $q->where('pickup_date', '<=', $validated['pickup_date'])
                            ->where('drop_date', '>=', $validated['return_date']);
                    });
            })
            ->exists();

        if ($hasOverlap) {
            return back()->withErrors("error", "This car is already booked for the selected dates.");
        }

        // Calculate pricing
        $pickupDate = new \DateTime($validated['pickup_date']);
        $returnDate = new \DateTime($validated['return_date']);
        $days = $pickupDate->diff($returnDate)->days;

        if ($days < 1) {
            $days = 1; // Minimum 1 day rental
        }

        $totalPrice = $days * $car->price;

        DB::beginTransaction();

        try {
            // Create the order
            $order = Order::create([
                'customer_name' => $validated['customer_name'],
                'customer_email' => $validated['customer_email'],
                'customer_phone' => $validated['customer_phone'],
                'customer_address' => $validated['customer_address'] ?? null,
                'car_id' => $car->id,
                'pickup_date' => $validated['pickup_date'],
                'drop_date' => $validated['return_date'],
                'total_price' => $totalPrice,
                'daily_rate' => $car->price,
                'solde_du' => $totalPrice,
                'status' => 'pending',
                'pickup_location' => $validated['pickup_location'] ?? null,
                'drop_location' => $validated['drop_location'] ?? null,
                'notes' => $validated['notes'] ?? null,
            ]);

            // Update car status to rented
            $car->update([
                'status' => 'rented'
            ]);
            $this->firebaseNotification->sendNewOrderNotification($order);
            Mail::to($order->customer_email)->send(new OrderConfirmation($order));

            DB::commit();

            return back()->with('success', 'Reservation created successfully! We will contact you shortly.');

        } catch (\Exception $e) {
            Log::error("Error creating order : " . $e->getMessage());
            DB::rollBack();
            return back()->with('error', 'Failed to create reservation. Please try again.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        $order->load(['car.marque', 'reglements.creator', 'updater:id,name']);

        return inertia('Orders/Show', [
            'order' => $order,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        $validated = $request->validate([
            'status' => ['required', 'string', Rule::in(['pending', 'confirmed', 'active', 'completed', 'cancelled'])],
            'notes' => ['nullable', 'string', 'max:1000'],
        ]);

        DB::beginTransaction();

        try {
            $oldStatus = $order->status;

            $order->update([
                'status' => $validated['status'],
                'notes' => $validated['notes'] ?? $order->notes,
                'updated_by' => auth()->id(),
            ]);

            // If order is completed or cancelled, make car available again
            if (in_array($validated['status'], ['completed', 'cancelled']) && $oldStatus !== $validated['status']) {
                $order->car->update(['status' => 'available']);
            }

            // If order is confirmed or active, ensure car is rented
            if (in_array($validated['status'], ['confirmed', 'active', 'pending']) && $order->car->status !== 'rented') {
                $order->car->update(['status' => 'rented']);
            }

            DB::commit();

            return back()->with('success', 'Order updated successfully!');

        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'Failed to update order.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        // Only allow deletion of pending or cancelled orders
        if (!in_array($order->status, ['pending', 'cancelled'])) {
            return back()->with([
                'error' => 'Cannot delete an active order.'
            ]);
        }

        DB::beginTransaction();

        try {
            // Make car available if it was rented
            if ($order->car->status === 'rented') {
                $order->car->update(['status' => 'available']);
            }
            $order->delete();

            DB::commit();
            return back()->with('success', 'Order deleted successfully!');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->with('error', 'Failed to delete order.');
        }
    }
}