import { update } from '@/actions/App/Http/Controllers/OrderController';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Flash } from '@/types';
import { OrderData } from '@/types/order-types';
import { router, useForm } from '@inertiajs/react';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface OrderUpdateModalProps {
    order: OrderData;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function OrderUpdateModal({
    order,
    open,
    onOpenChange,
}: OrderUpdateModalProps) {
    const { data, setData, processing } = useForm({
        status: order.status,
        notes: order.notes || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        router.put(
            update.url({
                order: order.id,
            }),
            data,
            {
                preserveScroll: true,
                onSuccess: ({ props }) => {
                    const { success, error } = props.flash as Flash;
                    if (success) {
                        onOpenChange(false);
                        toast.success(success);
                    }
                    if (error) {
                        toast.error(error);
                    }
                },
            },
        );
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

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Update Order #{order.id}</DialogTitle>
                        <DialogDescription>
                            Update order status and add notes for{' '}
                            {order.customer_name}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        {/* Status Field */}
                        <div className="space-y-2">
                            <Label htmlFor="status">Order Status</Label>
                            <Select
                                value={data.status}
                                onValueChange={(value) =>
                                    setData(
                                        'status',
                                        value as OrderData['status'],
                                    )
                                }
                            >
                                <SelectTrigger id="status">
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="pending">
                                        {getStatusLabel('pending')}
                                    </SelectItem>
                                    <SelectItem value="confirmed">
                                        {getStatusLabel('confirmed')}
                                    </SelectItem>
                                    <SelectItem value="active">
                                        {getStatusLabel('active')}
                                    </SelectItem>
                                    <SelectItem value="completed">
                                        {getStatusLabel('completed')}
                                    </SelectItem>
                                    <SelectItem value="cancelled">
                                        {getStatusLabel('cancelled')}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <p className="text-xs text-muted-foreground">
                                Changing status will affect car availability
                            </p>
                        </div>

                        {/* Notes Field */}
                        <div className="space-y-2">
                            <Label htmlFor="notes">Notes (Optional)</Label>
                            <Textarea
                                id="notes"
                                placeholder="Add internal notes about this order..."
                                value={data.notes}
                                onChange={(e) =>
                                    setData('notes', e.target.value)
                                }
                                rows={4}
                                maxLength={1000}
                            />
                            <p className="text-xs text-muted-foreground">
                                {data.notes.length}/1000 characters
                            </p>
                        </div>

                        {/* Order Summary */}
                        <div className="rounded-lg border bg-muted/50 p-3 text-sm">
                            <div className="space-y-1">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Customer:
                                    </span>
                                    <span className="font-medium">
                                        {order.customer_name}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Car:
                                    </span>
                                    <span className="font-medium">
                                        {order.car.name}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Total:
                                    </span>
                                    <span className="font-medium">
                                        ${Number(order.total_price).toFixed(2)}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Balance Due:
                                    </span>
                                    <span
                                        className={`font-medium ${order.solde_du > 0 ? 'text-destructive' : 'text-green-600'}`}
                                    >
                                        ${Number(order.solde_du).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            disabled={processing}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Update Order
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
