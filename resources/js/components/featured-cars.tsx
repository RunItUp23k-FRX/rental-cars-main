import CarCard from '@/components/car-card';
import NoCarsAvailable from '@/components/no-cars-available';
import { Car } from '@/types/cars-types';
import { Link } from '@inertiajs/react';
import { Key } from 'lucide-react';

interface FeaturedCarsProps {
    cars: Car[];
}

export default function FeaturedCars({ cars }: FeaturedCarsProps) {
    if (!cars || cars.length === 0) {
        return <NoCarsAvailable />;
    }
    return (
        <section className="relative place-content-center overflow-hidden py-6">
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="mx-auto w-full max-w-6xl space-y-8 p-4">
                <div className="mx-auto mb-4 max-w-3xl text-center">
                    <h2 className="mb-4 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
                        Featured Vehicles
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-balance text-muted-foreground md:text-lg">
                        Discover our selection of premium vehicles for your next
                        rental
                    </p>
                </div>

                {/* Cars Grid */}
                <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {cars.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="relative z-50 flex w-full items-center justify-center">
                    <Link
                        href="/our-vehicles"
                        className="flex w-[200px] items-center justify-center gap-3 rounded-full bg-primary p-2 text-white"
                        prefetch
                    >
                        View All Vehicles
                        <Key className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
