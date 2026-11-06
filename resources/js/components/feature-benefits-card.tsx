import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import type React from 'react';

type FeatureType = {
    title: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    description: string;
};

type FeatureCardPorps = React.ComponentProps<'div'> & {
    feature: FeatureType;
};

export function FeatureCard({
    feature,
    className,
    ...props
}: FeatureCardPorps) {
    return (
        <div
            className={cn('relative overflow-hidden p-6', className)}
            {...props}
        >
            <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 size-full mask-[radial-gradient(farthest-side_at_top,white,transparent)]">
                <GridPattern
                    className="absolute inset-0 size-full stroke-foreground/20"
                    height={40}
                    width={40}
                    x={5}
                />
            </div>
            <feature.icon
                aria-hidden
                className="mb-4 size-6 text-primary"
                strokeWidth={1}
            />
            <h2 className="mb-0 text-lg font-semibold text-foreground">
                {feature.title}
            </h2>
            <p className="relative text-sm leading-relaxed text-muted-foreground">
                {feature.description}
            </p>
        </div>
    );
}
