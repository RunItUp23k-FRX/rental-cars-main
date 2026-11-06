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
    Mountain,
    Navigation,
    Phone,
    Plane,
    Shield,
} from 'lucide-react';

const faqQuestions = [
    {
        id: 'faq-1',
        title: 'How do I get my rental car at Marrakech Menara Airport?',
        content:
            'We offer free delivery at Marrakech Menara Airport (RAK). Our agent will meet you at the arrivals terminal with your car ready. Share your flight details when booking and we handle everything.',
    },
    {
        id: 'faq-2',
        title: 'Can I drive in the Marrakech medina?',
        content:
            'The medina is mostly closed to car traffic — it\'s a pedestrian zone with narrow alleys. Park outside the medina walls (Bab Agnaou, Bab Doukkala) and explore on foot. Our GPS includes medina parking spots.',
    },
    {
        id: 'faq-3',
        title: 'What is the road to Ouarzazate like?',
        content:
            'The N9 to Ouarzazate (196 km, 3h) crosses the Tizi n\'Tichka pass (2,260m) through the Atlas Mountains. The road is paved but winding with stunning views. Drive during daylight and take breaks at viewpoints.',
    },
    {
        id: 'faq-4',
        title: 'Do I need a 4x4 for the Atlas Mountains?',
        content:
            'For the main highway to Ouarzazate, a standard car is fine. For off-road Atlas villages, Ait Bougmez valley, or desert pistes, we recommend the Dacia Duster. Ask us for route-specific advice.',
    },
    {
        id: 'faq-5',
        title: 'What are the highway tolls from Marrakech?',
        content:
            'The autoroute from Marrakech to Casablanca (A7) costs approximately 120 MAD (~€11). Marrakech to Agadir (A7) costs about 90 MAD (~€8). Keep cash ready for toll booths.',
    },
    {
        id: 'faq-6',
        title: 'Where should I park in Marrakech?',
        content:
            'Use the guarded parking at Place du 16 Novembre (near Jemaa el-Fna), or the underground parking at Bab Agnaou. Most riads and hotels outside the medina offer parking. Expect to pay 20-30 MAD for guarded lots.',
    },
    {
        id: 'faq-7',
        title: 'Can I drive from Marrakech to the Sahara Desert?',
        content:
            'Yes! The route via Ouarzazate to Merzouga (560 km, ~8h) is a popular road trip. We recommend splitting it over 2 days with a stop in Ouarzazate or Ait Ben Haddou. The road is paved all the way.',
    },
    {
        id: 'faq-8',
        title: 'Is insurance included with Marrakech car rentals?',
        content:
            'Yes, comprehensive insurance is included — covering third-party liability, collision damage waiver (CDW), and theft protection. Perfect for mountain passes and long-distance road trips.',
    },
];

