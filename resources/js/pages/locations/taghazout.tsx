import { Contact } from '@/components/contact';
import { CtaSection } from '@/components/CtaSection';
import { FaqsSection } from '@/components/faqs-section';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import LenisScroll from '@/components/LenisScroll';
import Testimonials from '@/components/testimonials';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ourVehiclesPageData } from '@/routes';
import { Head, Link } from '@inertiajs/react';
import {
    Car,
    CheckCircle,
    Clock,
    Compass,
    Info,
    MapPin,
    Navigation,
    Phone,
    Shield,
    Waves,
} from 'lucide-react';

const faqQuestions = [
    {
        id: 'faq-1',
        title: 'How far is Taghazout from Agadir airport?',
        content:
            'Taghazout is only 19 km north of Agadir, about 25 minutes from Agadir Al Massira Airport (AGA). We offer free airport pickup so you can start your surf trip immediately upon arrival.',
    },
    {
        id: 'faq-2',
        title: 'Do I need a car in Taghazout?',
        content:
            'While Taghazout village itself is walkable, a car opens up the entire coast. You can explore Anchor Point, Banana Village, Paradise Valley, Imsouane, and many hidden surf spots that are only accessible by car.',
    },
    {
        id: 'faq-3',
        title: 'What type of car is best for Taghazout?',
        content:
            'A standard car works for all main roads. If you plan to explore off-the-beaten-path surf spots or drive to Paradise Valley, we recommend the Dacia Duster or similar for extra clearance.',
    },
    {
        id: 'faq-4',
        title: 'Is parking available in Taghazout?',
        content:
            'Yes, there is free parking along the main road and near the beach. During peak season (October-March), spots fill up quickly. Early mornings are best for parking near Anchor Point.',
    },
    {
        id: 'faq-5',
        title: 'Can I drive from Taghazout to Paradise Valley?',
        content:
            'Yes! Paradise Valley is just 11 km from Taghazout (about 20 minutes). The road is mostly paved with a short unpaved section. Any car can make it, but higher clearance is comfortable.',
    },
    {
        id: 'faq-6',
        title: 'What surf spots can I reach by car from Taghazout?',
        content:
            'With a rental car from Taghazout, you can easily reach Anchor Point (2 min), Killer Point (5 min), Banana Beach (3 min), Imsouane (1h10), Essaouira (2h15), and many secret spots along the coast.',
    },
];

