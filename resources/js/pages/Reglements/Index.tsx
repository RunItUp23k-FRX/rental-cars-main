import {
    destroy,
    index,
} from '@/actions/App/Http/Controllers/ReglementController';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
import { PaginatedReglements, ReglementData } from '@/types/reglement-types';
import { Head, router } from '@inertiajs/react';
import { format } from 'date-fns';
import {
    Calendar,
    CreditCard,
    DollarSign,
    Filter,
    Search,
    Trash2,
    X,
} from 'lucide-react';
import { useState } from 'react';

type Props = {
    reglements: PaginatedReglements;
    filters: {
        search?: string;
        mode_paiement?: string;
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
        title: 'Payments',
        href: '#',
    },
];

const Index = ({ reglements, filters }: Props) => {
    const [search, setSearch] = useState(filters.search || '');
    const [modePaiement, setModePaiement] = useState(
        filters.mode_paiement || '',
    );
    const [dateFrom, setDateFrom] = useState(filters.date_from || '');
    const [dateTo, setDateTo] = useState(filters.date_to || '');

    const applyFilters = () => {
        const params: Record<string, string> = {};

        if (search) params.search = search;
        if (modePaiement && modePaiement !== 'all')
            params.mode_paiement = modePaiement;
        if (dateFrom) params.date_from = dateFrom;
        if (dateTo) params.date_to = dateTo;

        router.get(index.url(), params, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const clearFilters = () => {
        setSearch('');
        setModePaiement('');
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

    const hasActiveFilters = search || modePaiement || dateFrom || dateTo;

    const handleDelete = (reglement: ReglementData) => {
        if (
            confirm(
                `Are you sure you want to delete this payment of €${Number(reglement.montant).toFixed(2)}? This action cannot be undone.`,
            )
        ) {
            router.delete(
                destroy.url({
                    reglement: reglement.id,
                }),
            );
        }
    };

    const getPaymentMethodLabel = (method: string) => {
        const labels = {
            cash: 'Cash',
            card: 'Credit Card',
            transfer: 'Bank Transfer',
            check: 'Check',
        };
        return labels[method as keyof typeof labels] || method;
    };

    const getPaymentMethodColor = (method: string) => {
        const colors = {
            cash: 'bg-green-500/10 text-green-500 border-green-500/20',
            card: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
            transfer: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
            check: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
        };
        return colors[method as keyof typeof colors] || colors.cash;
    };

    // Calculate statistics
    const stats = {
        total: reglements.total,
        totalAmount: reglements.data.reduce(
            (sum, r) => sum + Number(r.montant),
            0,
        ),
        cash: reglements.data.filter((r) => r.mode_paiement === 'cash').length,
        card: reglements.data.filter((r) => r.mode_paiement === 'card').length,
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Payments Management" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">
                            Payments
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            View and manage all payment transactions
                        </p>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-4">
                    <div className="rounded-lg border bg-card p-4">
                        <div className="text-2xl font-bold">{stats.total}</div>
                        <p className="text-xs text-muted-foreground">
                            Total Payments
                        </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                        <div className="text-2xl font-bold text-green-600">
                            €{stats.totalAmount.toFixed(2)}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Total Amount
                        </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                        <div className="text-2xl font-bold text-green-500">
                            {stats.cash}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Cash Payments
                        </p>
                    </div>
                    <div className="rounded-lg border bg-card p-4">
                        <div className="text-2xl font-bold text-blue-500">
                            {stats.card}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Card Payments
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
                                    placeholder="Search by order ID or notes..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    onKeyDown={(e) =>
                                        e.key === 'Enter' && applyFilters()
                                    }
                                    className="pl-9"
                                />
                            </div>
                        </div>

                        {/* Payment Method Filter */}
                        <Select
                            value={modePaiement}
                            onValueChange={setModePaiement}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Payment Method" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Methods</SelectItem>
                                <SelectItem value="cash">Cash</SelectItem>
                                <SelectItem value="card">
                                    Credit Card
                                </SelectItem>
                                <SelectItem value="transfer">
                                    Bank Transfer
                                </SelectItem>
                                <SelectItem value="check">Check</SelectItem>
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
                            {modePaiement && modePaiement !== 'all' && (
                                <Badge variant="secondary">
                                    Method:{' '}
                                    {getPaymentMethodLabel(modePaiement)}
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
                        Showing {reglements.from} to {reglements.to} of{' '}
                        {reglements.total} payments
                    </p>
                </div>

                {/* Payments Grid */}
                {reglements.data.length > 0 ? (
                    <>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {reglements.data.map((reglement) => (
                                <Card
                                    key={reglement.id}
                                    className="overflow-hidden transition-shadow hover:shadow-lg"
                                >
                                    <CardContent className="p-4">
                                        <div className="space-y-3">
                                            {/* Header */}
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                                                        <span className="text-sm text-muted-foreground">
                                                            Order #
                                                            {reglement.order_id}
                                                        </span>
                                                    </div>
                                                    <p className="mt-1 text-2xl font-bold text-green-600">
                                                        €
                                                        {Number(
                                                            reglement.montant,
                                                        ).toFixed(2)}
                                                    </p>
                                                </div>
                                                <Badge
                                                    variant="outline"
                                                    className={getPaymentMethodColor(
                                                        reglement.mode_paiement,
                                                    )}
                                                >
                                                    {getPaymentMethodLabel(
                                                        reglement.mode_paiement,
                                                    )}
                                                </Badge>
                                            </div>

                                            {/* Date */}
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Calendar className="h-4 w-4" />
                                                <span>
                                                    {format(
                                                        new Date(
                                                            reglement.date_paiement,
                                                        ),
                                                        'MMM dd, yyyy',
                                                    )}
                                                </span>
                                            </div>

                                            {/* Notes */}
                                            {reglement.notes && (
                                                <div className="rounded-lg bg-muted/50 p-2">
                                                    <p className="text-xs text-muted-foreground">
                                                        {reglement.notes}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Footer */}
                                            <div className="flex items-center justify-between border-t pt-3">
                                                <div className="text-xs text-muted-foreground">
                                                    {reglement.creator ? (
                                                        <span>
                                                            By{' '}
                                                            {
                                                                reglement
                                                                    .creator
                                                                    .name
                                                            }
                                                        </span>
                                                    ) : (
                                                        <span>—</span>
                                                    )}
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleDelete(reglement)
                                                    }
                                                    className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Pagination */}
                        {reglements.last_page > 1 && (
                            <div className="flex justify-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    disabled={reglements.current_page === 1}
                                    onClick={() => {
                                        router.get(
                                            index.url(),
                                            {
                                                ...filters,
                                                page:
                                                    reglements.current_page - 1,
                                            },
                                            { preserveState: true },
                                        );
                                    }}
                                >
                                    Previous
                                </Button>
                                <div className="flex items-center gap-2">
                                    {Array.from(
                                        { length: reglements.last_page },
                                        (_, i) => i + 1,
                                    )
                                        .filter(
                                            (page) =>
                                                page === 1 ||
                                                page === reglements.last_page ||
                                                Math.abs(
                                                    page -
                                                    reglements.current_page,
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
                                                        reglements.current_page ===
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
                                        reglements.current_page ===
                                        reglements.last_page
                                    }
                                    onClick={() => {
                                        router.get(
                                            index.url(),
                                            {
                                                ...filters,
                                                page:
                                                    reglements.current_page + 1,
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
                            <DollarSign className="h-12 w-12 text-muted-foreground" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">
                            No payments found
                        </h3>
                        <p className="mb-4 text-sm text-muted-foreground">
                            {hasActiveFilters
                                ? 'Try adjusting your filters'
                                : 'No payments have been recorded yet'}
                        </p>
                        {hasActiveFilters && (
                            <Button variant="outline" onClick={clearFilters}>
                                Clear Filters
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </AppLayout>
    );
};

export default Index;
