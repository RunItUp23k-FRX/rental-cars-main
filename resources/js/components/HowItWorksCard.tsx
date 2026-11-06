import { GridPattern } from '@/components/ui/grid-pattern';
import { LucideIcon } from 'lucide-react';
interface Steps {
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

const HowItWorksCard = ({ number, title, description, icon: Icon }: Steps) => {
    return (
        <div key={number} className="group relative">
            <div className="relative h-full overflow-hidden border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl">
                <div className="absolute -top-4 -right-4 text-[120px] leading-none font-bold text-primary/5 select-none">
                    {number}
                </div>
                <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 size-full mask-[radial-gradient(farthest-side_at_top,white,transparent)]">
                    <GridPattern
                        className="absolute inset-0 size-full stroke-foreground/20"
                        height={40}
                        width={40}
                        x={5}
                    />
                </div>
                <div className="relative z-10">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                        <Icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <div className="mb-2 text-sm font-semibold text-primary">
                        STEP {number}
                    </div>
                    <h3 className="mb-0 text-lg font-semibold text-foreground">
                        {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        {description}
                    </p>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
        </div>
    );
};

export default HowItWorksCard;
