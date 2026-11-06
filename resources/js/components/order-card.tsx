import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { OrderData } from '@/types/order-types';
import { format } from 'date-fns';
import {
    Calendar,
    CreditCard,
    Edit,
    Eye,
    MapPin,
    MoreVertical,
    Phone,
    Trash2,
} from 'lucide-react';

interface OrderCardProps {
    order: OrderData;
    onView: (order: OrderData) => void;
    onUpdate?: (order: OrderData) => void;
    onDelete?: (order: OrderData) => void;
    onAddPayment?: (order: OrderData) => void;
}

export function OrderCard({
    order,
    onView,
    onUpdate,
    onDelete,
    onAddPayment,
}: OrderCardProps) {
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

    const getStatusLabel = (status: string) => {
        const labels = {
            pending: 'Pending',
            confirmed: 'Confirmed',
            active: 'Active',
            completed: 'Completed',
            cancelled: 'Cancelled',
        };
        return labels[status as keyof typeof labels] || status;
    };

    const getPaymentStatusColor = () => {
        if (order.solde_du <= 0) {
            return 'bg-green-500/10 text-green-500 border-green-500/20';
        } else if (order.solde_du < order.total_price) {
            return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
        }
        return 'bg-red-500/10 text-red-500 border-red-500/20';
    };

    const getPaymentStatusLabel = () => {
        if (order.solde_du <= 0) return 'Paid';
        if (order.solde_du < order.total_price) return 'Partial';
        return 'Unpaid';
    };

    const paidAmount = order.total_price - order.solde_du;
    const paymentPercentage =
        Math.round((paidAmount / order.total_price) * 100) || 0;

    // Check if delete is allowed (only pending/cancelled orders)
    const canDelete = ['pending', 'cancelled'].includes(order.status);

    return (
        <Card className="overflow-hidden transition-shadow hover:shadow-lg">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                            <h3 className="truncate font-semibold">
                                Order #{order.id}
                            </h3>
                            {/* Actions Menu */}
                            {(onUpdate || onDelete || onAddPayment) && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-7 w-7"
                                        >
                                            <MoreVertical className="h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        {onUpdate && (
                                            <DropdownMenuItem
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onUpdate(order);
                                                }}
                                            >
                                                <Edit className="mr-2 h-4 w-4" />
                                                Update Status
                                            </DropdownMenuItem>
                                        )}
                                        {onAddPayment && order.solde_du > 0 && (
                                            <DropdownMenuItem
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onAddPayment(order);
                                                }}
                                            >
                                                <CreditCard className="mr-2 h-4 w-4" />
                                                Add Payment
                                            </DropdownMenuItem>
                                        )}
                                        {onDelete && canDelete && (
                                            <>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onDelete(order);
                                                    }}
                                                    className="text-destructive focus:text-destructive"
                                                >
                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                    Delete Order
                                                </DropdownMenuItem>
                                            </>
                                        )}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}
                        </div>
                        <p className="truncate text-sm text-muted-foreground">
                            {order.customer_name}
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Badge
                            variant="outline"
                            className={getStatusColor(order.status)}
                        >
                            {getStatusLabel(order.status)}
                        </Badge>
                        <Badge
                            variant="outline"
                            className={getPaymentStatusColor()}
                        >
                            {getPaymentStatusLabel()}
                        </Badge>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-3 pb-3">
                {/* Car Info */}
                <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-2">
                    <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded">
                        <img
                            src={`/uploads/images/${order.car.img_path}`}
                            alt={order.car.name}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">
                            {order.car.name}
                        </p>
                        <p className="truncate text-xs text-muted-foreground">
                            {order.car.marque.nom_marque}
                        </p>
                    </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>
                            {format(new Date(order.pickup_date), 'MMM dd')}
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>
                            {format(new Date(order.drop_date), 'MMM dd')}
                        </span>
                    </div>
                </div>

                {/* Contact & Locations */}
                <div className="space-y-1.5 text-xs">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Phone className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{order.customer_phone}</span>
                    </div>
                    {(order.pickup_location || order.drop_location) && (
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5 shrink-0" />
                            <span className="truncate">
                                {order.pickup_location && order.drop_location
                                    ? `${order.pickup_location} → ${order.drop_location}`
                                    : order.pickup_location ||
                                      order.drop_location}
                            </span>
                        </div>
                    )}
                </div>

                {/* Payment Progress */}
                <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Payment</span>
                        <span className="font-medium">
                            {paymentPercentage}%
                        </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <div
                            className="h-full bg-primary transition-all"
                            style={{ width: `${paymentPercentage}%` }}
                        />
                    </div>
                    <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">
                            ${paidAmount.toFixed(2)} / $
                            {Number(order.total_price || 0).toFixed(2)}
                        </span>
                        {order.solde_du > 0 && (
                            <span className="font-medium text-destructive">
                                Due: ${Number(order.solde_du || 0).toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>
            </CardContent>

            <CardFooter className="border-t pt-3">
                <div className="flex w-full gap-2">
                    <Button
                        onClick={() => onView(order)}
                        className="flex-1"
                        size="sm"
                    >
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                    </Button>
                    {onAddPayment && order.solde_du > 0 && (
                        <Button
                            onClick={() => onAddPayment(order)}
                            variant="outline"
                            size="sm"
                            className="shrink-0"
                        >
                            <CreditCard className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}
