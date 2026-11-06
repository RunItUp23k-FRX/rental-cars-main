import { destroy } from '@/actions/App/Http/Controllers/CarController';
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
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { GridPattern } from '@/components/ui/grid-pattern';
import { AirConditionLogo, FuelLogo } from '@/lib/logoShared';
import { cn } from '@/lib/utils';
import { Flash } from '@/types';
import { Car } from '@/types/cars-types';
import { router } from '@inertiajs/react';
import { EllipsisVertical, Eye, HousePlus, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface CarListeProps {
    car: Car;
    onEdit: (car: Car) => void;
}

const CarListe = ({ car, onEdit }: CarListeProps) => {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = () => {
        setIsDeleting(true);
        router.delete(destroy.url({ car: car.id }), {
            onSuccess: ({ props }) => {
                const flash = props.flash as Flash;
                if (flash.success) {
                    toast.success(flash.success);
                }
                if (flash.error) {
                    toast.error(flash.error);
                }
                setShowDeleteDialog(false);
            },
        });
    };

    return (
        <>
            <div className="relative h-full space-y-2 rounded-lg border p-2 shadow-xl">
                <div className="relative z-50 h-56">
                    <img
                        src={`/uploads/images/${car.img_path}`}
                        className="z-50 h-full w-full rounded-lg object-cover"
                        alt={car.name}
                    />
                </div>
                <GridPattern
                    className={cn(
                        'mask-[linear-gradient(to_top_left,white,2%,transparent)]',
                    )}
                    height={20}
                    width={20}
                    x={2}
                />
                <div>
                    <h1 className="text-sm font-semibold text-muted-foreground uppercase">
                        {car.marque.nom_marque}
                    </h1>
                    <h2 className="font-bold">{car.name}</h2>
                </div>
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                    <div className="grid grid-cols-3 gap-2">
                        <Button
                            variant="default"
                            size={'sm'}
                            title={car.ac ? 'Has AC' : 'No AC'}
                            disabled={!car.ac}
                        >
                            <AirConditionLogo />
                        </Button>
                        <Button
                            variant={
                                car.display_in_home ? 'default' : 'outline'
                            }
                            size={'sm'}
                            title={
                                car.display_in_home
                                    ? 'Displayed on home'
                                    : 'Not displayed'
                            }
                        >
                            <HousePlus />
                        </Button>
                        <Button
                            variant={'outline'}
                            size={'sm'}
                            title={car.fuel_type}
                        >
                            <FuelLogo />
                        </Button>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Button variant={'default'} className="h-8 w-full">
                            €<span className="ml-1">{car.price}</span>
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant={'outline'} size={'sm'}>
                                    <EllipsisVertical className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => onEdit(car)}
                                    className="cursor-pointer"
                                    disabled={car.status === 'rented'}
                                >
                                    <Pencil className="mr-2 h-4 w-4" />
                                    <span>Edit</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() =>
                                        router.visit(`/cars/${car.slug}`)
                                    }
                                    className="cursor-pointer"
                                >
                                    <Eye className="mr-2 h-4 w-4" />
                                    <span>View details</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => setShowDeleteDialog(true)}
                                    className="cursor-pointer text-destructive focus:text-destructive"
                                    disabled={car.status === 'rented'}
                                >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    <span>Delete</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-2">
                    <span
                        className={`rounded-full px-2 py-1 text-xs font-medium ${
                            car.status === 'available'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                : car.status === 'rented'
                                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                  : car.status === 'maintenance'
                                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                        }`}
                    >
                        {car.status === 'out_of_service'
                            ? 'Out of service'
                            : car.status}
                    </span>
                    <span className="text-xs text-muted-foreground">
                        {car.seats} seats • {car.transmission}
                    </span>
                </div>
            </div>
            {/* Delete Confirmation Dialog */}
            <AlertDialog
                open={showDeleteDialog}
                onOpenChange={setShowDeleteDialog}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete the vehicle <strong>{car.name}</strong> and
                            remove it from our database.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isDeleting}>
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDelete}
                            disabled={isDeleting}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            {isDeleting ? 'Deleting...' : 'Delete'}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default CarListe;