export default function MarrakechPage() {
    const features = [
        {
            icon: Plane,
            title: 'Menara Airport Pickup',
            description: 'Free delivery to Marrakech Menara Airport (RAK)',
        },
        {
            icon: Mountain,
            title: 'Mountain Ready',
            description: 'Vehicles suited for Atlas Mountain and desert roads',
        },
        {
            icon: Shield,
            title: 'Full Insurance',
            description: 'Comprehensive insurance included — mountains and desert with peace of mind',
        },
        {
            icon: Car,
            title: 'Explorer Fleet',
            description: 'SUVs and 4x4s available for Atlas and Sahara adventures',
        },
    ];

    const popularDestinations = [
        { name: 'Ouarzazate', distance: '196 km', time: '3h', href: '' },
        { name: 'Essaouira', distance: '175 km', time: '2h 30 min', href: '/car-rental-essaouira' },
        { name: 'Agadir', distance: '254 km', time: '3h', href: '/car-rental-agadir' },
        { name: 'Atlas Mountains', distance: '60 km', time: '1h', href: '' },
        { name: 'Ait Benhaddou', distance: '184 km', time: '3h', href: '' },
        { name: 'Casablanca', distance: '239 km', time: '2h 30 min', href: '/car-rental-casablanca' },
    ];

    const drivingTips = [
        {
            icon: Info,
            title: 'Menara Airport Navigation',
            description: 'The airport is 6 km from the medina. Take Avenue de Menara toward the city center. Traffic can be heavy around Jemaa el-Fna — use the ring road for faster access to other areas.',
        },
        {
            icon: Navigation,
            title: 'Medina Driving Warning',
            description: 'Do NOT attempt to drive into the medina — streets are too narrow for cars. Park at designated lots outside the walls (Bab Doukkala, Bab Agnaou, Place du 16 Novembre).',
        },
        {
            icon: Compass,
            title: 'Highway to Ouarzazate',
            description: 'The N9 crosses the Atlas via Tizi n\'Tichka pass (2,260m). Fuel up before leaving Marrakech. The road has hairpin turns — drive slowly and use honk on blind curves.',
        },
        {
            icon: MapPin,
            title: 'City Ring Road',
            description: 'Use the ring road (rocade) to avoid city center traffic. It connects the airport, Guéliz, Hivernage, and routes to Casablanca, Essaouira, and the Atlas.',
        },
    ];

    const popularRoutes = [
        {
            name: 'Marrakech → Ouarzazate (Desert Gateway)',
            description: 'Cross the majestic Atlas Mountains via Tizi n\'Tichka pass. Stop at Ait Ben Haddou kasbah, a UNESCO World Heritage Site.',
            distance: '196 km',
            time: '3h',
        },
        {
            name: 'Marrakech → Ait Ben Haddou (Day Trip)',
            description: 'Visit the famous kasbah used in Gladiator and Game of Thrones. The road through the Atlas is one of Morocco\'s most scenic drives.',
            distance: '184 km',
            time: '3h',
        },
        {
            name: 'Marrakech → Atlas Mountains (Day Trip)',
            description: 'Drive to Imlil or Ourika Valley for Berber villages, waterfalls, and mountain panoramas. Just 1 hour from the city.',
            distance: '60 km',
            time: '1h',
        },
    ];

    const crossLinkCities = [
        { name: 'Agadir', href: '/car-rental-agadir', description: 'Sunny seaside resort with beaches and surf' },
        { name: 'Essaouira', href: '/car-rental-essaouira', description: 'UNESCO medina, kitesurfing and Atlantic charm' },
        { name: 'Casablanca', href: '/car-rental-casablanca', description: 'Economic hub and Hassan II Mosque' },
        { name: 'Taghazout', href: '/car-rental-taghazout', description: 'Morocco\'s surf capital and yoga retreats' },
    ];

    return (
        <>
            <Head>
                <title>
                    Car Rental Marrakech | Rent a Car in Marrakech - Aguinane Cars
                </title>
                <meta
                    name="description"
                    content="Rent a car in Marrakech from €20/day. Free delivery to Menara Airport. Book your rental car in Marrakech with Aguinane Cars - best prices guaranteed. Car rental in Marrakech, Morocco."
                />
                <meta
                    name="keywords"
                    content="location voiture marrakech, car rental marrakech, rent a car marrakech, marrakech airport car hire, location auto marrakech, voiture marrakech pas cher, marrakech menara airport, تأجير سيارات مراكش, louer voiture marrakech, aguinane cars marrakech"
                />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="Car Rental Marrakech | Rent a Car - Aguinane Cars"
                />
                <meta
                    property="og:description"
                    content="Rent a car in Marrakech from €20/day. Free airport delivery. 24/7 service."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://aguinanecars.com/car-rental-marrakech"
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
                    content="Car Rental Marrakech - Aguinane Cars"
                />
                <meta
                    name="twitter:description"
                    content="Best car rental service in Marrakech. From €20/day."
                />
                <meta
                    name="twitter:image"
                    content="https://aguinanecars.com/bg-hero.webp"
                />

                {/* Additional SEO */}
                <link
                    rel="canonical"
                    href="https://aguinanecars.com/car-rental-marrakech"
                />
                <meta name="robots" content="index, follow" />
                <meta name="geo.region" content="MA-MAR" />
                <meta name="geo.placename" content="Marrakech" />
                <meta name="geo.position" content="31.6295;-7.9811" />
                <meta name="ICBM" content="31.6295, -7.9811" />

                {/* Hreflang for multi-language */}
                <link
                    rel="alternate"
                    hrefLang="fr"
                    href="https://aguinanecars.com/car-rental-marrakech"
                />
                <link
                    rel="alternate"
                    hrefLang="en"
                    href="https://aguinanecars.com/car-rental-marrakech"
                />
                <link
                    rel="alternate"
                    hrefLang="x-default"
                    href="https://aguinanecars.com/car-rental-marrakech"
                />

            </Head>

            {/* LocalBusiness Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'AutoRental',
                        name: 'Aguinane Cars - Marrakech',
                        description:
                            'Location de voiture à Marrakech. Car rental in Marrakech with airport pickup at Menara Airport.',
                        url: 'https://aguinanecars.com/car-rental-marrakech',
                        logo: 'https://aguinanecars.com/logo.png',
                        image: 'https://aguinanecars.com/bg-hero.webp',
                        priceRange: '€€',
                        telephone: '+212661542175',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: 'Marrakech Menara Airport',
                            addressLocality: 'Marrakech',
                            addressRegion: 'Marrakech-Safi',
                            postalCode: '40000',
                            addressCountry: 'MA',
                        },
                        geo: {
                            '@type': 'GeoCoordinates',
                            latitude: 31.6295,
                            longitude: -7.9811,
                        },
                        areaServed: [
                            { '@type': 'City', name: 'Marrakech' },
                            { '@type': 'City', name: 'Ouarzazate' },
                            { '@type': 'City', name: 'Essaouira' },
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
                            ratingValue: '4.8',
                            reviewCount: '720',
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
                            <span>Marrakech, Morocco</span>
                        </div>

                        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
                            Car Rental
                            <span className="block text-primary">in Marrakech</span>
                        </h1>

                        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
                            Rent a car in Marrakech from{' '}
                            <span className="font-bold text-primary">€20/day</span>.
                            Free delivery to Menara Airport.
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
                            Why Choose Aguinane Cars in Marrakech?
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
                            Popular Destinations from Marrakech
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
                            Driving Tips for Marrakech
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
                            Popular Routes from Marrakech
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
                title="FAQ — Car Rental in Marrakech"
                description="Everything you need to know about renting a car in Marrakech."
            />

            <CtaSection />
            <Contact />
            <Footer />
        </>
    );
}
