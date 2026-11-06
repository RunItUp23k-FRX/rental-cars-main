import {
    destroy,
    index,
    show,
} from '@/actions/App/Http/Controllers/OrderController';
import { OrderCard } from '@/components/order-card';
import { OrderUpdateModal } from '@/components/order-update-modale';
import { ReglementModal } from '@/components/reglement-form';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { OrderData, PaginatedOrders } from '@/types/order-types';
import { Head, router } from '@inertiajs/react';
import { Calendar, Filter, Search, X } from 'lucide-react';
import { useState } from 'react';
type Props = {
    orders: PaginatedOrders;
    filters: {
        search?: string;
        status?: string;
        payment_status?: string;
        date_from?: string;
        date_to?: string;
    };
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard.url(),
    },
    {
        title: 'Orders',
        href: '#',
    },
];

const Index = ({ orders, filters }: Props) => {
    const [search, setSearch] = useState(filters.search || '');
    const [status, setStatus] = useState(filters.status || '');
    const [paymentStatus, setPaymentStatus] = useState(
        filters.payment_status || '',
    );
    const [dateFrom, setDateFrom] = useState(filters.date_from || '');
    const [dateTo, setDateTo] = useState(filters.date_to || '');

    // Modal states
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [reglementModalOpen, setReglementModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null);

    const applyFilters = () => {
        const params: Record<string, string> = {};

        if (search) params.search = search;
        if (status && status !== 'all') params.status = status;
        if (paymentStatus && paymentStatus !== 'all')
            params.payment_status = paymentStatus;
        if (dateFrom) params.date_from = dateFrom;
        if (dateTo) params.date_to = dateTo;

        router.get(index.url(), params, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const clearFilters = () => {
        setSearch('');
        setStatus('');
        setPaymentStatus('');
        setDateFrom('');
        setDateTo('');

        router.get(
            index.url(),
            {},
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    };

    const hasActiveFilters =
        search || status || paymentStatus || dateFrom || dateTo;

    const handleViewOrder = (order: OrderData) => {
        router.visit(
            show.url({
                order: order.id,
            }),
        );
    };

    const handleUpdateOrder = (order: OrderData) => {
        setSelectedOrder(order);
        setUpdateModalOpen(true);
    };

    const handleAddPayment = (order: OrderData) => {
        setSelectedOrder(order);
        setReglementModalOpen(true);
    };

    const handleDeleteOrder = (order: OrderData) => {
        if (
            confirm(
                `Are you sure you want to delete order #${order.id} for ${order.customer_name}? This action cannot be undone.`,
            )
        ) {
            router.delete(
                destroy.url({
                    order: order.id,
                }),
            );
        }
    };

    // Calculate statistics
    const stats = {
        total: orders.total,
        pending: orders.data.filter((o) => o.status === 'pending').length,
        active: orders.data.filter((o) => o.status === 'active').length,
        unpaid: orders.data.filter((o) => o.solde_du > 0).length,
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Orders Management" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">
                            Orders
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Manage customer reservations and bookings
                        </p>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-4">
                    <div className="rounded-lg border bg-card p-4">
                        <div className="text-2xl font-bold">{stats.total}</div>
                        <p className="text-xs text-muted-foreground">
                            Total Orders
                        </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                        <div className="text-2xl font-bold text-yellow-600">
                            {stats.pending}
                        </div>
                        <p className="text-xs text-muted-foreground">Pending</p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                        <div className="text-2xl font-bold text-green-600">
                            {stats.active}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Active Rentals
                        </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                        <div className="text-2xl font-bold text-red-600">
                            {stats.unpaid}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Unpaid Orders
                        </p>
                    </div>
                </div>

                {/* Filters */}
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-3">
                        {/* Search */}
                        <div className="min-w-[200px] flex-1">
                            <div className="relative">
                                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    placeholder="Search by name, email, phone..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    onKeyDown={(e) =>
                                        e.key === 'Enter' && applyFilters()
                                    }
                                    className="pl-9"
                                />
                            </div>
                        </div>

                        {/* Status Filter */}
                        <Select value={status} onValueChange={setStatus}>
                            <SelectTrigger className="w-[150px]">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="confirmed">
                                    Confirmed
                                </SelectItem>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="completed">
                                    Completed
                                </SelectItem>
                                <SelectItem value="cancelled">
                                    Cancelled
                                </SelectItem>
                            </SelectContent>
                        </Select>

                        {/* Payment Status Filter */}
                        <Select
                            value={paymentStatus}
                            onValueChange={setPaymentStatus}
                        >
                            <SelectTrigger className="w-[150px]">
                                <SelectValue placeholder="Payment" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">
                                    All Payments
                                </SelectItem>
                                <SelectItem value="unpaid">Unpaid</SelectItem>
                                <SelectItem value="partial">Partial</SelectItem>
                                <SelectItem value="paid">Paid</SelectItem>
                            </SelectContent>
                        </Select>

                        {/* Date From */}
                        <div className="relative">
                            <Calendar className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                type="date"
                                placeholder="From Date"
                                value={dateFrom}
                                onChange={(e) => setDateFrom(e.target.value)}
                                className="w-[150px] pl-9"
                            />
                        </div>

                        {/* Date To */}
                        <div className="relative">
                            <Calendar className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                type="date"
                                placeholder="To Date"
                                value={dateTo}
                                onChange={(e) => setDateTo(e.target.value)}
                                className="w-[150px] pl-9"
                            />
                        </div>

                        {/* Apply Filters */}
                        <Button onClick={applyFilters}>
                            <Filter className="mr-2 h-4 w-4" />
                            Apply
                        </Button>

                        {/* Clear Filters */}
                        {hasActiveFilters && (
                            <Button variant="outline" onClick={clearFilters}>
                                <X className="mr-2 h-4 w-4" />
                                Clear
                            </Button>
                        )}
                    </div>

                    {/* Active Filters Display */}
                    {hasActiveFilters && (
                        <div className="flex flex-wrap gap-2">
                            <span className="text-sm text-muted-foreground">
                                Active filters:
                            </span>
                            {search && (
                                <Badge variant="secondary">
                                    Search: {search}
                                </Badge>
                            )}
                            {status && status !== 'all' && (
                                <Badge variant="secondary">
                                    Status: {status}
                                </Badge>
                            )}
                            {paymentStatus && paymentStatus !== 'all' && (
                                <Badge variant="secondary">
                                    Payment: {paymentStatus}
                                </Badge>
                            )}
                            {dateFrom && (
                                <Badge variant="secondary">
                                    From: {dateFrom}
                                </Badge>
                            )}
                            {dateTo && (
                                <Badge variant="secondary">To: {dateTo}</Badge>
                            )}
                        </div>
                    )}
                </div>

                {/* Results Info */}
                <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                        Showing {orders.from} to {orders.to} of {orders.total}{' '}
                        orders
                    </p>
                </div>

                {/* Orders Grid */}
                {orders.data.length > 0 ? (
                    <>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {orders.data.map((order) => (
                                <OrderCard
                                    key={order.id}
                                    order={order}
                                    onView={handleViewOrder}
                                    onUpdate={handleUpdateOrder}
                                    onDelete={handleDeleteOrder}
                                    onAddPayment={handleAddPayment}
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        {orders.last_page > 1 && (
                            <div className="flex justify-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    disabled={orders.current_page === 1}
                                    onClick={() => {
                                        router.get(
                                            index.url(),
                                            {
                                                ...filters,
                                                page: orders.current_page - 1,
                                            },
                                            { preserveState: true },
                                        );
                                    }}
                                >
                                    Previous
                                </Button>
                                <div className="flex items-center gap-2">
                                    {Array.from(
                                        { length: orders.last_page },
                                        (_, i) => i + 1,
                                    )
                                        .filter(
                                            (page) =>
                                                page === 1 ||
                                                page === orders.last_page ||
                                                Math.abs(
                                                    page - orders.current_page,
                                                ) <= 2,
                                        )
                                        .map((page, index, array) => (
                                            <div key={page}>
                                                {index > 0 &&
                                                    array[index - 1] !==
                                                        page - 1 && (
                                                        <span className="px-2">
                                                            ...
                                                        </span>
                                                    )}
                                                <Button
                                                    variant={
                                                        orders.current_page ===
                                                        page
                                                            ? 'default'
                                                            : 'outline'
                                                    }
                                                    size="sm"
                                                    onClick={() => {
                                                        router.get(
                                                            index.url(),
                                                            {
                                                                ...filters,
                                                                page,
                                                            },
                                                            {
                                                                preserveState: true,
                                                            },
                                                        );
                                                    }}
                                                >
                                                    {page}
                                                </Button>
                                            </div>
                                        ))}
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    disabled={
                                        orders.current_page === orders.last_page
                                    }
                                    onClick={() => {
                                        router.get(
                                            index.url(),
                                            {
                                                ...filters,
                                                page: orders.current_page + 1,
                                            },
                                            { preserveState: true },
                                        );
                                    }}
                                >
                                    Next
                                </Button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="mb-4 rounded-full bg-muted p-6">
                            <Search className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">
                            No orders found
                        </h3>
                        <p className="mb-4 text-sm text-muted-foreground">
                            {hasActiveFilters
                                ? 'Try adjusting your filters'
                                : 'No orders have been created yet'}
                        </p>
                        {hasActiveFilters && (
                            <Button variant="outline" onClick={clearFilters}>
                                Clear Filters
                            </Button>
                        )}
                    </div>
                )}
            </div>

            {/* Modals */}
            {selectedOrder && (
                <>
                    <OrderUpdateModal
                        order={selectedOrder}
                        open={updateModalOpen}
                        onOpenChange={setUpdateModalOpen}
                    />
                    <ReglementModal
                        order={selectedOrder}
                        open={reglementModalOpen}
                        onOpenChange={setReglementModalOpen}
                    />
                </>
            )}
        </AppLayout>
    );
};

export default Index;
