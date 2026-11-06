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
    Building2,
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
} from 'lucide-react';

const faqQuestions = [
    {
        id: 'faq-1',
        title: 'Can I pick up a car at Casablanca Mohammed V Airport?',
        content:
            'Yes! We offer delivery to Mohammed V International Airport (CMN). Our agent will meet you at the arrivals terminal with your car ready to go. Free airport pickup is included with all rentals.',
    },
    {
        id: 'faq-2',
        title: 'How is driving in Casablanca?',
        content:
            'Casablanca is Morocco\'s largest city with busy traffic, especially during rush hours (8-10am, 5-7pm). The highway system is excellent for getting in and out of the city. GPS navigation is highly recommended for navigating the city center.',
    },
    {
        id: 'faq-3',
        title: 'What are the highway tolls from Casablanca?',
        content:
            'Morocco has a modern autoroute (highway) system with tolls. Casablanca to Marrakech costs approximately 120 MAD (~€11), Casablanca to Rabat about 30 MAD (~€3). Tolls are paid in cash or via Jawaz transponder.',
    },
    {
        id: 'faq-4',
        title: 'Where can I park in Casablanca city center?',
        content:
            'Use guarded parking lots (parkings gardés) throughout the city center. Major malls like Morocco Mall and Anfa Place have large parking garages. Avoid leaving valuables in the car. Street parking with attendants is also available.',
    },
    {
        id: 'faq-5',
        title: 'Can I rent a car in Casablanca and drop it off in Agadir?',
        content:
            'Yes, we offer one-way rentals from Casablanca to Agadir, Marrakech, and all our other locations. The drive from Casablanca to Agadir is about 460 km (5 hours via autoroute). Contact us to arrange the details.',
    },
    {
        id: 'faq-6',
        title: 'What is the best route from Casablanca to Marrakech?',
        content:
            'Take the A7 autoroute (toll highway) — it\'s the fastest and safest route (239 km, about 2.5 hours). The road is excellent with rest stops along the way. Alternatively, the N9 national road is free but slower.',
    },
    {
        id: 'faq-7',
        title: 'Is it worth renting a car for a Casablanca business trip?',
        content:
            'Absolutely. A rental car gives you flexibility for meetings across the city and easy access to the business district, port area, and CFC (Casablanca Finance City). Much more convenient than taxis for multiple appointments.',
    },
];

