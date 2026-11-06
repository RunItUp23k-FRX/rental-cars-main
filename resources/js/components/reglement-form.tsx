import { store } from '@/actions/App/Http/Controllers/ReglementController';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
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
import { CreditCard, DollarSign, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface ReglementModalProps {
    order: OrderData;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ReglementModal({
    order,
    open,
    onOpenChange,
}: ReglementModalProps) {
    const { data, setData, errors, processing, reset } = useForm({
        montant: '',
        mode_paiement: 'cash' as 'cash' | 'card' | 'transfer' | 'check',
        date_paiement: new Date().toISOString().split('T')[0],
        notes: '',
        order: order.id,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        router.post(store.url(), data, {
            preserveScroll: true,
            onSuccess: ({ props }) => {
                const { success, error } = props.flash as Flash;
                if (success) {
                    reset();
                    onOpenChange(false);
                    toast.success(success);
                }
                if (error) {
                    toast.error(error);
                }
            },
        });
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

    const maxPayment = order.solde_du;
    const handleAmountChange = (value: string) => {
        const numValue = parseFloat(value);
        if (!isNaN(numValue) && numValue <= maxPayment) {
            setData('montant', value);
        } else if (value === '') {
            setData('montant', '');
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5" />
                            Add Payment
                        </DialogTitle>
                        <DialogDescription>
                            Record a payment for Order #{order.id} -{' '}
                            {order.customer_name}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">
                        {/* Payment Summary */}
                        <div className="rounded-lg border bg-muted/50 p-3">
                            <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Total Order Amount:
                                    </span>
                                    <span className="font-medium">
                                        ${Number(order.total_price).toFixed(2)}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Already Paid:
                                    </span>
                                    <span className="font-medium text-green-600">
                                        $
                                        {(
                                            Number(order.total_price) -
                                            Number(order.solde_du)
                                        ).toFixed(2)}
                                    </span>
                                </div>
                                <div className="flex justify-between border-t pt-1">
                                    <span className="font-medium">
                                        Remaining Balance:
                                    </span>
                                    <span className="font-bold text-destructive">
                                        ${Number(order.solde_du).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Amount Field */}
                        <div className="space-y-2">
                            <Label htmlFor="montant">
                                Payment Amount{' '}
                                <span className="text-destructive">*</span>
                            </Label>
                            <div className="relative">
                                <DollarSign className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    id="montant"
                                    type="number"
                                    step="0.01"
                                    min="0.01"
                                    max={maxPayment}
                                    placeholder="0.00"
                                    value={data.montant}
                                    onChange={(e) =>
                                        handleAmountChange(e.target.value)
                                    }
                                    className="pl-9"
                                    required
                                />
                            </div>
                            {errors.montant && (
                                <p className="text-xs text-destructive">
                                    {errors.montant}
                                </p>
                            )}
                            <p className="text-xs text-muted-foreground">
                                Maximum payment: $
                                {Number(maxPayment).toFixed(2)}
                            </p>
                        </div>

                        {/* Payment Method */}
                        <div className="space-y-2">
                            <Label htmlFor="mode_paiement">
                                Payment Method{' '}
                                <span className="text-destructive">*</span>
                            </Label>
                            <Select
                                value={data.mode_paiement}
                                onValueChange={(value) =>
                                    setData(
                                        'mode_paiement',
                                        value as typeof data.mode_paiement,
                                    )
                                }
                            >
                                <SelectTrigger id="mode_paiement">
                                    <SelectValue placeholder="Select payment method" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="cash">
                                        {getPaymentMethodLabel('cash')}
                                    </SelectItem>
                                    <SelectItem value="card">
                                        {getPaymentMethodLabel('card')}
                                    </SelectItem>
                                    <SelectItem value="transfer">
                                        {getPaymentMethodLabel('transfer')}
                                    </SelectItem>
                                    <SelectItem value="check">
                                        {getPaymentMethodLabel('check')}
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.mode_paiement && (
                                <p className="text-xs text-destructive">
                                    {errors.mode_paiement}
                                </p>
                            )}
                        </div>

                        {/* Payment Date */}
                        <div className="space-y-2">
                            <Label htmlFor="date_paiement">
                                Payment Date{' '}
                                <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="date_paiement"
                                type="date"
                                value={data.date_paiement}
                                onChange={(e) =>
                                    setData('date_paiement', e.target.value)
                                }
                                max={new Date().toISOString().split('T')[0]}
                                required
                            />
                            {errors.date_paiement && (
                                <p className="text-xs text-destructive">
                                    {errors.date_paiement}
                                </p>
                            )}
                        </div>

                        {/* Notes Field */}
                        <div className="space-y-2">
                            <Label htmlFor="notes">Notes (Optional)</Label>
                            <Textarea
                                id="notes"
                                placeholder="Add notes about this payment..."
                                value={data.notes}
                                onChange={(e) =>
                                    setData('notes', e.target.value)
                                }
                                rows={3}
                                maxLength={500}
                            />
                            {errors.notes && (
                                <p className="text-xs text-destructive">
                                    {errors.notes}
                                </p>
                            )}
                        </div>
                    </div>

                    <DialogFooter>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                                reset();
                                onOpenChange(false);
                            }}
                            disabled={processing}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Add Payment
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
