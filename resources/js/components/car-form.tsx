import { store, update } from '@/actions/App/Http/Controllers/CarController';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { FileMetadata, useFileUpload } from '@/hooks/use-file-upload';
import { cn } from '@/lib/utils';
import { Flash } from '@/types';
import { Car, FuelType, Status, Transmission } from '@/types/cars-types';
import { MarqueData } from '@/types/marques';
import { useForm } from '@inertiajs/react';
import { Check, ChevronsUpDown, Image } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import InputError from './input-error';

interface CarFormProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    isUpdate?: boolean;
    marques: Pick<MarqueData, 'id' | 'nom_marque'>[];
    carData?: Car | null;
}

interface FormData {
    carName: string;
    marque: number | null;
    seats: number;
    transmission: Transmission;
    fuelType: FuelType;
    status: Status;
    hasAC: boolean;
    displayHome: boolean;
    file: File | FileMetadata | null;
    price: number;
}

export default function CarForm({
    isOpen,
    setIsOpen,
    isUpdate = false,
    marques,
    carData = null,
}: CarFormProps) {
    const [openMarque, setOpenMarque] = useState(false);
    const [{ files }, { removeFile, openFileDialog, getInputProps }] =
        useFileUpload({
            accept: 'image/*',
        });

    const { data, setData, post, processing, reset, errors, clearErrors } =
        useForm<FormData>({
            carName: carData?.name || '',
            marque: carData?.marque.id || null,
            transmission: carData?.transmission || 'automatic',
            fuelType: carData?.fuel_type || 'diesel',
            status: carData?.status || 'available',
            hasAC: carData?.ac || true,
            displayHome: carData?.display_in_home || false,
            file: null,
            seats: carData?.seats || 4,
            price: carData?.price || 0,
        });

    const previewUrl =
        files[0]?.preview ||
        (carData && isUpdate ? `/uploads/images/${carData.img_path}` : null);
    const fileName = files[0]?.file.name || null;

    useEffect(() => {
        if (fileName) {
            setData('file', files[0]?.file);
        }
    }, [fileName]);

    // Reset form when dialog closes
    useEffect(() => {
        if (!isOpen) {
            reset();
            clearErrors();
            removeFile(files[0]?.id);
        }
    }, [isOpen]);

    // Update form data when carData changes
    useEffect(() => {
        if (carData && isUpdate) {
            setData({
                carName: carData.name,
                marque: carData.marque.id,
                transmission: carData.transmission,
                fuelType: carData.fuel_type,
                status: carData.status,
                hasAC: carData.ac,
                displayHome: carData.display_in_home,
                file: null,
                seats: carData.seats,
                price: carData.price,
            });
        }
    }, [carData, isUpdate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const url =
            isUpdate && carData ? update.url({ car: carData.id }) : store.url();

        post(url, {
            forceFormData: true,
            onSuccess: ({ props }) => {
                const { success, error } = props.flash as Flash;
                if (success) {
                    toast.success(success);
                    setIsOpen(false);
                    reset();
                    clearErrors();
                }
                if (error) {
                    toast.error(error);
                }
            },
        });
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild className="hidden">
                <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[550px]">
                <DialogHeader>
                    <DialogTitle>
                        {isUpdate ? 'Update vehicle' : 'Add new vehicle'}
                    </DialogTitle>
                    <DialogDescription>
                        {isUpdate
                            ? 'Update the vehicle information below'
                            : 'Fill in the details to add a new vehicle to your fleet'}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-6 py-4">
                        {/* Vehicle Name */}
                        <div className="grid gap-2">
                            <Label htmlFor="name">
                                Vehicle name{' '}
                                <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="e.g., Toyota Camry 2024"
                                value={data.carName}
                                onChange={(e) => {
                                    setData('carName', e.target.value);
                                }}
                            />
                            <InputError message={errors.carName} />
                        </div>

                        {/* Marque Selection */}
                        <div className="grid gap-2">
                            <Label>
                                Brand{' '}
                                <span className="text-destructive">*</span>
                            </Label>
                            <Popover
                                open={openMarque}
                                onOpenChange={setOpenMarque}
                            >
                                <PopoverTrigger asChild>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={openMarque}
                                        className="justify-between"
                                    >
                                        {data.marque
                                            ? marques.find(
                                                  (marque) =>
                                                      marque.id === data.marque,
                                              )?.nom_marque
                                            : 'Select brand...'}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-[300px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search brand..." />
                                        <CommandList>
                                            <CommandEmpty>
                                                No brand found.
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {marques.map((marque) => (
                                                    <CommandItem
                                                        key={marque.id}
                                                        value={
                                                            marque.nom_marque
                                                        }
                                                        onSelect={() => {
                                                            setData(
                                                                'marque',
                                                                marque.id,
                                                            );
                                                            setOpenMarque(
                                                                false,
                                                            );
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                'mr-2 h-4 w-4',
                                                                data.marque ===
                                                                    marque.id
                                                                    ? 'opacity-100'
                                                                    : 'opacity-0',
                                                            )}
                                                        />
                                                        {marque.nom_marque}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <InputError message={errors.marque} />
                        </div>

                        {/* Vehicle Image */}
                        <div className="grid gap-2">
                            <Label>
                                Vehicle image{' '}
                                {!isUpdate && (
                                    <span className="text-destructive">*</span>
                                )}
                            </Label>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <div
                                        className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-input bg-muted/30"
                                        aria-label={
                                            previewUrl
                                                ? 'Preview of uploaded image'
                                                : 'Upload vehicle image'
                                        }
                                    >
                                        {previewUrl ? (
                                            <img
                                                className="size-full object-cover"
                                                src={previewUrl}
                                                alt="Vehicle preview"
                                            />
                                        ) : (
                                            <Image className="h-8 w-8 text-muted-foreground" />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <Button
                                            type="button"
                                            onClick={openFileDialog}
                                            variant="outline"
                                            className="w-full"
                                        >
                                            {fileName || (isUpdate && carData)
                                                ? 'Change image'
                                                : 'Upload image'}
                                        </Button>
                                        <input
                                            {...getInputProps()}
                                            className="sr-only"
                                            aria-label="Upload image file"
                                            tabIndex={-1}
                                        />
                                    </div>
                                </div>
                                {fileName && (
                                    <div className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-sm">
                                        <p className="truncate text-muted-foreground">
                                            {fileName}
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                removeFile(files[0]?.id);
                                                setData('file', null);
                                            }}
                                            className="ml-2 font-medium text-destructive hover:underline"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                )}
                            </div>
                            <InputError message={errors.file} />
                        </div>

                        {/* Grid Layout for Selects */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            {/* Transmission */}
                            <div className="grid gap-2">
                                <Label htmlFor="transmission">
                                    Transmission
                                </Label>
                                <Select
                                    value={data.transmission}
                                    onValueChange={(value: Transmission) =>
                                        setData('transmission', value)
                                    }
                                >
                                    <SelectTrigger id="transmission">
                                        <SelectValue placeholder="Select transmission" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="manual">
                                            Manual
                                        </SelectItem>
                                        <SelectItem value="automatic">
                                            Automatic
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.transmission} />
                            </div>

                            {/* Fuel Type */}
                            <div className="grid gap-2">
                                <Label htmlFor="fuel_type">Fuel type</Label>
                                <Select
                                    value={data.fuelType}
                                    onValueChange={(value: FuelType) =>
                                        setData('fuelType', value)
                                    }
                                >
                                    <SelectTrigger id="fuel_type">
                                        <SelectValue placeholder="Select fuel type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="gasoline">
                                            Gasoline
                                        </SelectItem>
                                        <SelectItem value="diesel">
                                            Diesel
                                        </SelectItem>
                                        <SelectItem value="electric">
                                            Electric
                                        </SelectItem>
                                        <SelectItem value="hybrid">
                                            Hybrid
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.fuelType} />
                            </div>
                        </div>

                        {/* Seats, Price and Status */}
                        <div className="grid gap-4 sm:grid-cols-3">
                            {/* Number of Seats */}
                            <div className="grid gap-2">
                                <Label htmlFor="seats">Seats</Label>
                                <Input
                                    id="seats"
                                    name="seats"
                                    type="number"
                                    min={1}
                                    max={10}
                                    placeholder="e.g., 5"
                                    value={data.seats}
                                    onChange={(e) =>
                                        setData('seats', Number(e.target.value))
                                    }
                                />
                                <InputError message={errors.seats} />
                            </div>

                            {/* Price */}
                            <div className="grid gap-2">
                                <Label htmlFor="price">Price/day</Label>
                                <Input
                                    id="price"
                                    name="price"
                                    type="number"
                                    min={0}
                                    step="0.01"
                                    placeholder="e.g., 50.00"
                                    value={data.price}
                                    onChange={(e) =>
                                        setData('price', Number(e.target.value))
                                    }
                                />
                                <InputError message={errors.price} />
                            </div>

                            {/* Status */}
                            <div className="grid gap-2">
                                <Label htmlFor="status">Status</Label>
                                <Select
                                    value={data.status}
                                    onValueChange={(value: Status) =>
                                        setData('status', value)
                                    }
                                >
                                    <SelectTrigger id="status">
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="available">
                                            Available
                                        </SelectItem>
                                        <SelectItem value="rented">
                                            Rented
                                        </SelectItem>
                                        <SelectItem value="maintenance">
                                            Maintenance
                                        </SelectItem>
                                        <SelectItem value="out_of_service">
                                            Out of service
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.status} />
                            </div>
                        </div>

                        {/* Checkboxes */}
                        <div className="flex flex-col gap-4 rounded-lg border bg-muted/30 p-4">
                            <div className="flex items-center space-x-3">
                                <Checkbox
                                    id="ac"
                                    checked={data.hasAC}
                                    onCheckedChange={(checked) =>
                                        setData('hasAC', checked === true)
                                    }
                                />
                                <div className="grid gap-1">
                                    <Label
                                        htmlFor="ac"
                                        className="cursor-pointer leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Air conditioning
                                    </Label>
                                    <p className="text-sm text-muted-foreground">
                                        Vehicle has AC system
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Checkbox
                                    id="display_home"
                                    checked={data.displayHome}
                                    onCheckedChange={(checked) =>
                                        setData('displayHome', checked === true)
                                    }
                                />
                                <div className="grid gap-1">
                                    <Label
                                        htmlFor="display_home"
                                        className="cursor-pointer leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Display on homepage
                                    </Label>
                                    <p className="text-sm text-muted-foreground">
                                        Show this vehicle on the homepage
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button
                                type="button"
                                variant="outline"
                                disabled={processing}
                            >
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button type="submit" disabled={processing}>
                            {processing
                                ? 'Saving...'
                                : isUpdate
                                  ? 'Save changes'
                                  : 'Add vehicle'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
