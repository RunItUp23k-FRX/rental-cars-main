import { destroy, index } from '@/actions/App/Http/Controllers/OrderController';
import { OrderUpdateModal } from '@/components/order-update-modale';
import { ReglementModal } from '@/components/reglement-form';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { OrderData } from '@/types/order-types';
import { ReglementData } from '@/types/reglement-types';
import { Head, router } from '@inertiajs/react';
import { format } from 'date-fns';
import {
    ArrowLeft,
    Calendar,
    Car,
    CreditCard,
    DollarSign,
    Edit,
    Mail,
    MapPin,
    Phone,
    Trash2,
    User,
} from 'lucide-react';
import { useState } from 'react';
type Props = {
    order: OrderData & { reglements: ReglementData[] };
};

const Show = ({ order }: Props) => {
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [reglementModalOpen, setReglementModalOpen] = useState(false);
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Dashboard',
            href: dashboard.url(),
        },
        {
            title: 'Orders',
            href: index.url(),
        },
        {
            title: `Order #${order.id}`,
            href: '#',
        },
    ];

    const getStatusColor = (status: string) => {
        const colors = {
            pending: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
            confirmed: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
            active: 'bg-green-500/10 text-green-500 border-green-500/20',
            completed: 'bg-gray-500/10 text-gray-500 border-gray-500/20',
            cancelled: 'bg-red-500/10 text-red-500 border-red-500/20',
        };
        return colors[status as keyof typeof colors] || colors.pending;
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

    const handleDelete = () => {
        if (
            confirm(
                'Are you sure you want to delete this order? This action cannot be undone.',
            )
        ) {
            router.delete(
                destroy.url({
                    order: order.id,
                }),
            );
        }
    };

    const rentalDays = Math.ceil(
        (new Date(order.drop_date).getTime() -
            new Date(order.pickup_date).getTime()) /
            (1000 * 60 * 60 * 24),
    );

    const paidAmount = order.total_price - order.solde_du;
    const paymentPercentage =
        Math.round((paidAmount / order.total_price) * 100) || 0;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Order #${order.id}`} />
            <div className="flex h-full flex-1 flex-col gap-6 p-4">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => router.visit(index.url())}
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">
                                Order #{order.id}
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Created on{' '}
                                {format(
                                    new Date(order.created_at),
                                    'MMM dd, yyyy',
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Badge
                            variant="outline"
                            className={`${getStatusColor(order.status)} text-base`}
                        >
                            {order.status.charAt(0).toUpperCase() +
                                order.status.slice(1)}
                        </Badge>
                        <Button
                            variant="outline"
                            onClick={() => setUpdateModalOpen(true)}
                        >
                            <Edit className="mr-2 h-4 w-4" />
                            Update Order
                        </Button>
                        {['pending', 'cancelled'].includes(order.status) && (
                            <Button
                                variant="destructive"
                                onClick={handleDelete}
                            >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                            </Button>
                        )}
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Left Column - Main Details */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Customer Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <User className="h-5 w-5" />
                                    Customer Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-sm text-muted-foreground">
                                                Name
                                            </p>
                                            <p className="font-medium">
                                                {order.customer_name}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">
                                                Email
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <Mail className="h-4 w-4 text-muted-foreground" />
                                                <p className="font-medium">
                                                    {order.customer_email}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">
                                                Phone
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <Phone className="h-4 w-4 text-muted-foreground" />
                                                <p className="font-medium">
                                                    {order.customer_phone}
                                                </p>
                                            </div>
                                        </div>
                                        {order.customer_address && (
                                            <div>
                                                <p className="text-sm text-muted-foreground">
                                                    Address
                                                </p>
                                                <p className="font-medium">
                                                    {order.customer_address}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Rental Details */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="h-5 w-5" />
                                    Rental Details
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Pickup Date
                                        </p>
                                        <p className="font-medium">
                                            {format(
                                                new Date(order.pickup_date),
                                                'MMM dd, yyyy',
                                            )}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Return Date
                                        </p>
                                        <p className="font-medium">
                                            {format(
                                                new Date(order.drop_date),
                                                'MMM dd, yyyy',
                                            )}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Rental Duration
                                        </p>
                                        <p className="font-medium">
                                            {rentalDays}{' '}
                                            {rentalDays === 1 ? 'day' : 'days'}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            Daily Rate
                                        </p>
                                        <p className="font-medium">
                                            €
                                            {Number(order.daily_rate).toFixed(
                                                2,
                                            )}
                                        </p>
                                    </div>
                                </div>

                                {(order.pickup_location ||
                                    order.drop_location) && (
                                    <div className="space-y-3 border-t pt-4">
                                        {order.pickup_location && (
                                            <div>
                                                <p className="text-sm text-muted-foreground">
                                                    Pickup Location
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4 text-muted-foreground" />
                                                    <p className="font-medium">
                                                        {order.pickup_location}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                        {order.drop_location && (
                                            <div>
                                                <p className="text-sm text-muted-foreground">
                                                    Drop-off Location
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4 text-muted-foreground" />
                                                    <p className="font-medium">
                                                        {order.drop_location}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {order.notes && (
                                    <div className="border-t pt-4">
                                        <p className="text-sm text-muted-foreground">
                                            Notes
                                        </p>
                                        <p className="mt-1 font-medium whitespace-pre-wrap">
                                            {order.notes}
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Payment History */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="flex items-center gap-2">
                                        <CreditCard className="h-5 w-5" />
                                        Payment History
                                    </CardTitle>
                                    {order.solde_du > 0 && (
                                        <Button
                                            onClick={() =>
                                                setReglementModalOpen(true)
                                            }
                                        >
                                            <DollarSign className="mr-2 h-4 w-4" />
                                            Add Payment
                                        </Button>
                                    )}
                                </div>
                            </CardHeader>
                            <CardContent>
                                {order.reglements &&
                                order.reglements.length > 0 ? (
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Date</TableHead>
                                                <TableHead>Amount</TableHead>
                                                <TableHead>Method</TableHead>
                                                <TableHead>Notes</TableHead>
                                                <TableHead>By</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {order.reglements.map(
                                                (reglement) => (
                                                    <TableRow
                                                        key={reglement.id}
                                                    >
                                                        <TableCell>
                                                            {format(
                                                                new Date(
                                                                    reglement.date_paiement,
                                                                ),
                                                                'MMM dd, yyyy',
                                                            )}
                                                        </TableCell>
                                                        <TableCell className="font-medium text-green-600">
                                                            €
                                                            {Number(
                                                                reglement.montant,
                                                            ).toFixed(2)}
                                                        </TableCell>
                                                        <TableCell>
                                                            <Badge
                                                                variant="secondary"
                                                                className="capitalize"
                                                            >
                                                                {getPaymentMethodLabel(
                                                                    reglement.mode_paiement,
                                                                )}
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell className="max-w-[200px] truncate">
                                                            {reglement.notes ||
                                                                '-'}
                                                        </TableCell>
                                                        <TableCell>
                                                            {reglement.creator
                                                                ?.name || '-'}
                                                        </TableCell>
                                                    </TableRow>
                                                ),
                                            )}
                                        </TableBody>
                                    </Table>
                                ) : (
                                    <div className="py-8 text-center text-muted-foreground">
                                        No payments recorded yet
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Summary */}
                    <div className="space-y-6">
                        {/* Vehicle Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Car className="h-5 w-5" />
                                    Vehicle
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="relative aspect-video overflow-hidden rounded-lg">
                                        <img
                                            src={`/uploads/images/${order.car.img_path}`}
                                            alt={order.car.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            {order.car.name}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {order.car.marque.nom_marque}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div>
                                            <p className="text-muted-foreground">
                                                Transmission
                                            </p>
                                            <p className="font-medium capitalize">
                                                {order.car.transmission}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground">
                                                Fuel
                                            </p>
                                            <p className="font-medium capitalize">
                                                {order.car.fuel_type}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Payment Summary */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Payment Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">
                                            Subtotal
                                        </span>
                                        <span className="font-medium">
                                            €
                                            {Number(order.total_price).toFixed(
                                                2,
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">
                                            Paid Amount
                                        </span>
                                        <span className="font-medium text-green-600">
                                            €{paidAmount.toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="border-t pt-2">
                                        <div className="flex justify-between">
                                            <span className="font-semibold">
                                                Balance Due
                                            </span>
                                            <span
                                                className={`text-lg font-bold ${order.solde_du > 0 ? 'text-destructive' : 'text-green-600'}`}
                                            >
                                                €
                                                {Number(order.solde_du).toFixed(
                                                    2,
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Progress */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">
                                            Payment Progress
                                        </span>
                                        <span className="font-medium">
                                            {paymentPercentage}%
                                        </span>
                                    </div>
                                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                                        <div
                                            className="h-full bg-primary transition-all"
                                            style={{
                                                width: `${paymentPercentage}%`,
                                            }}
                                        />
                                    </div>
                                </div>

                                {order.solde_du > 0 && (
                                    <Button
                                        onClick={() =>
                                            setReglementModalOpen(true)
                                        }
                                        className="w-full"
                                    >
                                        <DollarSign className="mr-2 h-4 w-4" />
                                        Record Payment
                                    </Button>
                                )}
                            </CardContent>
                        </Card>

                        {/* Metadata */}
                        {order.updated_by_user && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">
                                        Last Updated
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm">
                                    <p className="text-muted-foreground">
                                        {format(
                                            new Date(order.updated_at),
                                            'MMM dd, yyyy HH:mm',
                                        )}
                                    </p>
                                    <p className="mt-1 font-medium">
                                        By {order.updated_by_user.name}
                                    </p>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </div>

            {/* Modals */}
            <OrderUpdateModal
                order={order}
                open={updateModalOpen}
                onOpenChange={setUpdateModalOpen}
            />
            <ReglementModal
                order={order}
                open={reglementModalOpen}
                onOpenChange={setReglementModalOpen}
            />
        </AppLayout>
    );
};

export default Show;
