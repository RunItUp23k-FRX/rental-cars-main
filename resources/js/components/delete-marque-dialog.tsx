import { destroy } from '@/actions/App/Http/Controllers/MarqueCarController';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Flash } from '@/types';
import { MarqueData } from '@/types/marques';
import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    marque: MarqueData | null;
};

export function DeleteMarqueDialog({ open, onOpenChange, marque }: Props) {
    const { delete: deleteMarque, processing } = useForm();

    const handleDelete = () => {
        if (!marque) return;

        deleteMarque(destroy.url(marque.id), {
            preserveScroll: true,
            onSuccess: ({ props }) => {
                const { success, error } = props.flash as Flash;
                if (success) {
                    toast.success(success);
                    onOpenChange(false);
                }
                if (error) {
                    toast.error(error);
                }
            },
        });
    };

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Êtes-vous sûr?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Vous êtes sur le point de supprimer la marque "
                        <span className="font-semibold">
                            {marque?.nom_marque}
                        </span>
                        ". Cette action est irréversible.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={processing}>
                        Annuler
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleDelete}
                        disabled={processing}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                        {processing ? 'Suppression...' : 'Supprimer'}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
