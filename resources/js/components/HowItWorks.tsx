import HowItWorksCard from '@/components/HowItWorksCard';
import { Link } from '@inertiajs/react';
import { Calendar, Key, Search } from 'lucide-react';

export function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'Choose Your Car',
            description:
                'Browse our fleet and select your perfect vehicle from our wide range of options',
            icon: Search,
        },
        {
            number: '02',
            title: 'Book Online',
            description:
                'Pick your dates, add details, and confirm your reservation instantly',
            icon: Calendar,
        },
        {
            number: '03',
            title: 'Pick Up & Drive',
            description:
                'Collect your car from our location and hit the road in minutes',
            icon: Key,
        },
    ];

    return (
        <section className="place-content-center">
            <div className="mx-auto w-full max-w-6xl space-y-8 p-4">
                {/* Header */}
                <div className="mx-auto mb-4 max-w-3xl text-center">
                    <h3 className="mb-4 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
                        How It Works
                    </h3>
                    <p className="mx-auto max-w-2xl text-base text-balance text-muted-foreground md:text-lg">
                        Get on the road in three simple steps. Renting a car has
                        never been this easy.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="relative grid gap-8 md:grid-cols-3">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-20 right-0 left-0 hidden h-0.5 bg-linear-to-r from-primary/20 via-primary to-primary/20 md:block" />
                    {steps.map((step) => (
                        <HowItWorksCard
                            description={step.description}
                            icon={step.icon}
                            number={step.number}
                            title={step.title}
                            key={step.number}
                        />
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-4 flex items-center justify-center">
                    <Link
                        href="/our-vehicles"
                        className="flex w-[200px] items-center justify-center gap-3 rounded-full bg-primary p-2 text-white"
                        prefetch
                    >
                        Browse Our Fleet
                        <Key className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
