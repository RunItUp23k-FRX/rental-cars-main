import { index } from '@/actions/App/Http/Controllers/NotificationController';
import { edit } from '@/actions/App/Http/Controllers/Settings/ProfileController';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SharedData } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { BellRing } from 'lucide-react';
const SideBarHeaderButtons = () => {
    const { auth, pending_orders } = usePage<SharedData>().props;
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((word) => word[0])
            .join('')
            .toUpperCase();
    };

    return (
        <div className="gap- flex items-center justify-center">
            <Button
                size={'icon'}
                variant={'ghost'}
                className="relative rounded-full hover:bg-secondary/60"
                onClick={() => router.visit(index.url())}
            >
                <BellRing />
                <span className="absolute -top-1 right-1">
                    {pending_orders}
                </span>
            </Button>
            <Separator className="mx-2 h-6!" orientation="vertical" />
            <Button
                size={'icon'}
                variant={'ghost'}
                className="rounded-full hover:bg-secondary/60"
                onClick={() => router.get(edit().url)}
            >
                {getInitials(auth.user.name)}
            </Button>
            <Separator className="mx-2 h-6!" orientation="vertical" />
            <AnimatedThemeToggler className="cursor-pointer rounded-full border p-1" />
        </div>
    );
};

export default SideBarHeaderButtons;
