import { MenuToggleIcon } from '@/components/menu-toggle-action';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import React from 'react';
import { createPortal } from 'react-dom';
import { LogoWhite } from '@/components/app-logo-icon';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';

export function Header() {
    const [open, setOpen] = React.useState(false);

    const links = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Our-vehicles',
            href: '/our-vehicles',
        },
        {
            label: 'About',
            href: '/about',
        },
    ];

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 w-full border-b border-transparent',
            )}
        >
            <nav className="mx-2 my-2 flex h-14 w-full items-center justify-between px-4 md:mx-auto">
                <div className="rounded-md hover:cursor-pointer">
                    <span className="font-bold text-white"><LogoWhite /></span>
                </div>
                <div className="hidden items-center gap-2 md:flex">
                    {links.map((link, i) => (
                        <Link
                            className="mx-4 cursor-pointer font-semibold text-white"
                            href={link.href}
                            key={i}
                            prefetch
                            method="get"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <AnimatedThemeToggler className="border rounded-full p-[5px] cursor-pointer border-primary fill-white text-white" />
                    <Link
                        href={'/our-vehicles'}
                        prefetch
                        className="flex w-[100px] items-center justify-center gap-3 rounded-full bg-primary p-2 text-white"
                    >
                        Book Now
                    </Link>
                </div>
                <Button
                    aria-controls="mobile-menu"
                    aria-expanded={open}
                    aria-label="Toggle menu"
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                    size="icon"
                    variant="outline"
                >
                    <MenuToggleIcon
                        className="size-5"
                        duration={300}
                        open={open}
                    />
                </Button>
            </nav>
            <MobileMenu
                className="flex flex-col justify-between gap-2"
                open={open}
            >
                <div className="grid gap-y-2">
                    {links.map((link) => (
                        <a
                            className={buttonVariants({
                                variant: 'ghost',
                                className: 'justify-start',
                            })}
                            href={link.href}
                            key={link.label}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <Link
                        href={'/our-vehicles'}
                        prefetch
                        className="flex w-[100px] items-center justify-center gap-3 rounded-full bg-primary p-2 text-white"
                    >
                        Book now
                    </Link>
                </div>
            </MobileMenu>
        </header>
    );
}

type MobileMenuProps = React.ComponentProps<'div'> & {
    open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
    if (!open || typeof window === 'undefined') {
        return null;
    }

    return createPortal(
        <div
            className={cn(
                'bg-background/95 backdrop-blur-lg supports-backdrop-filter:bg-background/50',
                'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
            )}
            id="mobile-menu"
        >
            <div
                className={cn(
                    'ease-out data-[slot=open]:animate-in data-[slot=open]:zoom-in-97',
                    'size-full p-4',
                    className,
                )}
                data-slot={open ? 'open' : 'closed'}
                {...props}
            >
                {children}
            </div>
        </div>,
        document.body,
    );
}
