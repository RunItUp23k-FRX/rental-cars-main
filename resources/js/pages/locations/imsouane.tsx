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
        title: 'How do I get to Imsouane by car?',
        content:
            'Imsouane is accessible from Agadir (85 km, ~1h30) via the coastal road or from Essaouira (85 km, ~1h30). The road is paved but winding along the coast. We recommend arriving during daylight for the best experience.',
    },
    {
        id: 'faq-2',
        title: 'Is a 4x4 necessary for Imsouane?',
        content:
            'No, a standard car is sufficient to reach Imsouane. The main road is paved. However, some beach access points and nearby off-road spots may benefit from higher clearance. Our Dacia Duster is a popular choice.',
    },
    {
        id: 'faq-3',
        title: 'Where can I park in Imsouane?',
        content:
            'Imsouane has parking areas near the bay and the village center. During peak surf season (September-March), parking can get busy. Arrive early for the best spots near Magic Bay.',
    },
    {
        id: 'faq-4',
        title: 'What is the nearest airport to Imsouane?',
        content:
            'The nearest airport is Agadir Al Massira International Airport (AGA), about 85 km away. We offer free airport pickup and can deliver the car directly to you at the airport for your drive to Imsouane.',
    },
    {
        id: 'faq-5',
        title: 'Can I do a day trip from Imsouane to Paradise Valley?',
        content:
            'Absolutely! Paradise Valley is about 55 km from Imsouane (roughly 1 hour drive). It\'s a popular day trip with natural rock pools and stunning scenery. The road is accessible by standard car.',
    },
    {
        id: 'faq-6',
        title: 'What is the best time to visit Imsouane?',
        content:
            'Imsouane is great year-round, but surf season peaks from September to March with consistent Atlantic swells. Summer is warmer with calmer waters. A rental car lets you explore the coast at your own pace.',
    },
];

