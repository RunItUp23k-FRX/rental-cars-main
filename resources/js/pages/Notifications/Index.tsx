import { show } from '@/actions/App/Http/Controllers/OrderController';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import {
    AlertTriangle,
    Bell,
    Calendar,
    Clock,
    Eye,
    Mail,
    Phone,
    User,
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Notifications',
        href: '#',
    },
];

interface PendingOrder {
    id: number;
    customer_name: string;
    customer_phone: string;
    customer_email: string;
    car_name: string;
    pickup_date: string;
    drop_date: string;
    total_price: number;
    created_at: string;
}

interface OverdueReturn {
    id: number;
    customer_name: string;
    customer_phone: string;
    customer_email: string;
    car_name: string;
    pickup_date: string;
    drop_date: string;
    days_overdue: number;
    status: string;
    total_price: number;
    solde_du: number;
}

interface NotificationsProps {
    pendingOrders: PendingOrder[];
    overdueReturns: OverdueReturn[];
    stats: {
        pending_count: number;
        overdue_count: number;
    };
}

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
    }).format(amount);
};

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

const getStatusBadge = (status: string) => {
    const statusConfig: Record<
        string,
        {
            variant: 'default' | 'secondary' | 'destructive' | 'outline';
            label: string;
        }
    > = {
        pending: { variant: 'outline', label: 'Pending' },
        confirmed: { variant: 'default', label: 'Confirmed' },
        active: { variant: 'secondary', label: 'Active' },
        completed: { variant: 'default', label: 'Completed' },
        cancelled: { variant: 'destructive', label: 'Cancelled' },
    };

    const config = statusConfig[status] || {
        variant: 'outline',
        label: status,
    };
    return <Badge variant={config.variant}>{config.label}</Badge>;
};

export default function Notifications({
    pendingOrders,
    overdueReturns,
    stats,
}: NotificationsProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Notifications" />
            <Link
                href={'notifications/setup'}
                className="flex items-center space-x-2 rounded px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
                <span>🔔</span>
                <span>Enable Notifications</span>
            </Link>
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-4">
                {/* Stats Overview */}
                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Pending Orders
                            </CardTitle>
                            <div className="rounded-full bg-yellow-100 p-2">
                                <Bell className="size-4 text-yellow-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {stats.pending_count}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Awaiting confirmation
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Overdue Returns
                            </CardTitle>
                            <div className="rounded-full bg-red-100 p-2">
                                <AlertTriangle className="size-4 text-red-600" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {stats.overdue_count}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Require immediate attention
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Pending Orders Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bell className="size-5" />
                            Pending Orders
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {pendingOrders.length === 0 ? (
                            <p className="py-8 text-center text-muted-foreground">
                                No pending orders
                            </p>
                        ) : (
                            <div className="space-y-4">
                                {pendingOrders.map((order) => (
                                    <div
                                        key={order.id}
                                        className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
                                    >
                                        <div className="rounded-full bg-yellow-100 p-3">
                                            <Clock className="size-5 text-yellow-600" />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h3 className="font-semibold">
                                                        Order #{order.id}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        {order.created_at}
                                                    </p>
                                                </div>
                                                <Badge variant="outline">
                                                    Pending
                                                </Badge>
                                            </div>
                                            <div className="grid gap-2 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <User className="size-4 text-muted-foreground" />
                                                    <span>
                                                        {order.customer_name}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Phone className="size-4 text-muted-foreground" />
                                                    <span>
                                                        {order.customer_phone}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Mail className="size-4 text-muted-foreground" />
                                                    <span>
                                                        {order.customer_email}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="size-4 text-muted-foreground" />
                                                    <span className="font-medium">
                                                        {order.car_name}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="size-4 text-muted-foreground" />
                                                    <span>
                                                        {formatDate(
                                                            order.pickup_date,
                                                        )}{' '}
                                                        →{' '}
                                                        {formatDate(
                                                            order.drop_date,
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="font-semibold text-primary">
                                                    {formatCurrency(
                                                        order.total_price,
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <Link href={show.url({ id: order.id })}>
                                            <Button variant="outline" size="sm">
                                                <Eye className="mr-2 size-4" />
                                                View
                                            </Button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Overdue Returns Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <AlertTriangle className="size-5 text-red-600" />
                            Overdue Returns
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {overdueReturns.length === 0 ? (
                            <p className="py-8 text-center text-muted-foreground">
                                No overdue returns
                            </p>
                        ) : (
                            <div className="space-y-4">
                                {overdueReturns.map((order) => (
                                    <div
                                        key={order.id}
                                        className="flex items-start gap-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/20"
                                    >
                                        <div className="rounded-full bg-red-100 p-3 dark:bg-red-900">
                                            <AlertTriangle className="size-5 text-red-600" />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <h3 className="font-semibold">
                                                        Order #{order.id}
                                                    </h3>
                                                    <p className="text-sm font-semibold text-red-600">
                                                        {Math.abs(
                                                            order.days_overdue,
                                                        )?.toFixed(0)}{' '}
                                                        days overdue
                                                    </p>
                                                </div>
                                                {getStatusBadge(order.status)}
                                            </div>
                                            <div className="grid gap-2 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <User className="size-4 text-muted-foreground" />
                                                    <span>
                                                        {order.customer_name}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Phone className="size-4 text-muted-foreground" />
                                                    <span>
                                                        {order.customer_phone}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="size-4 text-muted-foreground" />
                                                    <span className="font-medium">
                                                        {order.car_name}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="size-4 text-muted-foreground" />
                                                    <span>
                                                        Expected return:{' '}
                                                        {formatDate(
                                                            order.drop_date,
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="font-semibold">
                                                        {formatCurrency(
                                                            order.total_price,
                                                        )}
                                                    </span>
                                                    {order.solde_du > 0 && (
                                                        <span className="text-sm font-medium text-orange-600">
                                                            Balance due:{' '}
                                                            {formatCurrency(
                                                                order.solde_du,
                                                            )}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <Link href={show.url({ id: order.id })}>
                                            <Button variant="outline" size="sm">
                                                <Eye className="mr-2 size-4" />
                                                View
                                            </Button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
