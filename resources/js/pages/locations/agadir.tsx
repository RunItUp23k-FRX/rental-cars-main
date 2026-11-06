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
    Plane,
    Shield,
    Waves,
} from 'lucide-react';

const faqQuestions = [
    {
        id: 'faq-1',
        title: 'How do I get my rental car at Agadir Al Massira Airport?',
        content:
            'We offer free delivery at Agadir Al Massira Airport (AGA). Our agent will meet you at the arrivals terminal with your car ready. Just share your flight details when booking and we handle the rest.',
    },
    {
        id: 'faq-2',
        title: 'What documents do I need to rent a car in Agadir?',
        content:
            "You need a valid driver's license (held for at least 1 year), a national ID card or passport, and a credit card in the driver's name. International visitors may need an International Driving Permit (IDP) depending on their country.",
    },
    {
        id: 'faq-3',
        title: 'Can I drive from Agadir to Taghazout and Imsouane?',
        content:
            'Absolutely! Taghazout is just 19 km north (25 min) and Imsouane is 85 km (1h30). The coastal road is scenic and well-paved. A standard car is perfect for both destinations.',
    },
    {
        id: 'faq-4',
        title: 'Is parking easy in Agadir city center?',
        content:
            'Yes, Agadir has plenty of parking options. The corniche (beach promenade) has free parking areas, and most hotels offer parking. The city center has guarded parking lots. Avoid parking in unmarked areas.',
    },
    {
        id: 'faq-5',
        title: 'What is the fuel policy for rentals in Agadir?',
        content:
            'We operate a full-to-full fuel policy — you receive the car with a full tank and return it full. Fuel stations are abundant in Agadir and along all major routes. Diesel is the most economical option.',
    },
    {
        id: 'faq-6',
        title: 'Can I take the rental car to Essaouira or Marrakech?',
        content:
            'Yes! Unlimited mileage is included. Essaouira is 173 km (2h30) and Marrakech is 254 km (3h) from Agadir. Both routes are via well-maintained highways. One-way drop-off is also available.',
    },
    {
        id: 'faq-7',
        title: 'Is insurance included with Agadir car rentals?',
        content:
            'Yes, comprehensive insurance is included in all our rental prices — covering third-party liability, collision damage waiver (CDW), and theft protection. Drive with complete peace of mind.',
    },
    {
        id: 'faq-8',
        title: 'What are the best day trips from Agadir by car?',
        content:
            'Top day trips: Taghazout (25 min, surf), Paradise Valley (40 min, nature), Imsouane (1h30, surf), Essaouira (2h30, culture), Tiznit (1h15, silver market), and Souss-Massa National Park (45 min, flamingos).',
    },
];

