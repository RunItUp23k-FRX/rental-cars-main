<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Reglement;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;

class ReglementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Reglement::with(['order.car', 'creator:id,name']);

        // Search filter
        if ($request->has('search') && $request->search) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('notes', 'like', "%{$search}%")
                    ->orWhere('order_id', 'like', "%{$search}%");
            });
        }

        // Payment method filter
        if ($request->has('mode_paiement') && $request->mode_paiement !== 'all') {
            $query->where('mode_paiement', $request->mode_paiement);
        }

        // Date range filter
        if ($request->has('date_from') && $request->date_from) {
            $query->where('date_paiement', '>=', $request->date_from);
        }

        if ($request->has('date_to') && $request->date_to) {
            $query->where('date_paiement', '<=', $request->date_to);
        }

        // Sort by most recent
        $query->orderBy('date_paiement', 'desc');

        $reglements = $query->paginate(12)->withQueryString();

        return inertia('Reglements/Index', [
            'reglements' => $reglements,
            'filters' => $request->only(['search', 'mode_paiement', 'date_from', 'date_to'])
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'order' => "required|exists:orders,id",
            'montant' => ['required', 'numeric', 'min:0.01'],
            'mode_paiement' => ['required', 'string', Rule::in(['cash', 'card', 'transfer', 'check'])],
            'date_paiement' => ['required', 'date', 'before_or_equal:today'],
            'notes' => ['nullable', 'string', 'max:500'],
        ]);

        $order = Order::find($validated["order"]);
        if (!$order) {
            return back()->with("error", "Order now found...!!!");
        }

        // Check if order has remaining balance
        if ($order->solde_du <= 0) {
            return back()->with(['error' => 'This order is already fully paid.']);
        }

        // Check if payment amount exceeds remaining balance
        if ($validated['montant'] > $order->solde_du) {
            return back()->withErrors(['montant' => 'Payment amount cannot exceed the remaining balance.']);
        }

        DB::beginTransaction();

        try {
            // Create the payment
            Reglement::create([
                'order_id' => $order->id,
                'montant' => $validated['montant'],
                'mode_paiement' => $validated['mode_paiement'],
                'date_paiement' => $validated['date_paiement'],
                'notes' => $validated['notes'] ?? null,
                'created_by' => auth()->id(),
            ]);

            // Update order balance
            $order->update([
                'solde_du' => $order->solde_du - $validated['montant'],
                'updated_by' => auth()->id(),
            ]);

            DB::commit();

            return back()->with('success', 'Payment recorded successfully!');

        } catch (\Exception $e) {
            Log::error("Error creating reglement: " . $e->getMessage());
            DB::rollBack();
            return back()->with('error', 'Failed to record payment. Please try again.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reglement $reglement)
    {
        DB::beginTransaction();

        try {
            // Get the order and restore the balance
            $order = $reglement->order;
            $order->update([
                'solde_du' => $order->solde_du + $reglement->montant,
            ]);

            // Delete the payment
            $reglement->delete();

            DB::commit();
            return back()->with('success', 'Payment deleted successfully!');

        } catch (\Exception $e) {
            Log::error("Error deleting reglement: " . $e->getMessage());
            DB::rollBack();
            return back()->with('error', 'Failed to delete payment.');
        }
    }
}