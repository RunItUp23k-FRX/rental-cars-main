import { FeatureCard } from '@/components/feature-benefits-card';
import {
    Car,
    Clock,
    DollarSign,
    Headphones,
    MapPin,
    Shield,
} from 'lucide-react';

export default function FeaturedBenefitsData() {
    return (
        <section className="place-content-center">
            <div className="mx-auto w-full max-w-6xl space-y-8 p-4">
                <div className="mx-auto mb-4 max-w-3xl text-center">
                    <h3 className="mb-4 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
                        Why Choose Our Car Rental Service
                    </h3>
                    <p className="mx-auto max-w-2xl text-base text-balance text-muted-foreground md:text-lg">
                        Experience hassle-free car rentals with unbeatable
                        benefits and premium service.
                    </p>
                </div>
                <div className="grid grid-cols-1 divide-x divide-y border-t border-l sm:grid-cols-2 md:grid-cols-3">
                    {features.map((feature) => (
                        <FeatureCard
                            className="last:border-r last:border-b"
                            feature={feature}
                            key={feature.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

const features = [
    {
        title: 'Wide Selection',
        icon: Car,
        description:
            'Choose from luxury sedans, SUVs, sports cars, and economy vehicles for every need.',
    },
    {
        title: 'Best Price Guarantee',
        icon: DollarSign,
        description:
            'Transparent pricing with no hidden fees. Get the best rates in the market.',
    },
    {
        title: 'Verified & Insured',
        icon: Shield,
        description:
            'All vehicles are fully insured and regularly inspected for your safety.',
    },
    {
        title: 'Flexible Rentals',
        icon: Clock,
        description:
            'Rent by the hour, day, or week. Free cancellation up to 24 hours before pickup.',
    },
    {
        title: 'Convenient Locations',
        icon: MapPin,
        description:
            'Multiple pickup points across the city. Easy airport delivery available.',
    },
    {
        title: '24/7 Support',
        icon: Headphones,
        description:
            'Round-the-clock customer service and roadside assistance whenever you need it.',
    },
];
