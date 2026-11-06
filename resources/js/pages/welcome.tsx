import { Contact } from '@/components/contact';
import { CtaSection } from '@/components/CtaSection';
import { FaqsSection } from '@/components/faqs-section';
import FeaturedCars from '@/components/featured-cars';
import FeaturedBenefitsData from '@/components/features-benefits';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import HeroFormFIlter from '@/components/HeroFormFIlter';
import { HowItWorks } from '@/components/HowItWorks';
import LenisScroll from '@/components/LenisScroll';
import { LogoCloud } from '@/components/logo-cloud';
import Testimonials from '@/components/testimonials';
import { type SharedData } from '@/types';
import { Car } from '@/types/cars-types';
import { Head, usePage } from '@inertiajs/react';
import { Toaster } from 'sonner';

export default function Home({
    canRegister = true,
    featuredCars = [],
}: {
    canRegister?: boolean;
    featuredCars: Car[];
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head>
                <title>
                    Aguinane Cars - Premium Car Rental in Morocco | Agadir,
                    Marrakech, Imsouane
                </title>
                <meta
                    name="description"
                    content="Rent premium cars in Morocco with Aguinane Cars. Best rates on car rentals in Agadir, Marrakech, Imsouane, Essaouira, and across Morocco. Book online for instant confirmation and 24/7 support."
                />
                <meta
                    name="keywords"
                    content="car rental Morocco, rent a car Agadir, car hire Marrakech, car rental Imsouane, cheap car rental Morocco, premium car rental, Aguinane Cars, rent car Essaouira, car rental Casablanca, Taghazout car rental, Morocco vehicle rental, airport car rental Morocco"
                />

                {/* Open Graph / Facebook */}
                <meta
                    property="og:title"
                    content="Aguinane Cars - Best Car Rental Service in Morocco"
                />
                <meta
                    property="og:description"
                    content="Premium car rental in Agadir, Marrakech, Imsouane & all Morocco. Competitive rates, 24/7 support, instant booking. Your journey starts here."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://aguinanecars.com" />
                <meta property="og:image" content="https://aguinanecars.com/bg-hero.webp" />
                <meta property="og:site_name" content="Aguinane Cars" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Aguinane Cars - Premium Car Rental in Morocco"
                />
                <meta
                    name="twitter:description"
                    content="Rent cars in Agadir, Marrakech, Imsouane & across Morocco. Best rates, premium vehicles, instant booking."
                />
                <meta name="twitter:image" content="https://aguinanecars.com/bg-hero.webp" />

                {/* Additional SEO */}
                <link rel="canonical" href="https://aguinanecars.com" />
                <link rel="alternate" hrefLang="en" href="https://aguinanecars.com" />
                <link rel="alternate" hrefLang="fr" href="https://aguinanecars.com" />
                <link rel="alternate" hrefLang="x-default" href="https://aguinanecars.com" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Aguinane Cars" />
                <meta name="geo.region" content="MA" />
                <meta name="geo.placename" content="Morocco" />
                <meta name="geo.position" content="30.4278;-9.5981" />
                <meta name="ICBM" content="30.4278, -9.5981" />

            </Head>

            {/* Schema.org structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'AutoRental',
                        name: 'Aguinane Cars',
                        description:
                            'Premium car rental service in Morocco offering competitive rates and 24/7 support',
                        url: 'https://aguinanecars.com',
                        logo: 'https://aguinanecars.com/logo.png',
                        image: 'https://aguinanecars.com/bg-hero.webp',
                        priceRange: '$$',
                        address: {
                            '@type': 'PostalAddress',
                            addressCountry: 'MA',
                            addressRegion: 'Souss-Massa',
                            addressLocality: 'Agadir',
                        },
                        areaServed: [
                            { '@type': 'City', name: 'Agadir' },
                            { '@type': 'City', name: 'Marrakech' },
                            { '@type': 'City', name: 'Imsouane' },
                            { '@type': 'City', name: 'Essaouira' },
                            { '@type': 'City', name: 'Casablanca' },
                        ],
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.8',
                            reviewCount: '1250',
                        },
                    }),
                }}
            />

            <LenisScroll />
            <section
                id="hero"
                className="flex h-screen min-h-screen items-center justify-center p-4"
            >
                <div
                    className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-lg bg-cover bg-center md:bg-bottom"
                    style={{
                        backgroundImage: `url(/bg-hero.webp)`,
                    }}
                >
                    <Header />
                    <div className="flex w-full flex-col px-4">
                        <h1 className="-mt-56 text-center text-5xl leading-tight font-bold text-white md:-mt-64 md:text-left">
                            The Best Platform for Car Rental
                        </h1>
                    </div>
                </div>
            </section>
            <Toaster />
            <HeroFormFIlter />
            <LogoCloud />
            <FeaturedBenefitsData />
            {featuredCars && <FeaturedCars cars={featuredCars} />}
            <HowItWorks />
            <Testimonials />
            <CtaSection />
            <FaqsSection />
            <Contact />
            <Footer />
        </>
    );
}
