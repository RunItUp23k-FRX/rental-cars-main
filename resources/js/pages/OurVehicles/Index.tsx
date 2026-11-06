import CarCard from '@/components/car-card';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '@/components/ui/command';
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
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { Car } from '@/types/cars-types';
import { Head, router } from '@inertiajs/react';
import {
    ArrowUpDown,
    Car as CarIocn,
    Check,
    ChevronsUpDown,
    Filter,
    Settings2,
    SlidersHorizontal,
    Users,
    X,
} from 'lucide-react';
import { useState } from 'react';
import { Toaster } from 'sonner';

interface MarqueData {
    id: number;
    nom_marque: string;
}

interface PaginatedCars {
    data: Car[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    links: Array<{
        url: string | null;
        label: string;
        active: boolean;
    }>;
}

interface Filters {
    marques?: string[];
    transmission?: string;
    fuel_type?: string;
    min_seats?: number;
    max_seats?: number;
    min_price?: number;
    max_price?: number;
    ac?: string;
    sort_by?: string;
    sort_order?: string;
}

interface Props {
    cars: PaginatedCars;
    marques: MarqueData[];
    filters: Filters;
}

// Filter Content Component (reused in mobile and desktop)
const FilterContent = ({
    marques,
    selectedMarques,
    setSelectedMarques,
    transmission,
    setTransmission,
    fuelType,
    setFuelType,
    seatRange,
    setSeatRange,
    priceRange,
    setPriceRange,
    hasAc,
    setHasAc,
    marqueSearchOpen,
    setMarqueSearchOpen,
}: any) => (
    <>
        {/* Brand Selection */}
        <div className="space-y-2">
            <Label>Car Brands</Label>
            <Popover open={marqueSearchOpen} onOpenChange={setMarqueSearchOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className="w-full justify-between"
                    >
                        <span className="truncate">
                            {selectedMarques.length > 0
                                ? `${selectedMarques.length} Brand${selectedMarques.length > 1 ? 's' : ''} Selected`
                                : 'Select Brands'}
                        </span>
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                    <Command>
                        <CommandInput placeholder="Search brands..." />
                        <CommandEmpty>No brand found.</CommandEmpty>
                        <CommandGroup className="max-h-64 overflow-auto">
                            {marques.map((marque: MarqueData) => (
                                <CommandItem
                                    key={marque.id}
                                    onSelect={() => {
                                        setSelectedMarques((prev: string[]) =>
                                            prev.includes(String(marque.id))
                                                ? prev.filter(
                                                    (id) =>
                                                        id !==
                                                        String(marque.id),
                                                )
                                                : [...prev, String(marque.id)],
                                        );
                                    }}
                                >
                                    <Check
                                        className={`mr-2 h-4 w-4 ${selectedMarques.includes(
                                            String(marque.id),
                                        )
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                            }`}
                                    />
                                    {marque.nom_marque}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>

        {/* Transmission */}
        <div className="space-y-2">
            <Label>Transmission</Label>
            <Select value={transmission} onValueChange={setTransmission}>
                <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="automatic">Automatic</SelectItem>
                </SelectContent>
            </Select>
        </div>

        {/* Fuel Type */}
        <div className="space-y-2">
            <Label>Fuel Type</Label>
            <Select value={fuelType} onValueChange={setFuelType}>
                <SelectTrigger>
                    <SelectValue placeholder="All Fuels" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Fuels</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="gasoline">Gasoline</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
            </Select>
        </div>

        {/* Seat Range */}
        <div className="space-y-2">
            <Label className="text-sm">
                Number of Seats: {seatRange[0]} - {seatRange[1]}
            </Label>
            <Slider
                min={2}
                max={9}
                step={1}
                value={seatRange}
                onValueChange={setSeatRange}
                className="w-full"
            />
        </div>

        {/* Price Range */}
        <div className="space-y-2">
            <Label className="text-sm">
                Price Range: {priceRange[0]} € - {priceRange[1]} €
            </Label>
            <Slider
                min={0}
                max={2000}
                step={5}
                value={priceRange}
                onValueChange={setPriceRange}
                className="w-full"
            />
        </div>

        {/* Air Conditioning */}
        <div className="flex items-center space-x-2">
            <Checkbox
                id="ac-filter"
                checked={hasAc === 'true'}
                onCheckedChange={(checked) =>
                    setHasAc(checked === true ? 'true' : '')
                }
            />
            <Label
                htmlFor="ac-filter"
                className="cursor-pointer text-sm font-normal"
            >
                Air Conditioning Only
            </Label>
        </div>
    </>
);

const Index = ({ cars, marques, filters }: Props) => {
    const [selectedMarques, setSelectedMarques] = useState<string[]>(
        filters.marques
            ? Array.isArray(filters.marques)
                ? filters.marques
                : [filters.marques]
            : [],
    );
    const [transmission, setTransmission] = useState<string>(
        filters.transmission || 'all',
    );
    const [fuelType, setFuelType] = useState<string>(
        filters.fuel_type || 'all',
    );
    const [seatRange, setSeatRange] = useState<number[]>([
        filters.min_seats || 2,
        filters.max_seats || 9,
    ]);
    const [priceRange, setPriceRange] = useState<number[]>([
        filters.min_price || 0,
        filters.max_price || 2000,
    ]);
    const [hasAc, setHasAc] = useState<string>(filters.ac || '');
    const [sortBy, setSortBy] = useState<string>(filters.sort_by || 'name');
    const [sortOrder, setSortOrder] = useState<string>(
        filters.sort_order || 'asc',
    );
    const [marqueSearchOpen, setMarqueSearchOpen] = useState(false);

    const applyFilters = () => {
        const filterParams: Record<string, any> = {};

        if (selectedMarques.length > 0) {
            filterParams.marques = selectedMarques.join(',');
        }
        if (transmission && transmission !== 'all')
            filterParams.transmission = transmission;
        if (fuelType && fuelType !== 'all') filterParams.fuel_type = fuelType;
        if (transmission) filterParams.transmission = transmission;
        if (fuelType) filterParams.fuel_type = fuelType;
        if (seatRange[0] > 2) filterParams.min_seats = seatRange[0];
        if (seatRange[1] < 9) filterParams.max_seats = seatRange[1];
        if (priceRange[0] > 0) filterParams.min_price = priceRange[0];
        if (priceRange[1] < 2000) filterParams.max_price = priceRange[1];
        if (hasAc) filterParams.ac = hasAc;
        filterParams.sort_by = sortBy;
        filterParams.sort_order = sortOrder;

        router.get('/our-vehicles', filterParams, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const clearFilters = () => {
        setSelectedMarques([]);
        setTransmission('all');
        setFuelType('all');
        setSeatRange([2, 9]);
        setPriceRange([0, 2000]);
        setHasAc('');
        setSortBy('name');
        setSortOrder('asc');

        router.get(
            '/our-vehicles',
            {},
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    };

    const hasActiveFilters =
        selectedMarques.length > 0 ||
        transmission ||
        fuelType ||
        seatRange[0] > 2 ||
        seatRange[1] < 9 ||
        priceRange[0] > 0 ||
        priceRange[1] < 2000 ||
        hasAc;
    return (
        <>
            <Head>
                <title>
                    Our Vehicles - Premium Car Rental Fleet | Aguinane Cars
                    Morocco
                </title>
                <meta
                    name="description"
                    content="Browse our extensive collection of rental vehicles in Morocco. Choose from economy cars, SUVs, luxury sedans, and more. Available in Agadir, Marrakech, Imsouane, and Essaouira."
                />
                <meta
                    name="keywords"
                    content="rental cars Morocco, car hire Agadir, vehicle rental Marrakech, Aguinane Cars fleet, rent a car Essaouira, SUV rental Morocco, economy cars Imsouane"
                />

                {/* Canonical URL */}
                <link rel="canonical" href="https://aguinanecars.com/our-vehicles"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://aguinanecars.com/our-vehicles"
                />
                <meta
                    property="og:title"
                    content="Our Vehicles - Premium Car Rental Fleet | Aguinane Cars Morocco"
                />
                <meta
                    property="og:description"
                    content="Browse our extensive collection of rental vehicles in Morocco. Choose from economy cars, SUVs, luxury sedans, and more."
                />
                <meta
                    property="og:image"
                    content="https://aguinanecars.com/bg-our-vehicles.webp"
                />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://aguinanecars.com/our-vehicles"
                />
                <meta
                    property="twitter:title"
                    content="Our Vehicles - Premium Car Rental Fleet | Aguinane Cars"
                />
                <meta
                    property="twitter:description"
                    content="Browse our extensive collection of rental vehicles in Morocco. Choose from economy cars, SUVs, luxury sedans, and more."
                />
                <meta
                    property="twitter:image"
                    content="https://aguinanecars.com/bg-our-vehicles.webp"
                />

            </Head>

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ItemList',
                        name: 'Aguinane Cars Vehicle Fleet',
                        description:
                            'Available rental vehicles from Aguinane Cars',
                        numberOfItems: cars.total,
                        itemListElement: cars.data.map((car, index) => ({
                            '@type': 'ListItem',
                            position: index + 1,
                            item: {
                                '@type': 'Car',
                                name: car.name,
                                brand: car.marque.nom_marque,
                                numberOfSeats: car.seats,
                                fuelType: car.fuel_type,
                                offers: {
                                    '@type': 'Offer',
                                    price: car.price,
                                    priceCurrency: 'Euro',
                                    availability: 'https://schema.org/InStock',
                                },
                            },
                        })),
                    }),
                }}
            />
            <Toaster />
            <section className="flex h-screen min-h-screen flex-col items-center justify-center p-4">
                <div
                    className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-lg bg-cover bg-fixed bg-top"
                    style={{
                        backgroundImage: `url(/bg-our-vehicles.webp)`,
                    }}
                >
                    <Header />
                    <div className="relative -top-10 mx-2 max-w-4xl text-center md:-top-20">
                        <Badge className="mb-4 rounded-full px-4 py-1 text-sm">
                            {cars.total} Vehicles Available
                        </Badge>
                        <h1 className="mb-6 bg-linear-to-r from-primary to-primary/70 bg-clip-text text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                            Discover Your Perfect Ride
                        </h1>
                        <p className="mb-8 text-lg leading-relaxed text-white/50 md:text-xl">
                            Explore our diverse fleet of meticulously maintained
                            vehicles. From compact city cars to spacious SUVs,
                            we have the perfect vehicle for every journey across
                            Morocco.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CarIocn className="h-5 w-5 text-primary" />
                                <span>Premium Fleet</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Settings2 className="h-5 w-5 text-primary" />
                                <span>Well Maintained</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-primary" />
                                <span>24/7 Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-muted/30 py-12">
                <div className="mx-auto max-w-6xl px-4">
                    {/* Filter Bar */}
                    <div className="mb-8 rounded-lg bg-card p-4 shadow-sm">
                        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                            {/* Mobile Filter Button */}
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="w-full sm:w-auto lg:hidden"
                                    >
                                        <Filter className="mr-2 h-4 w-4" />
                                        Filters
                                        {hasActiveFilters && (
                                            <Badge
                                                variant="secondary"
                                                className="ml-2"
                                            >
                                                Active
                                            </Badge>
                                        )}
                                    </Button>
                                </SheetTrigger>
                                <SheetContent
                                    side="left"
                                    className="w-full overflow-y-auto sm:w-96"
                                >
                                    <SheetHeader>
                                        <SheetTitle>Filter Vehicles</SheetTitle>
                                        <SheetDescription>
                                            Refine your search to find the
                                            perfect vehicle
                                        </SheetDescription>
                                    </SheetHeader>
                                    <div className="mt-6 space-y-6">
                                        <FilterContent
                                            marques={marques}
                                            selectedMarques={selectedMarques}
                                            setSelectedMarques={
                                                setSelectedMarques
                                            }
                                            transmission={transmission}
                                            setTransmission={setTransmission}
                                            fuelType={fuelType}
                                            setFuelType={setFuelType}
                                            seatRange={seatRange}
                                            setSeatRange={setSeatRange}
                                            priceRange={priceRange}
                                            setPriceRange={setPriceRange}
                                            hasAc={hasAc}
                                            setHasAc={setHasAc}
                                            marqueSearchOpen={marqueSearchOpen}
                                            setMarqueSearchOpen={
                                                setMarqueSearchOpen
                                            }
                                        />
                                        <div className="flex gap-2 pt-4">
                                            <Button
                                                onClick={applyFilters}
                                                className="flex-1"
                                            >
                                                Apply Filters
                                            </Button>
                                            <Button
                                                onClick={clearFilters}
                                                variant="outline"
                                                className="flex-1"
                                            >
                                                Clear All
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>

                            {/* Desktop Quick Filters */}
                            <div className="hidden flex-1 flex-wrap items-center gap-3 lg:flex">
                                {/* Brand Filter Popover */}
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" size="sm">
                                            <CarIocn className="mr-2 h-4 w-4" />
                                            {selectedMarques.length > 0
                                                ? `${selectedMarques.length} Brand(s)`
                                                : 'Brands'}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80 p-4">
                                        <div className="space-y-4">
                                            <Label>Select Car Brands</Label>
                                            <Command>
                                                <CommandInput placeholder="Search brands..." />
                                                <CommandEmpty>
                                                    No brand found.
                                                </CommandEmpty>
                                                <CommandGroup className="max-h-64 overflow-auto">
                                                    {marques.map((marque) => (
                                                        <CommandItem
                                                            key={marque.id}
                                                            onSelect={() => {
                                                                setSelectedMarques(
                                                                    (prev) =>
                                                                        prev.includes(
                                                                            String(
                                                                                marque.id,
                                                                            ),
                                                                        )
                                                                            ? prev.filter(
                                                                                (
                                                                                    id,
                                                                                ) =>
                                                                                    id !==
                                                                                    String(
                                                                                        marque.id,
                                                                                    ),
                                                                            )
                                                                            : [
                                                                                ...prev,
                                                                                String(
                                                                                    marque.id,
                                                                                ),
                                                                            ],
                                                                );
                                                            }}
                                                        >
                                                            <Check
                                                                className={`mr-2 h-4 w-4 ${selectedMarques.includes(
                                                                    String(
                                                                        marque.id,
                                                                    ),
                                                                )
                                                                        ? 'opacity-100'
                                                                        : 'opacity-0'
                                                                    }`}
                                                            />
                                                            {marque.nom_marque}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </Command>
                                            <div className="flex gap-2 pt-2">
                                                <Button
                                                    onClick={applyFilters}
                                                    size="sm"
                                                    className="flex-1"
                                                >
                                                    Apply
                                                </Button>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>

                                {/* Transmission Quick Filter */}
                                <Select
                                    value={transmission}
                                    onValueChange={(value) => {
                                        setTransmission(value);
                                        // Auto-apply for quick filters
                                        setTimeout(() => applyFilters(), 100);
                                    }}
                                >
                                    <SelectTrigger className="w-[140px]">
                                        <SelectValue placeholder="Transmission" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">
                                            All Types
                                        </SelectItem>
                                        <SelectItem value="manual">
                                            Manual
                                        </SelectItem>
                                        <SelectItem value="automatic">
                                            Automatic
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                {/* Fuel Type Quick Filter */}
                                <Select
                                    value={fuelType}
                                    onValueChange={(value) => {
                                        setFuelType(value);
                                        setTimeout(() => applyFilters(), 100);
                                    }}
                                >
                                    <SelectTrigger className="w-[130px]">
                                        <SelectValue placeholder="Fuel Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">
                                            All Fuels
                                        </SelectItem>
                                        <SelectItem value="diesel">
                                            Diesel
                                        </SelectItem>
                                        <SelectItem value="gasoline">
                                            Gasoline
                                        </SelectItem>
                                        <SelectItem value="electric">
                                            Electric
                                        </SelectItem>
                                        <SelectItem value="hybrid">
                                            Hybrid
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                {/* More Filters Popover */}
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" size="sm">
                                            <SlidersHorizontal className="mr-2 h-4 w-4" />
                                            More
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80 p-4">
                                        <div className="space-y-4">
                                            <h4 className="text-sm font-medium">
                                                Additional Filters
                                            </h4>

                                            {/* Seat Range */}
                                            <div className="space-y-2">
                                                <Label className="text-sm">
                                                    Seats: {seatRange[0]} -{' '}
                                                    {seatRange[1]}
                                                </Label>
                                                <Slider
                                                    min={2}
                                                    max={9}
                                                    step={1}
                                                    value={seatRange}
                                                    onValueChange={setSeatRange}
                                                />
                                            </div>

                                            {/* Price Range */}
                                            <div className="space-y-2">
                                                <Label className="text-sm">
                                                    Price: {priceRange[0]} -{' '}
                                                    {priceRange[1]} €
                                                </Label>
                                                <Slider
                                                    min={0}
                                                    max={2000}
                                                    step={5}
                                                    value={priceRange}
                                                    onValueChange={
                                                        setPriceRange
                                                    }
                                                />
                                            </div>

                                            {/* AC Filter */}
                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    id="ac-desktop"
                                                    checked={hasAc === 'true'}
                                                    onCheckedChange={(
                                                        checked,
                                                    ) =>
                                                        setHasAc(
                                                            checked === true
                                                                ? 'true'
                                                                : '',
                                                        )
                                                    }
                                                />
                                                <Label
                                                    htmlFor="ac-desktop"
                                                    className="cursor-pointer text-sm font-normal"
                                                >
                                                    Air Conditioning Only
                                                </Label>
                                            </div>

                                            <div className="flex gap-2 pt-2">
                                                <Button
                                                    onClick={applyFilters}
                                                    size="sm"
                                                    className="flex-1"
                                                >
                                                    Apply
                                                </Button>
                                                <Button
                                                    onClick={clearFilters}
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    Clear
                                                </Button>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>

                                {hasActiveFilters && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={clearFilters}
                                    >
                                        <X className="mr-2 h-4 w-4" />
                                        Clear All
                                    </Button>
                                )}
                            </div>

                            {/* Sort By */}
                            <div className="flex w-full items-center gap-2 lg:w-auto">
                                <Select
                                    value={sortBy}
                                    onValueChange={(value) => {
                                        setSortBy(value);
                                        setTimeout(() => applyFilters(), 100);
                                    }}
                                >
                                    <SelectTrigger className="w-full lg:w-[150px]">
                                        <SelectValue placeholder="Sort by" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="name">
                                            Name
                                        </SelectItem>
                                        <SelectItem value="price">
                                            Price
                                        </SelectItem>
                                        <SelectItem value="seats">
                                            Seats
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => {
                                        setSortOrder((prev) =>
                                            prev === 'asc' ? 'desc' : 'asc',
                                        );
                                        setTimeout(() => applyFilters(), 100);
                                    }}
                                >
                                    <ArrowUpDown className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Results Info */}
                    <div className="mb-6">
                        <p className="text-sm text-muted-foreground">
                            Showing {cars.data.length} of {cars.total} vehicles
                            {hasActiveFilters && ' (filtered)'}
                        </p>
                    </div>

                    {/* Cars Grid */}
                    {cars.data.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {cars.data.map((car) => (
                                    <CarCard key={car.id} car={car} />
                                ))}
                            </div>

                            {/* Pagination */}
                            {cars.last_page > 1 && (
                                <div className="mt-8 flex justify-center gap-2">
                                    {cars.links.map((link, index) => (
                                        <Button
                                            key={index}
                                            variant={
                                                link.active
                                                    ? 'default'
                                                    : 'outline'
                                            }
                                            size="sm"
                                            disabled={!link.url}
                                            onClick={() => {
                                                if (link.url) {
                                                    router.get(
                                                        link.url,
                                                        {},
                                                        {
                                                            preserveState: true,
                                                            preserveScroll: false,
                                                        },
                                                    );
                                                }
                                            }}
                                            dangerouslySetInnerHTML={{
                                                __html: link.label,
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <Card className="p-12 text-center">
                            <CarIocn className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                            <h3 className="mb-2 text-xl font-semibold">
                                No vehicles found
                            </h3>
                            <p className="mb-4 text-muted-foreground">
                                Try adjusting your filters to see more results
                            </p>
                            <Button onClick={clearFilters}>
                                Clear All Filters
                            </Button>
                        </Card>
                    )}
                </div>
            </section>
            <Contact />
            <Footer />
        </>
    );
};

export default Index;
