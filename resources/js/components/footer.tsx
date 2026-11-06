import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Link } from '@inertiajs/react';
import { FacebookIcon, InstagramIcon } from 'lucide-react';

export function Footer() {
    const company = [
        {
            title: 'About Us',
            href: '/about',
        },
        {
            title: 'Terms of Service',
            href: '/terms',
        },
    ];

    const resources = [
        {
            title: 'Contact Support',
            href: '/#contact',
        },
        {
            title: 'Vehicles',
            href: '/our-vehicles',
        },
    ];

    const locations = [
        {
            title: 'Agadir',
            href: '/car-rental-agadir',
        },
        {
            title: 'Marrakech',
            href: '/car-rental-marrakech',
        },
        {
            title: 'Essaouira',
            href: '/car-rental-essaouira',
        },
        {
            title: 'Casablanca',
            href: '/car-rental-casablanca',
        },
        {
            title: 'Taghazout',
            href: '/car-rental-taghazout',
        },
        {
            title: 'Imsouane',
            href: '/car-rental-imsouane',
        },
    ];

    const socialLinks = [
        {
            icon: FacebookIcon,
            link: 'https://www.facebook.com/people/Aguinane-Cars/61585440635677/',
        },
        {
            icon: InstagramIcon,
            link: 'https://www.instagram.com/aguinanecars/',
        },
    ];
    return (
        <footer className="relative w-full place-content-center overflow-hidden">
            <div className="mx-auto w-full max-w-6xl space-y-8 p-4 lg:border-x">
                <div className="absolute inset-x-0 h-px w-full bg-border" />
                <div className="grid max-w-5xl grid-cols-6 gap-6 p-4 md:grid-cols-8">
                    <div className="col-span-6 flex flex-col gap-4 pt-5 md:col-span-4">
                        <a className="w-max font-bold" href="#">
                            AGUINANE CARS
                        </a>
                        <p className="max-w-sm font-mono text-sm text-balance text-muted-foreground">
                            The Best Platform for Car Rental
                        </p>
                        <div className="flex gap-2">
                            {socialLinks.map((item, index) => (
                                <Button
                                    key={`social-${item.link}-${index}`}
                                    size="sm"
                                    variant="outline"
                                >
                                    <Link href={item.link} target="_blank">
                                        <item.icon className="size-3.5" />
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-2 w-full md:col-span-1">
                        <span className="text-xs text-muted-foreground">
                            Locations
                        </span>
                        <div className="mt-2 flex flex-col gap-2">
                            {locations.map(({ href, title }) => (
                                <Link
                                    prefetch
                                    className="w-max text-sm hover:underline"
                                    href={href}
                                    key={title}
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-2 w-full md:col-span-1">
                        <span className="text-xs text-muted-foreground">
                            Resources
                        </span>
                        <div className="mt-2 flex flex-col gap-2">
                            {resources.map(({ href, title }) => (
                                <Link
                                    prefetch
                                    className="w-max text-sm hover:underline"
                                    href={href}
                                    key={title}
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-2 w-full md:col-span-1">
                        <span className="text-xs text-muted-foreground">
                            Company
                        </span>
                        <div className="mt-2 flex flex-col gap-2">
                            {company.map(({ href, title }) => (
                                <Link
                                    prefetch
                                    className="w-max text-sm hover:underline"
                                    href={href}
                                    key={title}
                                >
                                    {title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 h-px w-full bg-border" />
                <div className="z-1 flex h-full flex-col items-center justify-center gap-4 py-12">
                    <p className="text-center text-sm font-light text-muted-foreground">
                        &copy; {new Date().getFullYear()} Aguinane cars, All
                        rights reserved
                    </p>
                </div>
            </div>
            <WhatsAppButton />
        </footer>
    );
}
