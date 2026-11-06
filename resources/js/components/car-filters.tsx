import { index } from '@/actions/App/Http/Controllers/CarController';
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
} from '@/components/ui/dialog';
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
import { Slider } from '@/components/ui/slider';
import { FuelType, Status, Transmission } from '@/types/cars-types';
import { MarqueData } from '@/types/marques';
import { router } from '@inertiajs/react';
import { ChevronsUpDown, FilterX } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CarsFiltersAdminProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    marques: Pick<MarqueData, 'id' | 'nom_marque'>[];
    currentFilters?: FiltersState;
}

export interface FiltersState {
    marques: number[];
    transmission: Transmission | 'all';
    fuelType: FuelType | 'all';
    status: Status | 'all';
    minSeats: number;
    maxSeats: number;
    minPrice: number;
    maxPrice: number;
    hasAC: boolean | null;
    displayHome: boolean | null;
}

const defaultFilters: FiltersState = {
    marques: [],
    transmission: 'all',
    fuelType: 'all',
    status: 'all',
    minSeats: 2,
    maxSeats: 10,
    minPrice: 5,
    maxPrice: 1240,
    hasAC: null,
    displayHome: null,
};

export default function CarsFiltersAdmin({
    isOpen,
    setIsOpen,
    marques,
    currentFilters,
}: CarsFiltersAdminProps) {
    const [filters, setFilters] = useState<FiltersState>(
        currentFilters || defaultFilters,
    );
    const [openMarque, setOpenMarque] = useState(false);
    const [seatRange, setSeatRange] = useState<number[]>([
        filters.minSeats,
        filters.maxSeats,
    ]);
    const [priceRange, setPriceRange] = useState<number[]>([
        filters.minPrice,
        filters.maxPrice,
    ]);

    useEffect(() => {
        if (currentFilters) {
            setFilters(currentFilters);
            setSeatRange([currentFilters.minSeats, currentFilters.maxSeats]);
            setPriceRange([currentFilters.minPrice, currentFilters.maxPrice]);
        }
    }, [currentFilters]);

    const handleMarqueToggle = (marqueId: number) => {
        setFilters((prev) => ({
            ...prev,
            marques: prev.marques.includes(marqueId)
                ? prev.marques.filter((id) => id !== marqueId)
                : [...prev.marques, marqueId],
        }));
    };

    const formatPrice = (price: number) => {
        return price === defaultFilters.maxPrice
            ? `€${price.toLocaleString()}+`
            : `€${price.toLocaleString()}`;
    };

    const handleApplyFilters = () => {
        const params: any = {
            marques:
                filters.marques.length > 0
                    ? filters.marques.join(',')
                    : undefined,
            transmission:
                filters.transmission !== 'all'
                    ? filters.transmission
                    : undefined,
            fuelType: filters.fuelType !== 'all' ? filters.fuelType : undefined,
            status: filters.status !== 'all' ? filters.status : undefined,
            minSeats:
                filters.minSeats !== defaultFilters.minSeats
                    ? filters.minSeats
                    : undefined,
            maxSeats:
                filters.maxSeats !== defaultFilters.maxSeats
                    ? filters.maxSeats
                    : undefined,
            minPrice:
                filters.minPrice !== defaultFilters.minPrice
                    ? filters.minPrice
                    : undefined,
            maxPrice:
                filters.maxPrice !== defaultFilters.maxPrice
                    ? filters.maxPrice
                    : undefined,
            hasAC:
                filters.hasAC !== null
                    ? filters.hasAC
                        ? '1'
                        : '0'
                    : undefined,
            displayHome:
                filters.displayHome !== null
                    ? filters.displayHome
                        ? '1'
                        : '0'
                    : undefined,
        };

        // Remove undefined values
        Object.keys(params).forEach(
            (key) => params[key] === undefined && delete params[key],
        );

        router.get(index.url(), params, {
            preserveState: true,
            preserveScroll: true,
        });

        setIsOpen(false);
    };

    const handleResetFilters = () => {
        setFilters(defaultFilters);
        setSeatRange([defaultFilters.minSeats, defaultFilters.maxSeats]);
        setPriceRange([defaultFilters.minPrice, defaultFilters.maxPrice]);

        router.get(
            index.url(),
            {},
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    };

    const activeFiltersCount = () => {
        let count = 0;
        if (filters.marques.length > 0) count++;
        if (filters.transmission !== 'all') count++;
        if (filters.fuelType !== 'all') count++;
        if (filters.status !== 'all') count++;
        if (
            filters.minSeats !== defaultFilters.minSeats ||
            filters.maxSeats !== defaultFilters.maxSeats
        )
            count++;
        if (
            filters.minPrice !== defaultFilters.minPrice ||
            filters.maxPrice !== defaultFilters.maxPrice
        )
            count++;
        if (filters.hasAC !== null) count++;
        if (filters.displayHome !== null) count++;
        return count;
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[550px]">
                <DialogHeader>
                    <DialogTitle>Filter Vehicles</DialogTitle>
                    <DialogDescription>
                        Apply filters to find the perfect vehicle
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-6 py-4">
                    {/* Brand Filter */}
                    <div className="grid gap-2">
                        <Label>Brand</Label>
                        <Popover open={openMarque} onOpenChange={setOpenMarque}>
                            <PopoverTrigger asChild>
                                <Button
                                    type="button"
                                    variant="outline"
                                    role="combobox"
                                    className="justify-between"
                                >
                                    {filters.marques.length > 0
                                        ? `${filters.marques.length} brand(s) selected`
                                        : 'Select brands...'}
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
                                                    value={marque.nom_marque}
                                                    onSelect={() =>
                                                        handleMarqueToggle(
                                                            marque.id,
                                                        )
                                                    }
                                                >
                                                    <div className="flex items-center space-x-2">
                                                        <Checkbox
                                                            checked={filters.marques.includes(
                                                                marque.id,
                                                            )}
                                                        />
                                                        <span>
                                                            {marque.nom_marque}
                                                        </span>
                                                    </div>
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>

                    {/* Transmission and Fuel Type */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="grid gap-2">
                            <Label htmlFor="transmission">Transmission</Label>
                            <Select
                                value={filters.transmission}
                                onValueChange={(value: Transmission | 'all') =>
                                    setFilters({
                                        ...filters,
                                        transmission: value,
                                    })
                                }
                            >
                                <SelectTrigger id="transmission">
                                    <SelectValue placeholder="All" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="manual">
                                        Manual
                                    </SelectItem>
                                    <SelectItem value="automatic">
                                        Automatic
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="fuel_type">Fuel type</Label>
                            <Select
                                value={filters.fuelType}
                                onValueChange={(value: FuelType | 'all') =>
                                    setFilters({ ...filters, fuelType: value })
                                }
                            >
                                <SelectTrigger id="fuel_type">
                                    <SelectValue placeholder="All" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>
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
                        </div>
                    </div>

                    {/* Status Filter */}
                    <div className="grid gap-2">
                        <Label htmlFor="status">Status</Label>
                        <Select
                            value={filters.status}
                            onValueChange={(value: Status | 'all') =>
                                setFilters({ ...filters, status: value })
                            }
                        >
                            <SelectTrigger id="status">
                                <SelectValue placeholder="All" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="available">
                                    Available
                                </SelectItem>
                                <SelectItem value="rented">Rented</SelectItem>
                                <SelectItem value="maintenance">
                                    Maintenance
                                </SelectItem>
                                <SelectItem value="out_of_service">
                                    Out of service
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Seats Range */}
                    <div className="grid gap-3">
                        <Label className="tabular-nums">
                            Number of seats: {seatRange[0]} - {seatRange[1]}
                        </Label>
                        <Slider
                            value={seatRange}
                            onValueChange={(value) => {
                                setSeatRange(value);
                                setFilters({
                                    ...filters,
                                    minSeats: value[0],
                                    maxSeats: value[1],
                                });
                            }}
                            min={2}
                            max={10}
                            step={1}
                            aria-label="Seats range slider"
                        />
                    </div>

                    {/* Price Range */}
                    <div className="grid gap-3">
                        <Label className="tabular-nums">
                            From {formatPrice(priceRange[0])} to{' '}
                            {formatPrice(priceRange[1])}
                        </Label>
                        <Slider
                            value={priceRange}
                            onValueChange={(value) => {
                                setPriceRange(value);
                                setFilters({
                                    ...filters,
                                    minPrice: value[0],
                                    maxPrice: value[1],
                                });
                            }}
                            min={defaultFilters.minPrice}
                            max={defaultFilters.maxPrice}
                            step={5}
                            aria-label="Price range slider"
                        />
                    </div>

                    {/* Additional Options */}
                    <div className="grid gap-4 rounded-lg border bg-muted/30 p-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">
                                    Air Conditioning
                                </Label>
                                <p className="text-sm text-muted-foreground">
                                    Filter by AC availability
                                </p>
                            </div>
                            <Select
                                value={
                                    filters.hasAC === null
                                        ? 'all'
                                        : filters.hasAC
                                            ? 'yes'
                                            : 'no'
                                }
                                onValueChange={(value) =>
                                    setFilters({
                                        ...filters,
                                        hasAC:
                                            value === 'all'
                                                ? null
                                                : value === 'yes',
                                    })
                                }
                            >
                                <SelectTrigger className="w-[100px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="yes">Yes</SelectItem>
                                    <SelectItem value="no">No</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base">
                                    Homepage Display
                                </Label>
                                <p className="text-sm text-muted-foreground">
                                    Featured on homepage
                                </p>
                            </div>
                            <Select
                                value={
                                    filters.displayHome === null
                                        ? 'all'
                                        : filters.displayHome
                                            ? 'yes'
                                            : 'no'
                                }
                                onValueChange={(value) =>
                                    setFilters({
                                        ...filters,
                                        displayHome:
                                            value === 'all'
                                                ? null
                                                : value === 'yes',
                                    })
                                }
                            >
                                <SelectTrigger className="w-[100px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="yes">Yes</SelectItem>
                                    <SelectItem value="no">No</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <DialogFooter className="flex-col gap-2 sm:flex-row sm:justify-between">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={handleResetFilters}
                        className="w-full sm:w-auto"
                    >
                        <FilterX className="mr-2 h-4 w-4" />
                        Reset all filters
                        {activeFiltersCount() > 0 && (
                            <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                                {activeFiltersCount()}
                            </span>
                        )}
                    </Button>
                    <div className="flex w-full gap-2 sm:w-auto">
                        <DialogClose asChild>
                            <Button
                                type="button"
                                variant="outline"
                                className="flex-1 sm:flex-none"
                            >
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button
                            type="button"
                            onClick={handleApplyFilters}
                            className="flex-1 sm:flex-none"
                        >
                            Apply filters
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
