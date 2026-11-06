import { index } from '@/actions/App/Http/Controllers/OrderController';
import { RevenueChart } from '@/components/dashboard/revenue-chart';
import TableData from '@/components/dashboard/table-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import {
    AlertCircle,
    Calendar,
    Car,
    Eye,
    ShoppingCart,
    TrendingUp,
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

interface DashboardStats {
    totalVehicles: number;
    totalOrders: number;
    pendingPayments: number;
    totalRevenue: number;
    mostRentedCar: {
        id: number;
        name: string;
        img_path: string;
        orders_count: number;
    };
    fleetStatus: {
        available: number;
        rented: number;
        maintenance: number;
        out_of_service: number;
    };
}

interface MonthlyRevenue {
    month: string;
    revenue: number;
}

interface UpcomingPickup {
    id: number;
    customer_name: string;
    customer_phone: string;
    car_name: string;
    pickup_date: string;
    pickup_location: string;
}

export interface RecentOrder {
    id: number;
    client_name: string;
    vehicle: string;
    pickup_date: string;
    drop_date: string;
    status: string;
    total_price: number;
    solde_du: number;
}

interface DashboardProps {
    stats: DashboardStats;
    recentOrders: RecentOrder[];
    upcomingPickups: UpcomingPickup[];
    monthlyRevenue: MonthlyRevenue[];
}

export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
    }).format(amount);
};

export default function Dashboard({
    stats,
    recentOrders,
    upcomingPickups,
    monthlyRevenue,
}: DashboardProps) {
    const statsCards = [
        {
            title: 'Total Vehicles',
            value: stats.totalVehicles,
            icon: Car,
            description: 'Vehicles in fleet',
            color: 'text-blue-600',
            bgColor: 'bg-blue-100',
        },
        {
            title: 'Total Orders',
            value: stats.totalOrders,
            icon: ShoppingCart,
            description: 'Reservations made',
            color: 'text-green-600',
            bgColor: 'bg-green-100',
        },
        {
            title: 'Pending Payments',
            value: formatCurrency(stats.pendingPayments),
            icon: AlertCircle,
            description: 'Balance to collect',
            color: 'text-orange-600',
            bgColor: 'bg-orange-100',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto p-4">
                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-3">
                    {statsCards.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <Card key={index} className="relative">
                                <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        {stat.title}
                                    </CardTitle>
                                    <div
                                        className={`rounded-full p-2 ${stat.bgColor}`}
                                    >
                                        <Icon
                                            className={`size-4 ${stat.color}`}
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        {stat.value}
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        {stat.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Revenue and Most Rented Car Row */}
                <div className="grid gap-4 md:grid-cols-3">
                    {/* Total Revenue Card */}
                    <Card className="relative md:col-span-2">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Revenue
                            </CardTitle>
                            <div className="rounded-full bg-purple-100 p-2">
                                <TrendingUp className="size-4 text-purple-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {formatCurrency(stats.totalRevenue)}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Total payments received
                            </p>
                        </CardContent>
                    </Card>

                    {/* Most Rented Car Card - Takes 2 columns */}
                    <Card className="relative">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Most Rented Car
                            </CardTitle>
                            <div className="rounded-full bg-green-100 p-2">
                                <Car className="size-4 text-green-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            {stats.mostRentedCar ? (
                                <div className="flex items-center gap-4">
                                    <img
                                        src={`/uploads/images/${stats.mostRentedCar.img_path}`}
                                        alt={stats.mostRentedCar.name}
                                        className="h-16 w-24 rounded object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="text-xl font-bold">
                                            {stats.mostRentedCar.name}
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            {stats.mostRentedCar.orders_count}{' '}
                                            orders completed
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center text-muted-foreground">
                                    No orders yet
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Orders Table */}
                <Card className="relative">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Recent Orders</CardTitle>
                            <Link href={index.url()}>
                                <Button variant="outline" size="sm">
                                    View All
                                </Button>
                            </Link>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="relative overflow-x-auto">
                            <TableData recentOrders={recentOrders} />
                        </div>
                    </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                    {/* Fleet Status Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Car className="size-5" />
                                Fleet Status
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-green-500" />
                                        <span className="text-sm">
                                            Available
                                        </span>
                                    </div>
                                    <span className="font-bold">
                                        {stats.fleetStatus.available}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-blue-500" />
                                        <span className="text-sm">Rented</span>
                                    </div>
                                    <span className="font-bold">
                                        {stats.fleetStatus.rented}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-orange-500" />
                                        <span className="text-sm">
                                            Maintenance
                                        </span>
                                    </div>
                                    <span className="font-bold">
                                        {stats.fleetStatus.maintenance}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-3 w-3 rounded-full bg-red-500" />
                                        <span className="text-sm">
                                            Out of Service
                                        </span>
                                    </div>
                                    <span className="font-bold">
                                        {stats.fleetStatus.out_of_service}
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Upcoming Pickups Card */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="size-5" />
                                Upcoming Pickups
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {upcomingPickups.length === 0 ? (
                                <p className="text-center text-sm text-muted-foreground">
                                    No upcoming pickups
                                </p>
                            ) : (
                                <div className="space-y-3">
                                    {upcomingPickups.map((pickup) => (
                                        <div
                                            key={pickup.id}
                                            className="flex items-start justify-between border-b pb-2 last:border-0"
                                        >
                                            <div className="flex-1">
                                                <p className="text-sm font-medium">
                                                    {pickup.customer_name}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {pickup.car_name}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {new Date(
                                                        pickup.pickup_date,
                                                    ).toLocaleDateString(
                                                        'en-US',
                                                        {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                        },
                                                    )}
                                                </p>
                                            </div>
                                            <Link
                                                href={`/admin/orders/${pickup.id}`}
                                            >
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                >
                                                    <Eye className="size-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
                <RevenueChart data={monthlyRevenue} />
            </div>
        </AppLayout>
    );
}