export default function TaghazoutPage() {
    const features = [
        {
            icon: Navigation,
            title: 'Airport Pickup',
            description: 'Free delivery to Agadir Al Massira Airport (19 km)',
        },
        {
            icon: Clock,
            title: '24/7 Support',
            description: 'Round-the-clock support for your surf adventures along the coast',
        },
        {
            icon: Shield,
            title: 'Full Insurance',
            description: 'Comprehensive insurance included — surf with peace of mind',
        },
        {
            icon: Waves,
            title: 'Surf Trip Ready',
            description: 'Spacious vehicles for boards, wetsuits and equipment',
        },
    ];

    const popularDestinations = [
        { name: 'Agadir', distance: '19 km', time: '25 min', href: '/car-rental-agadir' },
        { name: 'Imsouane', distance: '66 km', time: '1h 10 min', href: '/car-rental-imsouane' },
        { name: 'Paradise Valley', distance: '11 km', time: '20 min', href: '' },
        { name: 'Essaouira', distance: '154 km', time: '2h 15 min', href: '/car-rental-essaouira' },
        { name: 'Banana Village', distance: '3 km', time: '5 min', href: '' },
        { name: 'Anchor Point', distance: '2 km', time: '3 min', href: '' },
    ];

    const drivingTips = [
        {
            icon: Info,
            title: 'From Agadir Airport',
            description: 'Take the N1 highway north from Agadir airport. Taghazout is well-signposted — exit at the Taghazout/Tamraght junction. The drive takes 25 minutes.',
        },
        {
            icon: Navigation,
            title: 'Village Streets',
            description: 'Taghazout village has narrow streets. Park on the main road or designated parking areas. Walking is the best way to get around the village itself.',
        },
        {
            icon: Compass,
            title: 'Coastal Road North',
            description: 'The road from Taghazout to Imsouane follows the coast through stunning scenery. Take it slow, enjoy the banana plantations, and stop at viewpoints along the way.',
        },
        {
            icon: MapPin,
            title: 'Paradise Valley Access',
            description: 'To reach Paradise Valley, head inland from Taghazout through Aourir. The last stretch has an unpaved section — drive carefully but it\'s manageable in any car.',
        },
    ];

    const crossLinkCities = [
        { name: 'Agadir', href: '/car-rental-agadir', description: 'International airport, beaches and ideal starting point' },
        { name: 'Imsouane', href: '/car-rental-imsouane', description: 'Morocco\'s longest wave and Magic Bay' },
        { name: 'Essaouira', href: '/car-rental-essaouira', description: 'UNESCO medina, kitesurfing and Portuguese heritage' },
        { name: 'Marrakech', href: '/car-rental-marrakech', description: 'Imperial city, souks and the Atlas Mountains' },
    ];

    return (
        <>
            <Head>
                <title>Car Rental Taghazout | Rent a Car in Taghazout - Aguinane Cars</title>
                <meta
                    name="description"
                    content="Rent a car in Taghazout from €20/day. Free delivery from Agadir airport. Explore Anchor Point, Banana Village, Paradise Valley. Car rental in Taghazout, Morocco."
                />
                <meta
                    name="keywords"
                    content="location voiture taghazout, car rental taghazout, rent a car taghazout morocco, taghazout surf trip, location auto taghazout, voiture taghazout, تأجير سيارات تاغازوت, louer voiture taghazout, aguinane cars taghazout, anchor point taghazout"
                />

                <meta property="og:title" content="Car Rental Taghazout | Rent a Car - Aguinane Cars" />
                <meta property="og:description" content="Rent a car in Taghazout from €20/day. Free Agadir airport delivery. 24/7 service." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://aguinanecars.com/car-rental-taghazout" />
                <meta property="og:image" content="https://aguinanecars.com/bg-hero.webp" />
                <meta property="og:locale" content="fr_MA" />
                <meta property="og:locale:alternate" content="en_US" />
                <meta property="og:locale:alternate" content="ar_MA" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Car Rental Taghazout - Aguinane Cars" />
                <meta name="twitter:description" content="Car rental in Taghazout, surf capital of Morocco. From €20/day." />
                <meta name="twitter:image" content="https://aguinanecars.com/bg-hero.webp" />

                <link rel="canonical" href="https://aguinanecars.com/car-rental-taghazout" />
                <meta name="robots" content="index, follow" />
                <meta name="geo.region" content="MA-AGD" />
                <meta name="geo.placename" content="Taghazout" />
                <meta name="geo.position" content="30.5441;-9.7132" />
                <meta name="ICBM" content="30.5441, -9.7132" />

                <link rel="alternate" hrefLang="fr" href="https://aguinanecars.com/car-rental-taghazout" />
                <link rel="alternate" hrefLang="en" href="https://aguinanecars.com/car-rental-taghazout" />
                <link rel="alternate" hrefLang="x-default" href="https://aguinanecars.com/car-rental-taghazout" />

            </Head>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'AutoRental',
                        name: 'Aguinane Cars - Taghazout',
                        description: 'Location de voiture à Taghazout. Car rental in Taghazout with free Agadir airport pickup.',
                        url: 'https://aguinanecars.com/car-rental-taghazout',
                        logo: 'https://aguinanecars.com/logo.png',
                        image: 'https://aguinanecars.com/bg-hero.webp',
                        priceRange: '€€',
                        telephone: '+212661542175',
                        address: {
                            '@type': 'PostalAddress',
                            addressLocality: 'Taghazout',
                            addressRegion: 'Souss-Massa',
                            addressCountry: 'MA',
                        },
                        geo: {
                            '@type': 'GeoCoordinates',
                            latitude: 30.5441,
                            longitude: -9.7132,
                        },
                        areaServed: [
                            { '@type': 'City', name: 'Taghazout' },
                            { '@type': 'City', name: 'Agadir' },
                            { '@type': 'City', name: 'Tamraght' },
                        ],
                        openingHoursSpecification: {
                            '@type': 'OpeningHoursSpecification',
                            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                            opens: '00:00',
                            closes: '23:59',
                        },
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.9',
                            reviewCount: '620',
                        },
                    }),
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: faqQuestions.map((q) => ({
                            '@type': 'Question',
                            name: q.title,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: q.content,
                            },
                        })),
                    }),
                }}
            />

            <LenisScroll />

            {/* Hero Section */}
            <section className="flex min-h-screen items-center justify-center p-4">
                <div
                    className="relative flex h-full min-h-[90vh] w-full flex-col items-center justify-between overflow-hidden rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: 'url(/bg-hero.webp)' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                    <Header />

                    <div className="relative z-10 mx-auto max-w-5xl px-4 pb-20 text-center">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm text-white backdrop-blur-sm">
                            <Waves className="size-4" />
                            <span>Taghazout, Morocco — Surf Capital</span>
                        </div>

                        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
                            Car Rental
                            <span className="block text-primary">in Taghazout</span>
                        </h1>

                        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
                            Rent a car in Taghazout from{' '}
                            <span className="font-bold text-primary">€20/day</span>
                            . Explore Anchor Point, Paradise Valley and the entire coast.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link href={ourVehiclesPageData.url()}>
                                <Button size="lg" className="gap-2 px-8">
                                    <Car className="size-5" />
                                    View Our Vehicles
                                </Button>
                            </Link>
                            <a href="tel:+212661542175">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="gap-2 border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20"
                                >
                                    <Phone className="size-5" />
                                    Call Us
                                </Button>
                            </a>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="size-4 text-green-400" />
                                <span>No Deposit</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="size-4 text-green-400" />
                                <span>Unlimited Mileage</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="size-4 text-green-400" />
                                <span>Insurance Included</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-muted/30 py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Why Rent a Car in Taghazout?
                        </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <Card key={index} className="text-center">
                                <CardContent className="pt-6">
                                    <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
                                        <feature.icon className="size-6 text-primary" />
                                    </div>
                                    <h3 className="mb-2 font-semibold">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Destinations */}
            <section className="py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Popular Destinations from Taghazout
                        </h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {popularDestinations.map((dest, index) => (
                            <Card key={index} className="transition-shadow hover:shadow-lg">
                                <CardContent className="flex items-center justify-between p-4">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="size-5 text-primary" />
                                        <div>
                                            {dest.href ? (
                                                <Link href={dest.href} className="font-semibold hover:underline">
                                                    {dest.name}
                                                </Link>
                                            ) : (
                                                <h3 className="font-semibold">{dest.name}</h3>
                                            )}
                                            <p className="text-sm text-muted-foreground">{dest.distance}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-sm text-muted-foreground">{dest.time}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Local Driving Tips */}
            <section className="bg-muted/30 py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Driving Tips for Taghazout
                        </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {drivingTips.map((tip, index) => (
                            <Card key={index}>
                                <CardContent className="flex gap-4 p-6">
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                        <tip.icon className="size-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-semibold">{tip.title}</h3>
                                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cross-linking Section */}
            <section className="py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Also Available In
                        </h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {crossLinkCities.map((city) => (
                            <Link key={city.name} href={city.href}>
                                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                                    <CardContent className="p-6">
                                        <div className="mb-2 flex items-center gap-2">
                                            <MapPin className="size-4 text-primary" />
                                            <h3 className="font-semibold">{city.name}</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{city.description}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials />

            <FaqsSection
                questions={faqQuestions}
                title="FAQ — Car Rental in Taghazout"
                description="Everything you need to know about renting a car in Taghazout."
            />

            <CtaSection />
            <Contact />
            <Footer />
        </>
    );
}
