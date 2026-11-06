import { MessageCircle, Phone } from 'lucide-react';

export default function NoCarsAvailable() {
    const whatsappNumber = '+212661542175';
    const whatsappMessage = encodeURIComponent(
        'Hello! I would like to inquire about car rentals in Morocco.',
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section className="relative overflow-hidden py-16">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative z-10 mx-auto w-full max-w-4xl space-y-8 p-4">
                {/* Icon */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                    <svg
                        className="h-12 w-12 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                    </svg>
                </div>

                {/* Text Content */}
                <div className="mx-auto max-w-2xl space-y-4 text-center">
                    <h2 className="text-4xl font-bold text-balance text-foreground md:text-5xl">
                        No Cars Currently Available
                    </h2>
                    <p className="mx-auto max-w-xl text-lg text-balance text-muted-foreground">
                        Our fleet is currently fully booked! But don't worry -
                        we're here to help you find the perfect vehicle for your
                        needs.
                    </p>
                    <p className="text-base text-muted-foreground">
                        Contact us directly and we'll find a solution for you.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    {/* WhatsApp Button */}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-white transition-all hover:bg-[#128C7E] hover:shadow-lg sm:w-auto"
                    >
                        <MessageCircle className="h-5 w-5" />
                        <span className="font-semibold">Chat on WhatsApp</span>
                    </a>

                    {/* Alternative: Call Button */}
                    <a
                        href="tel:+212661542175"
                        className="group flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-transparent px-8 py-4 text-primary transition-all hover:bg-primary hover:text-white sm:w-auto"
                    >
                        <Phone className="h-5 w-5" />
                        <span className="font-semibold">Call Us</span>
                    </a>
                </div>

                {/* Additional Info */}
                <div className="mx-auto max-w-2xl rounded-2xl border bg-card p-6 text-center shadow-sm">
                    <h3 className="mb-3 text-xl font-semibold text-foreground">
                        Why Contact Us?
                    </h3>
                    <ul className="space-y-2 text-left text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                            <span className="mt-1 text-primary">✓</span>
                            <span>
                                Get real-time availability updates for all our
                                vehicles
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 text-primary">✓</span>
                            <span>
                                Receive personalized recommendations based on
                                your needs
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 text-primary">✓</span>
                            <span>
                                Access to our entire fleet across Agadir,
                                Marrakech, and Essaouira
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 text-primary">✓</span>
                            <span>Special rates for extended rentals</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
