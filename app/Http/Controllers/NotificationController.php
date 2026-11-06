<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function index(Request $request)
    {
        // Get pending orders (waiting for confirmation)
        $pendingOrders = Order::with(['car.marque'])
            ->where('status', 'pending')
            ->latest()
            ->get()
            ->map(function ($order) {
                return [
                    'id' => $order->id,
                    'customer_name' => $order->customer_name,
                    'customer_phone' => $order->customer_phone,
                    'customer_email' => $order->customer_email,
                    'car_name' => $order->car->marque->nom_marque . ' ' . $order->car->name,
                    'pickup_date' => $order->pickup_date->format('Y-m-d H:i'),
                    'drop_date' => $order->drop_date->format('Y-m-d H:i'),
                    'total_price' => $order->total_price,
                    'created_at' => $order->created_at->diffForHumans(),
                ];
            });

        // Get overdue returns (drop_date passed but status not completed/cancelled)
        $overdueReturns = Order::with(['car.marque'])
            ->whereNotIn('status', ['completed', 'cancelled'])
            ->where('drop_date', '<', now())
            ->orderBy('drop_date', 'asc')
            ->get()
            ->map(function ($order) {
                return [
                    'id' => $order->id,
                    'customer_name' => $order->customer_name,
                    'customer_phone' => $order->customer_phone,
                    'customer_email' => $order->customer_email,
                    'car_name' => $order->car->marque->nom_marque . ' ' . $order->car->name,
                    'pickup_date' => $order->pickup_date->format('Y-m-d H:i'),
                    'drop_date' => $order->drop_date->format('Y-m-d H:i'),
                    'days_overdue' => now()->diffInDays($order->drop_date),
                    'status' => $order->status,
                    'total_price' => $order->total_price,
                    'solde_du' => $order->solde_du,
                ];
            });

        return Inertia::render('Notifications/Index', [
            'pendingOrders' => $pendingOrders,
            'overdueReturns' => $overdueReturns,
            'stats' => [
                'pending_count' => $pendingOrders->count(),
                'overdue_count' => $overdueReturns->count(),
            ],
        ]);
    }

    public function setup()
    {
        return Inertia::render('Notifications/Setup');
    }

    public function storeFcmToken(Request $request)
    {
        $request->validate([
            'token' => 'required|string'
        ]);

        auth()->user()->update([
            'fcm_token' => $request->token
        ]);

        return redirect()->back()->with('success', 'Notifications enabled successfully!');
    }
}