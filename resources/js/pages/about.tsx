import { Contact } from '@/components/contact';
import { CtaSection } from '@/components/CtaSection';
import FeaturedBenefitsData from '@/components/features-benefits';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import LenisScroll from '@/components/LenisScroll';
import { GridPattern } from '@/components/ui/grid-pattern';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Head } from '@inertiajs/react';

const About = () => {
    return (
        <>
            <Head>
                <title>
                    About Us - Aguinane Cars | Premium Car Rental in Morocco
                </title>
                <meta
                    name="description"
                    content="Discover Aguinane Cars - Morocco's trusted car rental service in Agadir, Marrakech, Imsouane, Essaouira, and beyond. With years of experience, premium vehicles, and exceptional customer service, we make your journey unforgettable."
                />
                <meta
                    name="keywords"
                    content="Aguinane Cars, car rental Morocco, car rental Agadir, car rental Marrakech, car rental Imsouane, car rental Essaouira, car rental Casablanca, car rental Taghazout, about us, premium car rental, Morocco travel, vehicle rental service, trusted car rental, Souss-Massa car rental"
                />
                <meta
                    property="og:title"
                    content="About Aguinane Cars - Your Trusted Car Rental Partner in Morocco"
                />
                <meta
                    property="og:description"
                    content="Learn about Aguinane Cars - Morocco's leading car rental service in Agadir, Marrakech, Imsouane, and major cities. Premium vehicles and exceptional customer experience across Morocco."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://aguinanecars.com/about"
                />
                <meta property="og:image" content="https://aguinanecars.com/bg-about.webp" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="About Aguinane Cars - Premium Car Rental in Agadir, Marrakech & Morocco"
                />
                <meta
                    name="twitter:description"
                    content="Discover why thousands choose Aguinane Cars for their Morocco adventures in Agadir, Marrakech, Imsouane, Essaouira, and more."
                />
                <link rel="canonical" href="https://aguinanecars.com/about" />
            </Head>

            <LenisScroll />

            {/* Hero Section */}
            <section
                id="about-hero"
                className="flex h-screen min-h-screen items-center justify-center p-4"
            >
                <div
                    className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-lg bg-cover bg-center md:bg-bottom"
                    style={{
                        backgroundImage: `url(/bg-about.webp)`,
                    }}
                >
                    {/* Overlay for better text readability */}

                    <Header />

                    <div className="flex w-full flex-col px-4">
                        <h1 className="text-center text-6xl leading-tight font-bold text-white md:-mt-64 md:text-left">
                            About Aguinane Cars
                        </h1>
                        <p className="-mt-2 max-w-2xl text-center text-lg font-medium text-white/90 md:text-left md:text-xl">
                            Your trusted partner for unforgettable journeys
                            across Morocco
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="md:-mt-44">
                <div className="relative z-50 mx-auto max-w-6xl rounded-lg bg-background px-6 py-12">
                    <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
                        <div>
                            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
                                Our Story
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                                Founded with a passion for travel and a
                                commitment to excellence, Aguinane Cars has
                                grown to become one of Morocco's most trusted
                                car rental services. What started as a small
                                fleet has evolved into a comprehensive mobility
                                solution serving thousands of satisfied
                                customers each year.
                            </p>
                            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                                We understand that every journey is unique,
                                whether you're exploring the bustling streets of
                                Marrakech, cruising along the Atlantic coast, or
                                venturing into the majestic Atlas Mountains.
                                That's why we're dedicated to providing not just
                                vehicles, but complete peace of mind.
                            </p>
                        </div>
                        <div className="relative h-96 overflow-hidden rounded-lg">
                            <img
                                src="/bg-story-about.webp"
                                alt="Aguinane Cars journey"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <FeaturedBenefitsData />
            {/* Statistics Section */}
            <Separator orientation="horizontal" />
            <section className="relative bg-background py-12">
                <GridPattern
                    width={20}
                    height={20}
                    x={-1}
                    y={-1}
                    className={cn(
                        'mask-[linear-gradient(to_top_left,white,8%,transparent)]',
                    )}
                />
                <div className="relative mx-auto max-w-6xl">
                    <div className="grid gap-8 text-center md:grid-cols-4">
                        <div>
                            <div className="text-5xl font-bold text-primary md:text-6xl">
                                10K+
                            </div>
                            <p className="mt-3 text-lg font-medium text-muted-foreground">
                                Happy Customers
                            </p>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary md:text-6xl">
                                50+
                            </div>
                            <p className="mt-3 text-lg font-medium text-muted-foreground">
                                Premium Vehicles
                            </p>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary md:text-6xl">
                                3+
                            </div>
                            <p className="mt-3 text-lg font-medium text-muted-foreground">
                                Years Experience
                            </p>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-primary md:text-6xl">
                                98%
                            </div>
                            <p className="mt-3 text-lg font-medium text-muted-foreground">
                                Satisfaction Rate
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Separator orientation="horizontal" />
            {/* Mission & Vision */}
            <section className="bg-muted/30 px-4 py-12">
                <div className="mx-auto max-w-6xl">
                    {/* Section Header */}
                    <div className="mb-12 text-center">
                        <h3 className="text-4xl font-bold text-foreground md:text-5xl">
                            What Drives Us Forward
                        </h3>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                            Our commitment to excellence is built on clear
                            values and ambitious goals
                        </p>
                    </div>

                    <div className="grid gap-12 md:grid-cols-2">
                        <div className="relative rounded-lg border bg-card p-10 shadow-sm">
                            <h4 className="mb-6 text-3xl font-bold text-foreground">
                                Our Mission
                            </h4>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                We exist to transform the way people experience
                                Morocco by providing seamless, reliable car
                                rental solutions. Every vehicle we offer and
                                every interaction we have is designed to give
                                you the freedom to discover this beautiful
                                country on your own terms, with complete
                                confidence and peace of mind.
                            </p>
                            <GridPattern
                                width={20}
                                height={20}
                                x={-1}
                                y={-1}
                                className={cn(
                                    'mask-[linear-gradient(to_top_left,white,8%,transparent)]',
                                )}
                            />
                        </div>

                        <div className="relative rounded-lg border bg-card p-10 shadow-sm">
                            <h4 className="mb-6 text-3xl font-bold text-foreground">
                                Our Vision
                            </h4>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                We aspire to become the most trusted name in
                                Moroccan mobility, setting new standards for
                                quality, innovation, and sustainability in car
                                rentals. Our goal is to be the first choice for
                                travelers seeking authentic experiences, knowing
                                that with Aguinane Cars, every mile is a step
                                toward unforgettable adventures.
                            </p>
                            <GridPattern
                                width={20}
                                height={20}
                                x={-1}
                                y={-1}
                                className={cn(
                                    'mask-[linear-gradient(to_top_left,white,8%,transparent)]',
                                )}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <CtaSection />
            <Contact />
            <Footer />
        </>
    );
};

export default About;