export default function ImsoaunePage() {
    const features = [
        {
            icon: Navigation,
            title: 'Airport Transfer',
            description: 'Free delivery from Agadir Al Massira Airport',
        },
        {
            icon: Clock,
            title: '24/7 Support',
            description: 'Round-the-clock support during your surf stay in Imsouane',
        },
        {
            icon: Shield,
            title: 'Full Insurance',
            description: 'Comprehensive insurance included for peace of mind',
        },
        {
            icon: Waves,
            title: 'Surf Explorer',
            description: 'Ideal vehicles to explore the coastal surf spots',
        },
    ];

    const popularDestinations = [
        { name: 'Agadir', distance: '85 km', time: '1h 30 min', href: '/car-rental-agadir' },
        { name: 'Taghazout', distance: '66 km', time: '1h 10 min', href: '/car-rental-taghazout' },
        { name: 'Essaouira', distance: '85 km', time: '1h 30 min', href: '/car-rental-essaouira' },
        { name: 'Paradise Valley', distance: '55 km', time: '1h', href: '' },
        { name: 'Tamri', distance: '20 km', time: '25 min', href: '' },
        { name: 'Agadir Al Massira Airport', distance: '85 km', time: '1h 15 min', href: '' },
    ];

    const drivingTips = [
        {
            icon: Info,
            title: 'Coastal Road from Agadir',
            description: 'The scenic coastal road from Agadir passes through Tamri and banana plantations. It\'s winding but beautiful — take your time and enjoy the views.',
        },
        {
            icon: Navigation,
            title: 'Village Driving',
            description: 'Imsouane is a small fishing village with narrow streets. Drive slowly and park in designated areas near the bay or village entrance.',
        },
        {
            icon: Compass,
            title: 'Surf Spot Access',
            description: 'Both the bay (longboard wave) and the cathedral (shortboard) are accessible on foot from parking. No off-road driving needed to reach the main breaks.',
        },
        {
            icon: MapPin,
            title: 'Fuel Up Before Arriving',
            description: 'Fill your tank in Agadir or Tamri before heading to Imsouane. Fuel stations in the village are limited.',
        },
    ];

    const crossLinkCities = [
        { name: 'Agadir', href: '/car-rental-agadir', description: 'Seaside resort with international airport — ideal starting point' },
        { name: 'Taghazout', href: '/car-rental-taghazout', description: 'Surf village with Anchor Point and yoga retreats' },
        { name: 'Essaouira', href: '/car-rental-essaouira', description: 'UNESCO medina, kitesurfing and Portuguese fortifications' },
    ];

    return (
        <>
            <Head>
                <title>Car Rental Imsouane | Rent a Car for Imsouane - Aguinane Cars</title>
                <meta
                    name="description"
                    content="Rent a car for Imsouane from €20/day. Free delivery from Agadir airport. Explore Magic Bay, Morocco's longest wave and the fishing village charm. Car rental for Imsouane, Morocco."
                />
                <meta
                    name="keywords"
                    content="location voiture imsouane, car rental imsouane, rent a car imsouane morocco, imsouane surf trip, location auto imsouane, voiture imsouane, تأجير سيارات إمسوان, louer voiture imsouane, aguinane cars imsouane, imsouane magic bay"
                />

                <meta property="og:title" content="Car Rental Imsouane | Rent a Car - Aguinane Cars" />
                <meta property="og:description" content="Rent a car for Imsouane from €20/day. Free Agadir airport delivery. 24/7 service." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://aguinanecars.com/car-rental-imsouane" />
                <meta property="og:image" content="https://aguinanecars.com/bg-hero.webp" />
                <meta property="og:locale" content="fr_MA" />
                <meta property="og:locale:alternate" content="en_US" />
                <meta property="og:locale:alternate" content="ar_MA" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Car Rental Imsouane - Aguinane Cars" />
                <meta name="twitter:description" content="Car rental for Imsouane. From €20/day." />
                <meta name="twitter:image" content="https://aguinanecars.com/bg-hero.webp" />

                <link rel="canonical" href="https://aguinanecars.com/car-rental-imsouane" />
                <meta name="robots" content="index, follow" />
                <meta name="geo.region" content="MA-AGD" />
                <meta name="geo.placename" content="Imsouane" />
                <meta name="geo.position" content="30.8419;-9.8258" />
                <meta name="ICBM" content="30.8419, -9.8258" />

                <link rel="alternate" hrefLang="fr" href="https://aguinanecars.com/car-rental-imsouane" />
                <link rel="alternate" hrefLang="en" href="https://aguinanecars.com/car-rental-imsouane" />
                <link rel="alternate" hrefLang="x-default" href="https://aguinanecars.com/car-rental-imsouane" />

            </Head>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'AutoRental',
                        name: 'Aguinane Cars - Imsouane',
                        description: 'Location de voiture pour Imsouane. Car rental for Imsouane with airport delivery from Agadir.',
                        url: 'https://aguinanecars.com/car-rental-imsouane',
                        logo: 'https://aguinanecars.com/logo.png',
                        image: 'https://aguinanecars.com/bg-hero.webp',
                        priceRange: '€€',
                        telephone: '+212661542175',
                        address: {
                            '@type': 'PostalAddress',
                            addressLocality: 'Imsouane',
                            addressRegion: 'Souss-Massa',
                            addressCountry: 'MA',
                        },
                        geo: {
                            '@type': 'GeoCoordinates',
                            latitude: 30.8419,
                            longitude: -9.8258,
                        },
                        areaServed: [
                            { '@type': 'City', name: 'Imsouane' },
                            { '@type': 'City', name: 'Agadir' },
                            { '@type': 'City', name: 'Taghazout' },
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
                            reviewCount: '380',
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
                            <span>Imsouane, Morocco — Surf Paradise</span>
                        </div>

                        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
                            Car Rental
                            <span className="block text-primary">for Imsouane</span>
                        </h1>

                        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
                            Rent a car for Imsouane from{' '}
                            <span className="font-bold text-primary">€20/day</span>.
                            Discover Magic Bay and Morocco's longest wave.
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
                            Why Rent a Car for Imsouane?
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
                            Popular Destinations from Imsouane
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
                            Driving Tips for Imsouane
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

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                title="FAQ — Car Rental for Imsouane"
                description="Everything you need to know about renting a car and exploring Imsouane."
            />

            <CtaSection />
            <Contact />
            <Footer />
        </>
    );
}