export default function CasablancaPage() {
    const features = [
        {
            icon: Plane,
            title: 'CMN Airport Pickup',
            description: 'Free delivery to Mohammed V International Airport',
        },
        {
            icon: Clock,
            title: '24/7 Support',
            description: 'Round-the-clock support for business and leisure travel',
        },
        {
            icon: Shield,
            title: 'Full Insurance',
            description: 'Comprehensive insurance included for worry-free driving',
        },
        {
            icon: Building2,
            title: 'Business Ready',
            description: 'Comfortable vehicles suited for business travel',
        },
    ];

    const popularDestinations = [
        { name: 'Marrakech', distance: '239 km', time: '2h 30 min', href: '/car-rental-marrakech' },
        { name: 'Rabat', distance: '87 km', time: '1h', href: '' },
        { name: 'El Jadida', distance: '99 km', time: '1h 15 min', href: '' },
        { name: 'Essaouira', distance: '350 km', time: '4h', href: '/car-rental-essaouira' },
        { name: 'Agadir', distance: '460 km', time: '5h', href: '/car-rental-agadir' },
        { name: 'Fes', distance: '295 km', time: '3h', href: '' },
    ];

    const drivingTips = [
        {
            icon: Info,
            title: 'Mohammed V Airport (CMN)',
            description: 'The airport is 30 km south of the city center. Take the A5 autoroute to reach downtown in about 30 minutes. Follow signs for "Casablanca Centre".',
        },
        {
            icon: Navigation,
            title: 'City Center Navigation',
            description: 'Use GPS for navigating Casablanca. Key landmarks: Hassan II Mosque (coastal), Morocco Mall (Ain Diab), and the Central Market area. Avoid rush hours for smoother driving.',
        },
        {
            icon: Compass,
            title: 'Highway Network',
            description: 'Casablanca is Morocco\'s highway hub. The autoroute connects to Rabat (A3), Marrakech (A7), El Jadida (A5), and beyond. Keep cash for toll booths or get a Jawaz pass.',
        },
        {
            icon: MapPin,
            title: 'Fuel & Services',
            description: 'Fuel stations are abundant in Casablanca and along highways. Major brands include Afriquia, Shell, and Total. Most accept credit cards.',
        },
    ];

    const crossLinkCities = [
        { name: 'Marrakech', href: '/car-rental-marrakech', description: 'Imperial city, Jemaa el-Fna and the Atlas Mountains' },
        { name: 'Agadir', href: '/car-rental-agadir', description: 'Sunny seaside resort with golden beaches' },
        { name: 'Essaouira', href: '/car-rental-essaouira', description: 'UNESCO medina, surf and Atlantic charm' },
        { name: 'Taghazout', href: '/car-rental-taghazout', description: 'Morocco\'s surf capital and Paradise Valley' },
    ];

    return (
        <>
            <Head>
                <title>Car Rental Casablanca | Rent a Car in Casablanca - Aguinane Cars</title>
                <meta
                    name="description"
                    content="Rent a car in Casablanca from €20/day. Free delivery to Mohammed V Airport (CMN). Book your rental car in Casablanca with Aguinane Cars. Best car rental in Casablanca, Morocco."
                />
                <meta
                    name="keywords"
                    content="location voiture casablanca, car rental casablanca, rent a car casablanca, casablanca airport car hire, location auto casablanca, voiture casablanca pas cher, mohammed v airport, تأجير سيارات الدار البيضاء, louer voiture casablanca, aguinane cars casablanca"
                />

                <meta property="og:title" content="Car Rental Casablanca | Rent a Car - Aguinane Cars" />
                <meta property="og:description" content="Rent a car in Casablanca from €20/day. Free delivery to Mohammed V Airport." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://aguinanecars.com/car-rental-casablanca" />
                <meta property="og:image" content="https://aguinanecars.com/bg-hero.webp" />
                <meta property="og:locale" content="fr_MA" />
                <meta property="og:locale:alternate" content="en_US" />
                <meta property="og:locale:alternate" content="ar_MA" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Car Rental Casablanca - Aguinane Cars" />
                <meta name="twitter:description" content="Best car rental service in Casablanca. From €20/day." />
                <meta name="twitter:image" content="https://aguinanecars.com/bg-hero.webp" />

                <link rel="canonical" href="https://aguinanecars.com/car-rental-casablanca" />
                <meta name="robots" content="index, follow" />
                <meta name="geo.region" content="MA-CAS" />
                <meta name="geo.placename" content="Casablanca" />
                <meta name="geo.position" content="33.5731;-7.5898" />
                <meta name="ICBM" content="33.5731, -7.5898" />

                <link rel="alternate" hrefLang="fr" href="https://aguinanecars.com/car-rental-casablanca" />
                <link rel="alternate" hrefLang="en" href="https://aguinanecars.com/car-rental-casablanca" />
                <link rel="alternate" hrefLang="x-default" href="https://aguinanecars.com/car-rental-casablanca" />

            </Head>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'AutoRental',
                        name: 'Aguinane Cars - Casablanca',
                        description: 'Location de voiture à Casablanca. Car rental in Casablanca with airport pickup at Mohammed V International Airport.',
                        url: 'https://aguinanecars.com/car-rental-casablanca',
                        logo: 'https://aguinanecars.com/logo.png',
                        image: 'https://aguinanecars.com/bg-hero.webp',
                        priceRange: '€€',
                        telephone: '+212661542175',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: 'Mohammed V International Airport',
                            addressLocality: 'Casablanca',
                            addressRegion: 'Casablanca-Settat',
                            postalCode: '20000',
                            addressCountry: 'MA',
                        },
                        geo: {
                            '@type': 'GeoCoordinates',
                            latitude: 33.5731,
                            longitude: -7.5898,
                        },
                        areaServed: [
                            { '@type': 'City', name: 'Casablanca' },
                            { '@type': 'City', name: 'Rabat' },
                            { '@type': 'City', name: 'El Jadida' },
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
                            reviewCount: '450',
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
                            <Building2 className="size-4" />
                            <span>Casablanca, Morocco — Business Hub</span>
                        </div>

                        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
                            Car Rental
                            <span className="block text-primary">in Casablanca</span>
                        </h1>

                        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
                            Rent a car in Casablanca from{' '}
                            <span className="font-bold text-primary">€20/day</span>.
                            Free delivery to Mohammed V Airport.
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
                            Why Rent a Car in Casablanca?
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
                            Popular Destinations from Casablanca
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
                            Driving Tips for Casablanca
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
                title="FAQ — Car Rental in Casablanca"
                description="Everything you need to know about renting a car in Casablanca."
            />

            <CtaSection />
            <Contact />
            <Footer />
        </>
    );
}