export default function AgadirPage() {
    const features = [
        {
            icon: Plane,
            title: 'Airport Pickup',
            description: 'Free delivery to Agadir Al Massira Airport (AGA)',
        },
        {
            icon: Waves,
            title: 'Beach & Surf Ready',
            description: 'Spacious vehicles for surfboards and beach equipment',
        },
        {
            icon: Shield,
            title: 'Full Insurance',
            description: 'Comprehensive insurance included — surf, beach and road with peace of mind',
        },
        {
            icon: Car,
            title: 'Coastal Fleet',
            description: 'SUVs and sedans perfect for the Atlantic coast and its hidden gems',
        },
    ];

    const popularDestinations = [
        { name: 'Taghazout', distance: '19 km', time: '25 min', href: '/car-rental-taghazout' },
        { name: 'Imsouane', distance: '85 km', time: '1h 30 min', href: '/car-rental-imsouane' },
        { name: 'Essaouira', distance: '173 km', time: '2h 30 min', href: '/car-rental-essaouira' },
        { name: 'Marrakech', distance: '254 km', time: '3h', href: '/car-rental-marrakech' },
        { name: 'Paradise Valley', distance: '30 km', time: '40 min', href: '' },
        { name: 'Tiznit', distance: '91 km', time: '1h 15 min', href: '' },
    ];

    const drivingTips = [
        {
            icon: Info,
            title: 'Al Massira Airport Navigation',
            description: 'From the airport, take the N10 toward Agadir center (25 km, ~30 min). The road is well-signposted. Turn right onto the N1 for Taghazout and northern coast.',
        },
        {
            icon: Navigation,
            title: 'Coastal Road Tips',
            description: 'The N1 north to Taghazout and Essaouira offers stunning ocean views. Drive carefully on curves and watch for cyclists and pedestrians near villages.',
        },
        {
            icon: Compass,
            title: 'Parking in Agadir Center',
            description: 'The corniche area has free parking along the beachfront. Use guarded parking lots (5-10 MAD) in the Talborjt and city center areas for security.',
        },
        {
            icon: MapPin,
            title: 'Toll Roads',
            description: 'The autoroute from Agadir to Marrakech (A7) has tolls (~90 MAD). Keep cash ready or ask us about Jawaz transponders for faster passage.',
        },
    ];

    const popularRoutes = [
        {
            name: 'Agadir → Taghazout (Surf Route)',
            description: 'The quintessential surf trip — 19 km along the coast passing Banana Beach, Killer Point, and ending at Anchor Point.',
            distance: '19 km',
            time: '25 min',
        },
        {
            name: 'Agadir → Imsouane (Coastal Scenic)',
            description: 'Stunning coastal drive through banana plantations and fishing villages. Stop at Tamri for bird-watching.',
            distance: '85 km',
            time: '1h 30 min',
        },
        {
            name: 'Agadir → Essaouira (Day Trip)',
            description: 'Drive through argan country to the UNESCO-listed medina. Watch for goats in argan trees along the way.',
            distance: '173 km',
            time: '2h 30 min',
        },
    ];

    const crossLinkCities = [
        { name: 'Marrakech', href: '/car-rental-marrakech', description: 'Imperial city, Jemaa el-Fna and the Atlas Mountains' },
        { name: 'Essaouira', href: '/car-rental-essaouira', description: 'UNESCO medina, kitesurfing and Portuguese fortifications' },
        { name: 'Imsouane', href: '/car-rental-imsouane', description: 'Surf village with Morocco\'s longest wave' },
        { name: 'Taghazout', href: '/car-rental-taghazout', description: 'Morocco\'s surf capital and yoga retreats' },
    ];

    return (
        <>
            <Head>
                <title>
                    Car Rental Agadir | Rent a Car in Agadir - Aguinane Cars
                </title>
                <meta
                    name="description"
                    content="Rent a car in Agadir from €20/day. Free delivery to Al Massira Airport. Book your rental car in Agadir with Aguinane Cars - best prices guaranteed. Car rental in Agadir, Morocco."
                />
                <meta
                    name="keywords"
                    content="location voiture agadir, car rental agadir, rent a car agadir, agadir airport car hire, location auto agadir, voiture agadir pas cher, agadir al massira airport, تأجير سيارات اكادير, louer voiture agadir, aguinane cars agadir"
                />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="Car Rental Agadir | Rent a Car - Aguinane Cars"
                />
                <meta
                    property="og:description"
                    content="Rent a car in Agadir from €20/day. Free airport delivery. 24/7 service."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://aguinanecars.com/car-rental-agadir"
                />
                <meta
                    property="og:image"
                    content="https://aguinanecars.com/bg-hero.webp"
                />
                <meta property="og:locale" content="fr_MA" />
                <meta property="og:locale:alternate" content="en_US" />
                <meta property="og:locale:alternate" content="ar_MA" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Car Rental Agadir - Aguinane Cars"
                />
                <meta
                    name="twitter:description"
                    content="Best car rental service in Agadir. From €20/day."
                />
                <meta
                    name="twitter:image"
                    content="https://aguinanecars.com/bg-hero.webp"
                />

                {/* Additional SEO */}
                <link
                    rel="canonical"
                    href="https://aguinanecars.com/car-rental-agadir"
                />
                <meta name="robots" content="index, follow" />
                <meta name="geo.region" content="MA-AGD" />
                <meta name="geo.placename" content="Agadir" />
                <meta name="geo.position" content="30.4278;-9.5981" />
                <meta name="ICBM" content="30.4278, -9.5981" />

                {/* Hreflang for multi-language */}
                <link
                    rel="alternate"
                    hrefLang="fr"
                    href="https://aguinanecars.com/car-rental-agadir"
                />
                <link
                    rel="alternate"
                    hrefLang="en"
                    href="https://aguinanecars.com/car-rental-agadir"
                />
                <link
                    rel="alternate"
                    hrefLang="x-default"
                    href="https://aguinanecars.com/car-rental-agadir"
                />

            </Head>

            {/* LocalBusiness Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'AutoRental',
                        name: 'Aguinane Cars - Agadir',
                        description:
                            'Location de voiture à Agadir. Car rental in Agadir with airport pickup at Al Massira Airport.',
                        url: 'https://aguinanecars.com/car-rental-agadir',
                        logo: 'https://aguinanecars.com/logo.png',
                        image: 'https://aguinanecars.com/bg-hero.webp',
                        priceRange: '€€',
                        telephone: '+212661542175',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: 'Agadir Al Massira Airport',
                            addressLocality: 'Agadir',
                            addressRegion: 'Souss-Massa',
                            postalCode: '80000',
                            addressCountry: 'MA',
                        },
                        geo: {
                            '@type': 'GeoCoordinates',
                            latitude: 30.4278,
                            longitude: -9.5981,
                        },
                        areaServed: [
                            { '@type': 'City', name: 'Agadir' },
                            { '@type': 'City', name: 'Taghazout' },
                            { '@type': 'City', name: 'Imsouane' },
                        ],
                        openingHoursSpecification: {
                            '@type': 'OpeningHoursSpecification',
                            dayOfWeek: [
                                'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                                'Friday', 'Saturday', 'Sunday',
                            ],
                            opens: '00:00',
                            closes: '23:59',
                        },
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.9',
                            reviewCount: '850',
                        },
                    }),
                }}
            />

            {/* FAQPage Schema */}
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
                            <span>Agadir, Morocco</span>
                        </div>

                        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
                            Car Rental
                            <span className="block text-primary">in Agadir</span>
                        </h1>

                        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
                            Rent a car in Agadir from{' '}
                            <span className="font-bold text-primary">€20/day</span>.
                            Free delivery to Al Massira Airport.
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

                        {/* Trust badges */}
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
                            Why Choose Aguinane Cars in Agadir?
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
                                    <p className="text-sm text-muted-foreground">
                                        {feature.description}
                                    </p>
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
                            Popular Destinations from Agadir
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
                                            <p className="text-sm text-muted-foreground">
                                                {dest.distance}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-sm text-muted-foreground">
                                            {dest.time}
                                        </span>
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
                            Driving Tips for Agadir
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

            {/* Popular Routes */}
            <section className="py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Popular Routes from Agadir
                        </h2>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {popularRoutes.map((route, index) => (
                            <Card key={index} className="h-full">
                                <CardContent className="p-6">
                                    <h3 className="mb-2 font-semibold">{route.name}</h3>
                                    <p className="mb-4 text-sm text-muted-foreground">{route.description}</p>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <Navigation className="size-3" />
                                            {route.distance}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="size-3" />
                                            {route.time}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cross-linking Section */}
            <section className="bg-muted/30 py-16">
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

            {/* Real Customer Reviews */}
            <Testimonials />

            <FaqsSection
                questions={faqQuestions}
                title="FAQ — Car Rental in Agadir"
                description="Everything you need to know about renting a car in Agadir."
            />

            <CtaSection />
            <Contact />
            <Footer />
        </>
    );
}
