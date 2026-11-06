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
    Wind,
} from 'lucide-react';

const faqQuestions = [
    {
        id: 'faq-1',
        title: 'Can I pick up a rental car directly in Essaouira?',
        content:
            'Yes! Aguinane Cars offers delivery directly to your hotel or riad in Essaouira. We can also arrange pickup at the Essaouira-Mogador Airport (ESU) or at a convenient meeting point in the city.',
    },
    {
        id: 'faq-2',
        title: 'Is it easy to drive in Essaouira medina?',
        content:
            'The medina of Essaouira is a pedestrian-only zone — cars cannot enter. We recommend parking outside the medina walls at Bab Doukkala or Bab Marrakech parking areas. The city center outside the medina is easy to navigate.',
    },
    {
        id: 'faq-3',
        title: 'What is the best route from Essaouira to Marrakech?',
        content:
            'The most direct route is the N8 highway (175 km, about 2.5 hours). The road is well-maintained and passes through beautiful argan tree landscapes. We recommend starting early to enjoy the scenery.',
    },
    {
        id: 'faq-4',
        title: 'Are the roads to Imsouane and Safi in good condition?',
        content:
            'The coastal road from Essaouira to Safi (R301) and Imsouane is scenic and generally in good condition. Some sections may be winding, so drive carefully. A standard car is sufficient for all main roads.',
    },
    {
        id: 'faq-5',
        title: 'What should I know about wind conditions in Essaouira?',
        content:
            'Essaouira is famous for its strong trade winds (alizés), especially from April to September. This is great for wind sports but be aware of sand on coastal roads. Keep windows up when parked near the beach.',
    },
    {
        id: 'faq-6',
        title: 'Can I rent a car in Essaouira and return it in Agadir?',
        content:
            'Yes, we offer flexible one-way rentals between Essaouira and all our other locations including Agadir, Marrakech, and Casablanca. Contact us when booking to arrange the details.',
    },
];

