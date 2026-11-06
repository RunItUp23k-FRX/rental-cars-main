<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Order;
use App\Models\Reglement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        // Get total cars count
        $totalVehicles = Car::count();

        // Get total orders count
        $totalOrders = Order::count();

        /* car with more orders */
        $mostRentedCar = Car::
            select(["id", "name", "img_path"])
            ->withCount('orders')
            ->with('marque:id,nom_marque')
            ->orderBy('orders_count', 'desc')
            ->first();

        // Get pending payments sum (where solde_du > 0)
        $pendingPayments = Order::where('solde_du', '>', 0)->sum('solde_du');

        // Get total revenue (sum of all reglements montant)
        $totalRevenue = Reglement::sum('montant');

        // Get recent orders (last 10) with relationships
        $recentOrders = Order::with([
            'car.marque', // car->marque relationship (MarqueCar model)
            'reglements'
        ])
            ->latest()
            ->take(10)
            ->get()
            ->map(function ($order) {
                return [
                    'id' => $order->id,
                    'client_name' => $order->customer_name,
                    'vehicle' => $order->car ?
                        $order->car->marque->nom_marque . ' ' . $order->car->name :
                        'N/A',
                    'pickup_date' => $order->pickup_date->format('Y-m-d'),
                    'drop_date' => $order->drop_date->format('Y-m-d'),
                    'status' => $order->status,
                    'total_price' => $order->total_price,
                    'solde_du' => $order->solde_du,
                ];
            });

        $upcomingPickups = Order::with(['car.marque'])
            ->whereIn('status', ['confirmed', 'pending'])
            ->whereBetween('pickup_date', [now(), now()->addDays(7)])
            ->orderBy('pickup_date', 'asc')
            ->take(5)
            ->get()
            ->map(function ($order) {
                return [
                    'id' => $order->id,
                    'customer_name' => $order->customer_name,
                    'customer_phone' => $order->customer_phone,
                    'car_name' => $order->car->name,
                    'pickup_date' => $order->pickup_date->format('Y-m-d H:i'),
                    'pickup_location' => $order->pickup_location,
                ];
            });
        $fleetStatus = [
            'available' => Car::where('status', 'available')->count(),
            'rented' => Car::where('status', 'rented')->count(),
            'maintenance' => Car::where('status', 'maintenance')->count(),
            'out_of_service' => Car::where('status', 'out_of_service')->count(),
        ];
        $monthlyRevenue = [];
        for ($i = 5; $i >= 0; $i--) {
            $date = now()->subMonths($i);
            $monthName = $date->format('M Y');

            $revenue = Reglement::whereYear('date_paiement', $date->year)
                ->whereMonth('date_paiement', $date->month)
                ->sum('montant');

            $monthlyRevenue[] = [
                'month' => $monthName,
                'revenue' => (float) $revenue,
            ];
        }

        // In return statement, add:
        return Inertia::render('dashboard', [
            'stats' => [
                'totalVehicles' => $totalVehicles,
                'totalOrders' => $totalOrders,
                'pendingPayments' => $pendingPayments,
                'totalRevenue' => $totalRevenue,
                'mostRentedCar' => $mostRentedCar,
                'fleetStatus' => $fleetStatus,
            ],
            'recentOrders' => $recentOrders,
            'upcomingPickups' => $upcomingPickups,
            'monthlyRevenue' => $monthlyRevenue,
        ]);
    }
}