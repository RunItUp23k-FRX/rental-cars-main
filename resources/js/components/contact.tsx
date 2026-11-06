import { cn } from '@/lib/utils';
import {
    type LucideIcon,
    Mail,
    MapPin,
    Phone,
    SignpostBig,
} from 'lucide-react';
import type React from 'react';
import { Button } from './ui/button';

const APP_EMAIL = 'aguinanecars@gmail.com';
const APP_PHONE = '+212661542175';
const APP_PHONE_2 = '+212637457946';

const MetaSvg = () => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="#0467DF"
    >
        <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
    </svg>
);

const InstagramSvg = () => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="#FF0069"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
    </svg>
);

export function Contact() {
    const socialLinks = [
        {
            icon: InstagramSvg,
            href: '#',
            label: 'Instagram',
        },
        {
            icon: MetaSvg,
            href: '#',
            label: 'Facebook',
        },
    ];
    const handleClickedUrl = (url: string) => {
        window.location.href = url;
    };
    return (
        <section
            className="h-full w-full place-content-center overflow-hidden"
            id="contact"
        >
            <div className="mx-auto h-full min-h-screen max-w-6xl lg:border-x">
                <div className="mx-auto mb-4 max-w-3xl text-center">
                    <h6 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                        We're Here to Help
                    </h6>
                    <p className="mx-auto max-w-2xl text-base text-balance text-muted-foreground md:text-lg">
                        Connect with our dedicated support team for expert
                        guidance and personalized solutions.
                    </p>
                </div>
                <BorderSeparator />
                <div className="grid h-full md:grid-cols-3">
                    <Box
                        description="We respond to all emails within 24 hours."
                        icon={Mail}
                        title="Email"
                    >
                        <a
                            className="font-mono text-sm font-medium tracking-wide hover:underline"
                            href={`mailto:${APP_EMAIL}`}
                        >
                            {APP_EMAIL}
                        </a>
                    </Box>
                    <Box
                        description="Drop by our office for a chat."
                        icon={MapPin}
                        title="Office"
                    >
                        <span className="font-mono text-sm font-medium tracking-wide">
                            - Agadir
                            <br />- Imsouane
                        </span>
                    </Box>
                    <Box
                        className="border-b-0 md:border-r-0"
                        description="We're available Mon-Sat, 9am-5pm."
                        icon={Phone}
                        title="Phone"
                    >
                        <div>
                            <a
                                className="block font-mono text-sm font-medium tracking-wide hover:underline"
                                href={`tel:${APP_PHONE}`}
                            >
                                {APP_PHONE}
                            </a>
                            <a
                                className="block font-mono text-sm font-medium tracking-wide hover:underline"
                                href={`tel:${APP_PHONE_2}`}
                            >
                                {APP_PHONE_2}
                            </a>
                        </div>
                    </Box>
                </div>
                <BorderSeparator />
                <div className="z-1 flex h-full flex-col items-center justify-center gap-4 py-12">
                    <h2 className="text-center text-2xl font-medium tracking-tight text-muted-foreground md:text-3xl">
                        Find us <span className="text-foreground">online</span>{' '}
                        & <span className="text-foreground">offline</span>
                    </h2>
                    <div className="flex flex-wrap items-center gap-2">
                        {socialLinks.map((link) => (
                            <a
                                className="flex items-center gap-x-2 rounded-full border bg-card px-3 py-1.5 shadow hover:bg-accent"
                                href={link.href}
                                key={link.label}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <link.icon />
                                <span className="font-mono text-xs font-medium tracking-wide">
                                    {link.label}
                                </span>
                            </a>
                        ))}
                    </div>
                    <div
                        id="locations"
                        className="grid w-full grid-cols-1 gap-4 px-4 md:grid-cols-2"
                    >
                        <div className="relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3440.013727465899!2d-9.556622524431168!3d30.4357127747289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDI2JzA4LjYiTiA5wrAzMycxNC42Ilc!5e0!3m2!1sen!2sma!4v1761780567888!5m2!1sen!2sma"
                                className="h-full min-h-72 w-full rounded-lg border-none"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <Button
                                className="absolute bottom-0 left-5 rounded-none border-0"
                                variant={'outline'}
                                onClick={() =>
                                    handleClickedUrl(
                                        'https://maps.app.goo.gl/wU9NaFttdj8dZejB9',
                                    )
                                }
                            >
                                <SignpostBig className="mr-2" />
                                Agadir Office - Obtenir l'itinéraire
                            </Button>
                        </div>
                        <div className="relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.474423683917!2d-9.8190311!3d30.845389800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb25f003eb99579%3A0x491b3c6dbc6f8e7d!2sBeach%20side%20hotel!5e0!3m2!1sen!2sma!4v1761780855689!5m2!1sen!2sma"
                                className="h-full min-h-72 w-full rounded-lg border-none"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <Button
                                className="absolute bottom-0 left-5 rounded-none border-0"
                                variant={'outline'}
                                onClick={() =>
                                    handleClickedUrl(
                                        'https://maps.app.goo.gl/eLjfmQtTSxWT64Zr6',
                                    )
                                }
                            >
                                <SignpostBig className="mr-2" />
                                Imsouane Office - Obtenir l'itinéraire
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function BorderSeparator({ className }: React.ComponentProps<'div'>) {
    return (
        <div
            className={cn('absolute inset-x-0 h-px w-full border-b', className)}
        />
    );
}

type ContactBox = React.ComponentProps<'div'> & {
    icon: LucideIcon;
    title: string;
    description: string;
};

function Box({
    title,
    description,
    className,
    children,
    ...props
}: ContactBox) {
    return (
        <div
            className={cn(
                'flex flex-col justify-between border-b md:border-r md:border-b-0',
                className,
            )}
        >
            <div className="flex items-center gap-x-3 border-b bg-secondary/50 p-4 dark:bg-secondary/20">
                <props.icon
                    className="size-5 text-muted-foreground"
                    strokeWidth={1}
                />
                <h6 className="font-heading text-lg font-medium tracking-wider">
                    {title}
                </h6>
            </div>
            <div className="flex items-center gap-x-2 p-4 py-12">
                {children}
            </div>
            <div className="border-t p-4">
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    );
}