export default function EssaouiraPage() {
    const features = [
        {
            icon: Navigation,
            title: 'Hotel Delivery',
            description: 'Free delivery to your hotel or riad in Essaouira and surrounding areas',
        },
        {
            icon: Clock,
            title: '24/7 Support',
            description: 'Round-the-clock support throughout your entire stay',
        },
        {
            icon: Shield,
            title: 'Full Insurance',
            description: 'Comprehensive insurance included in all our rates',
        },
        {
            icon: Wind,
            title: 'Coastal Adventures',
            description: 'Perfect vehicles to explore the Atlantic coast and its hidden gems',
        },
    ];

    const popularDestinations = [
        { name: 'Agadir', distance: '173 km', time: '2h 30 min', href: '/car-rental-agadir' },
        { name: 'Marrakech', distance: '175 km', time: '2h 30 min', href: '/car-rental-marrakech' },
        { name: 'Safi', distance: '132 km', time: '1h 45 min', href: '' },
        { name: 'Imsouane', distance: '85 km', time: '1h 30 min', href: '/car-rental-imsouane' },
        { name: 'Taghazout', distance: '154 km', time: '2h 15 min', href: '/car-rental-taghazout' },
        { name: 'Oualidia', distance: '200 km', time: '2h 45 min', href: '' },
    ];

    const drivingTips = [
        {
            icon: Info,
            title: 'Essaouira-Mogador Airport (ESU)',
            description: 'Small airport with seasonal flights. Most visitors arrive via Marrakech or Agadir airports and drive to Essaouira.',
        },
        {
            icon: Navigation,
            title: 'Medina Parking',
            description: 'Park outside the medina walls at Bab Doukkala or Bab Marrakech. The medina is pedestrian-only — enjoy it on foot!',
        },
        {
            icon: Compass,
            title: 'Coastal Wind Advisory',
            description: 'Strong Atlantic winds are common, especially in summer. Secure loose items and be mindful of sand on the road near the coast.',
        },
        {
            icon: MapPin,
            title: 'Argan Country',
            description: 'The road between Essaouira and Agadir passes through argan tree country. Watch for goats climbing trees — a unique photo opportunity!',
        },
    ];

    const crossLinkCities = [
        { name: 'Agadir', href: '/car-rental-agadir', description: 'Beaches, surf and sunshine — Morocco\'s seaside resort' },
        { name: 'Marrakech', href: '/car-rental-marrakech', description: 'Historic medina, souks and the Atlas Mountains' },
        { name: 'Imsouane', href: '/car-rental-imsouane', description: 'Authentic surf village and Morocco\'s longest wave' },
        { name: 'Taghazout', href: '/car-rental-taghazout', description: 'Morocco\'s surf capital and yoga retreats' },
    ];

    return (
        <>
            <Head>
                <title>Car Rental Essaouira | Rent a Car in Essaouira - Aguinane Cars</title>
                <meta
                    name="description"
                    content="Rent a car in Essaouira from €20/day. Free delivery to your hotel or riad. Explore the UNESCO medina, surf beaches and the Atlantic coast. Best car rental in Essaouira, Morocco."
                />
                <meta
                    name="keywords"
                    content="location voiture essaouira, car rental essaouira, rent a car essaouira, essaouira mogador airport, location auto essaouira, voiture essaouira pas cher, تأجير سيارات الصويرة, louer voiture essaouira, aguinane cars essaouira, essaouira road trip"
                />

                <meta property="og:title" content="Car Rental Essaouira | Rent a Car - Aguinane Cars" />
                <meta property="og:description" content="Rent a car in Essaouira from €20/day. Free delivery to your accommodation. 24/7 service." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://aguinanecars.com/car-rental-essaouira" />
                <meta property="og:image" content="https://aguinanecars.com/bg-hero.webp" />
                <meta property="og:locale" content="fr_MA" />
                <meta property="og:locale:alternate" content="en_US" />
                <meta property="og:locale:alternate" content="ar_MA" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Car Rental Essaouira - Aguinane Cars" />
                <meta name="twitter:description" content="Best car rental service in Essaouira. From €20/day." />
                <meta name="twitter:image" content="https://aguinanecars.com/bg-hero.webp" />

                <link rel="canonical" href="https://aguinanecars.com/car-rental-essaouira" />
                <meta name="robots" content="index, follow" />
                <meta name="geo.region" content="MA-ESS" />
                <meta name="geo.placename" content="Essaouira" />
                <meta name="geo.position" content="31.5085;-9.7595" />
                <meta name="ICBM" content="31.5085, -9.7595" />

                <link rel="alternate" hrefLang="fr" href="https://aguinanecars.com/car-rental-essaouira" />
                <link rel="alternate" hrefLang="en" href="https://aguinanecars.com/car-rental-essaouira" />
                <link rel="alternate" hrefLang="x-default" href="https://aguinanecars.com/car-rental-essaouira" />

            </Head>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'AutoRental',
                        name: 'Aguinane Cars - Essaouira',
                        description: 'Location de voiture à Essaouira. Car rental in Essaouira with delivery to your hotel or riad.',
                        url: 'https://aguinanecars.com/car-rental-essaouira',
                        logo: 'https://aguinanecars.com/logo.png',
                        image: 'https://aguinanecars.com/bg-hero.webp',
                        priceRange: '€€',
                        telephone: '+212661542175',
                        address: {
                            '@type': 'PostalAddress',
                            addressLocality: 'Essaouira',
                            addressRegion: 'Marrakech-Safi',
                            postalCode: '44000',
                            addressCountry: 'MA',
                        },
                        geo: {
                            '@type': 'GeoCoordinates',
                            latitude: 31.5085,
                            longitude: -9.7595,
                        },
                        areaServed: [
                            { '@type': 'City', name: 'Essaouira' },
                            { '@type': 'City', name: 'Safi' },
                            { '@type': 'City', name: 'Imsouane' },
                        ],
                        openingHoursSpecification: {
                            '@type': 'OpeningHoursSpecification',
                            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                            opens: '00:00',
                            closes: '23:59',
                        },
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.8',
                            reviewCount: '540',
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
                            <MapPin className="size-4" />
                            <span>Essaouira, Morocco — UNESCO World Heritage</span>
                        </div>

                        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
                            Car Rental
                            <span className="block text-primary">in Essaouira</span>
                        </h1>

                        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
                            Rent a car in Essaouira from{' '}
                            <span className="font-bold text-primary">€20/day</span>.
                            Explore the UNESCO medina, surf beaches and the Atlantic coast.
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
                            Why Rent a Car in Essaouira?
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
                            Popular Destinations from Essaouira
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
                            Driving Tips for Essaouira
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
                title="FAQ — Car Rental in Essaouira"
                description="Everything you need to know about renting a car in Essaouira."
            />

            <CtaSection />
            <Contact />
            <Footer />
        </>
    );
}
