import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { GridPattern } from '@/components/ui/grid-pattern';
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
import { ShineBorder } from '@/components/ui/shine-border';
import { cn } from '@/lib/utils';
import { ourVehiclesPageData } from '@/routes';
import { router } from '@inertiajs/react';
import {
    ArrowRight,
    Calendar as CalendarIcon,
    ChevronDownIcon,
    MapPin,
} from 'lucide-react';
import { useState } from 'react';

// Available cities for pickup and return
const CITIES = [
    {
        value: 'agadir',
        label: 'Agadir',
        description: 'City Center & Airport',
        icon: '🏖️'
    },
    {
        value: 'marrakech',
        label: 'Marrakech',
        description: 'City Center & Airport',
        icon: '🏛️'
    },
] as const;

const HeroFormFilter = () => {
    const [openPickupDate, setOpenPickupDate] = useState(false);
    const [openReturnDate, setOpenReturnDate] = useState(false);
    const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
    const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
    const [pickupCity, setPickupCity] = useState<string>('');
    const [returnCity, setReturnCity] = useState<string>('');

    // Format date to show month name
    const formatDate = (date: Date | undefined) => {
        if (!date) return 'Select date';
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
    };

    const getSelectedCity = (value: string) => {
        return CITIES.find(city => city.value === value);
    };

    return (
        <div className="relative -mt-30 mb-16 w-full px-10 md:-mt-52">
            <div className="relative overflow-hidden rounded-2xl bg-background p-6 shadow-xl">
                <ShineBorder shineColor={['#1547e8', '#FE8FB5', '#FFBE7B']} />
                <GridPattern
                    width={20}
                    height={20}
                    x={-1}
                    y={-1}
                    className={cn(
                        'mask-[linear-gradient(to_top_left,white,2%,transparent)]',
                    )}
                />

                {/* Main Form Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    {/* Departure Location */}
                    <div className="space-y-2">
                        <Label htmlFor="departure">Pickup Location</Label>
                        <Select value={pickupCity} onValueChange={setPickupCity}>
                            <SelectTrigger className="h-11">
                                <div className="flex items-center gap-2">
                                    <MapPin className="size-4 text-muted-foreground" />
                                    <SelectValue placeholder="Select city..." />
                                </div>
                            </SelectTrigger>
                            <SelectContent>
                                {CITIES.map((city) => (
                                    <SelectItem
                                        key={city.value}
                                        value={city.value}
                                        className="cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg">{city.icon}</span>
                                            <div className="flex flex-col">
                                                <span className="font-medium">{city.label}</span>
                                                <span className="text-xs text-muted-foreground">
                                                    {city.description}
                                                </span>
                                            </div>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Return Location */}
                    <div className="space-y-2">
                        <Label htmlFor="return-location">Return Location</Label>
                        <Select value={returnCity} onValueChange={setReturnCity}>
                            <SelectTrigger className="h-11">
                                <div className="flex items-center gap-2">
                                    <MapPin className="size-4 text-muted-foreground" />
                                    <SelectValue placeholder="Select city..." />
                                </div>
                            </SelectTrigger>
                            <SelectContent>
                                {CITIES.map((city) => (
                                    <SelectItem
                                        key={city.value}
                                        value={city.value}
                                        className="cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg">{city.icon}</span>
                                            <div className="flex flex-col">
                                                <span className="font-medium">{city.label}</span>
                                                <span className="text-xs text-muted-foreground">
                                                    {city.description}
                                                </span>
                                            </div>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Pick Up Date & Time */}
                    <div className="space-y-2">
                        <Label>Pick Up Date & Time</Label>
                        <div className="flex gap-2">
                            {/* Date Picker */}
                            <Popover
                                open={openPickupDate}
                                onOpenChange={setOpenPickupDate}
                            >
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            'h-11 flex-1 justify-between font-normal',
                                            !pickupDate &&
                                            'text-muted-foreground',
                                        )}
                                    >
                                        <div className="flex items-center gap-2">
                                            <CalendarIcon className="size-4" />
                                            <span className="text-sm">
                                                {formatDate(pickupDate)}
                                            </span>
                                        </div>
                                        <ChevronDownIcon className="size-4 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-auto p-0"
                                    align="start"
                                >
                                    <Calendar
                                        mode="single"
                                        selected={pickupDate}
                                        captionLayout="dropdown"
                                        onSelect={(date) => {
                                            setPickupDate(date);
                                            setOpenPickupDate(false);
                                        }}
                                        disabled={(date) => date < new Date()}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>

                    {/* Return Date & Time */}
                    <div className="space-y-2">
                        <Label>Return Date & Time</Label>
                        <div className="flex gap-2">
                            {/* Date Picker */}
                            <Popover
                                open={openReturnDate}
                                onOpenChange={setOpenReturnDate}
                            >
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className={cn(
                                            'h-11 flex-1 justify-between font-normal',
                                            !returnDate &&
                                            'text-muted-foreground',
                                        )}
                                    >
                                        <div className="flex items-center gap-2">
                                            <CalendarIcon className="size-4" />
                                            <span className="text-sm">
                                                {formatDate(returnDate)}
                                            </span>
                                        </div>
                                        <ChevronDownIcon className="size-4 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-auto p-0"
                                    align="start"
                                >
                                    <Calendar
                                        mode="single"
                                        selected={returnDate}
                                        captionLayout="dropdown"
                                        onSelect={(date) => {
                                            setReturnDate(date);
                                            setOpenReturnDate(false);
                                        }}
                                        disabled={(date) =>
                                            date < (pickupDate || new Date())
                                        }
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>

                {/* Filter & Search Row */}
                <div className="mt-6 flex items-center justify-end">
                    {/* Search Button */}
                    <Button
                        size="lg"
                        className="relative z-50 rounded-full px-8"
                        onClick={() => router.visit(ourVehiclesPageData.url())}
                    >
                        Search
                        <ArrowRight className="ml-2 size-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroFormFilter;
