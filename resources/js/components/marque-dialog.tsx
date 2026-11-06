import {
    store,
    update,
} from '@/actions/App/Http/Controllers/MarqueCarController';
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
import { Flash } from '@/types';
import { MarqueData } from '@/types/marques';
import { useForm } from '@inertiajs/react';
import { FormEvent, useEffect } from 'react';
import { toast } from 'sonner';

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    marque?: MarqueData | null;
    isUpdate: boolean;
};

export function MarqueDialog({ open, onOpenChange, marque, isUpdate }: Props) {
    const {
        data,
        setData,
        post,
        put,
        processing,
        errors,
        resetAndClearErrors,
    } = useForm({
        nom_marque: marque?.nom_marque || '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(store.url(), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: ({ props }) => {
                const { success, error } = props.flash as Flash;
                if (success) {
                    toast.success(success);
                }
                if (error) {
                    toast.error(error);
                }
                onOpenChange(false);
                resetAndClearErrors();
            },
        });
    };
    const handleUpdate = (e: FormEvent) => {
        e.preventDefault();
        put(update.url(marque!.id), {
            preserveScroll: true,
            onSuccess: ({ props }) => {
                const { success, error } = props.flash as Flash;
                if (success) {
                    toast.success(success);
                }
                if (error) {
                    toast.error(error);
                }
                onOpenChange(false);
                resetAndClearErrors();
            },
        });
    };

    useEffect(() => {
        if (isUpdate && marque?.id) {
            setData('nom_marque', marque!.nom_marque);
        }
    }, [isUpdate, marque?.id]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {marque ? 'Modifier' : 'Ajouter'} brand
                    </DialogTitle>
                    <DialogDescription>
                        {marque
                            ? 'Edit brand information'
                            : 'Add new car brand'}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={isUpdate ? handleUpdate : handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="nom_marque">Brand name</Label>
                            <Input
                                id="nom_marque"
                                value={data.nom_marque}
                                onChange={(e) =>
                                    setData('nom_marque', e.target.value)
                                }
                                placeholder="Ex: Dacia, Renault..."
                                maxLength={100}
                            />
                            {errors.nom_marque && (
                                <p className="text-sm text-destructive">
                                    {errors.nom_marque}
                                </p>
                            )}
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
                            {processing
                                ? 'Chargement...'
                                : marque
                                  ? 'Update'
                                  : 'Validate'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
