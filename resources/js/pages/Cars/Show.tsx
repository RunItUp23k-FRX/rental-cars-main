import ReservationDialog from '@/components/reservation-dialog';
import { Contact } from '@/components/contact';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import LenisScroll from '@/components/LenisScroll';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from '@/types/cars-types';
import { Head, Link } from '@inertiajs/react';
import {
    Calendar,
    Car as CarIcon,
    CheckCircle,
    Fuel,
    MessageCircle,
    Settings,
    Users,
    Wind,
} from 'lucide-react';
import { useState } from 'react';

interface Props {
    car: Car;
    relatedCars: Car[];
}

export default function CarShow({ car, relatedCars }: Props) {
    const [isReservationOpen, setIsReservationOpen] = useState(false);

    const getTransmissionLabel = (transmission: string) =>
        transmission === 'automatic' ? 'Automatic' : 'Manual';

    const getFuelTypeLabel = (fuelType: string) => {
        const labels: Record<string, string> = {
            gasoline: 'Gasoline',
            diesel: 'Diesel',
            electric: 'Electric',
            hybrid: 'Hybrid',
        };
        return labels[fuelType] || fuelType;
    };

    const handleWhatsAppBooking = () => {
        const phoneNumber = '212661542175';
        const message = `Hi! I'm interested in booking the following car:

🚗 *${car.name}*
🏢 Brand: ${car.marque?.nom_marque}
💰 Price: €${car.price}/day

📋 Details:
• ${car.seats} seats
• ${getTransmissionLabel(car.transmission)}
• ${getFuelTypeLabel(car.fuel_type)}
${car.ac ? '• Air Conditioning\n' : ''}
Could you please help me with the booking process?`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    const brandName = car.marque?.nom_marque || '';
    const fullName = `${brandName} ${car.name}`.trim();
    const canonicalUrl = `https://aguinanecars.com/cars/${car.slug}`;
    const imageUrl = `https://aguinanecars.com/uploads/images/${car.img_path}`;

    return (
        <>
            <Head>
                <title>{fullName} | Location de Voiture - Aguinane Cars</title>
                <meta
                    name="description"
                    content={`Louez la ${fullName} à partir de ${car.price}€/jour. ${car.seats} places, ${getTransmissionLabel(car.transmission).toLowerCase()}, ${getFuelTypeLabel(car.fuel_type).toLowerCase()}${car.ac ? ', climatisation' : ''}. Réservez maintenant avec Aguinane Cars.`}
                />
                <meta
                    name="keywords"
                    content={`location ${car.name}, louer ${fullName}, ${brandName} rental morocco, rent ${car.name} agadir, aguinane cars`}
                />

                {/* Open Graph */}
                <meta property="og:title" content={`${fullName} - Location Aguinane Cars`} />
                <meta
                    property="og:description"
                    content={`Louez la ${fullName} à partir de ${car.price}€/jour. Réservez maintenant!`}
                />
                <meta property="og:type" content="product" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:locale" content="fr_MA" />
                <meta property="og:locale:alternate" content="en_US" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${fullName} - Aguinane Cars`} />
                <meta
                    name="twitter:description"
                    content={`Louez la ${fullName} à partir de ${car.price}€/jour.`}
                />
                <meta name="twitter:image" content={imageUrl} />

                {/* SEO */}
                <link rel="canonical" href={canonicalUrl} />
                <meta name="robots" content="index, follow" />

                {/* Hreflang */}
                <link rel="alternate" hrefLang="fr" href={canonicalUrl} />
                <link rel="alternate" hrefLang="en" href={canonicalUrl} />
                <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
            </Head>

            {/* JSON-LD: Product + Vehicle — rendered outside Head to avoid Inertia Object.keys error */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': ['Product', 'Vehicle'],
                        name: fullName,
                        image: imageUrl,
                        description: `${fullName} - ${car.seats} seats, ${getTransmissionLabel(car.transmission)}, ${getFuelTypeLabel(car.fuel_type)}${car.ac ? ', Air Conditioning' : ''}`,
                        brand: {
                            '@type': 'Brand',
                            name: brandName,
                        },
                        vehicleTransmission: car.transmission === 'automatic' ? 'AutomaticTransmission' : 'ManualTransmission',
                        fuelType: car.fuel_type,
                        seatingCapacity: car.seats,
                        offers: {
                            '@type': 'Offer',
                            price: car.price,
                            priceCurrency: 'EUR',
                            availability: car.status === 'available' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
                            seller: {
                                '@type': 'AutoRental',
                                name: 'Aguinane Cars',
                                url: 'https://aguinanecars.com',
                            },
                        },
                    }),
                }}
            />

            <LenisScroll />
            <ReservationDialog isOpen={isReservationOpen} setIsOpen={setIsReservationOpen} car={car} />

            {/* Hero Section */}
            <section className="flex min-h-[70vh] items-center justify-center p-4">
                <div
                    className="relative flex h-full min-h-[60vh] w-full flex-col items-center justify-between overflow-hidden rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(/uploads/images/${car.img_path})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                    <Header />

                    <div className="relative z-10 mx-auto max-w-5xl px-4 pb-16 text-center">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm text-white backdrop-blur-sm">
                            <CarIcon className="size-4" />
                            <span>{brandName}</span>
                        </div>

                        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
                            {car.name}
                        </h1>

                        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
                            Starting from{' '}
                            <span className="font-bold text-primary">{car.price}€/day</span>
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button
                                size="lg"
                                className="gap-2 px-8"
                                onClick={() => setIsReservationOpen(true)}
                            >
                                <Calendar className="size-5" />
                                Book Now
                            </Button>
                            <Button
                                size="lg"
                                onClick={handleWhatsAppBooking}
                                className="gap-2 bg-[#25D366] px-8 text-white hover:bg-[#20BD5A]"
                            >
                                <MessageCircle className="size-5" />
                                Via WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Car Details Section */}
            <section className="py-16">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Image */}
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src={`/uploads/images/${car.img_path}`}
                                alt={fullName}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Details */}
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm text-muted-foreground">{brandName}</p>
                                <h2 className="text-3xl font-bold">{car.name}</h2>
                                {car.status === 'available' && (
                                    <Badge className="mt-2 bg-green-500">Available</Badge>
                                )}
                            </div>

                            {/* Specs Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <Card>
                                    <CardContent className="flex items-center gap-3 p-4">
                                        <Users className="size-5 text-primary" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Seats</p>
                                            <p className="font-semibold">{car.seats} places</p>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="flex items-center gap-3 p-4">
                                        <Settings className="size-5 text-primary" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Transmission</p>
                                            <p className="font-semibold">{getTransmissionLabel(car.transmission)}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="flex items-center gap-3 p-4">
                                        <Fuel className="size-5 text-primary" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Fuel</p>
                                            <p className="font-semibold">{getFuelTypeLabel(car.fuel_type)}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                                {car.ac && (
                                    <Card>
                                        <CardContent className="flex items-center gap-3 p-4">
                                            <Wind className="size-5 text-primary" />
                                            <div>
                                                <p className="text-sm text-muted-foreground">Climate</p>
                                                <p className="font-semibold">Air Conditioning</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}
                            </div>

                            {/* Price & Booking */}
                            <div className="rounded-xl border bg-card p-6">
                                <div className="mb-4 flex items-end gap-2">
                                    <span className="text-4xl font-bold">{car.price}€</span>
                                    <span className="mb-1 text-muted-foreground">/ day</span>
                                </div>

                                <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="size-4 text-green-500" />
                                        <span>Unlimited Mileage</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="size-4 text-green-500" />
                                        <span>Insurance Included</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="size-4 text-green-500" />
                                        <span>No Deposit</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="size-4 text-green-500" />
                                        <span>Free Airport Delivery</span>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Button
                                        className="flex-1 gap-2"
                                        size="lg"
                                        onClick={() => setIsReservationOpen(true)}
                                    >
                                        <Calendar className="size-4" />
                                        Book
                                    </Button>
                                    <Button
                                        className="flex-1 gap-2 bg-[#25D366] text-white hover:bg-[#20BD5A]"
                                        size="lg"
                                        onClick={handleWhatsAppBooking}
                                    >
                                        <MessageCircle className="size-4" />
                                        WhatsApp
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Vehicles */}
            {relatedCars.length > 0 && (
                <section className="bg-muted/30 py-16">
                    <div className="mx-auto max-w-6xl px-4">
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-bold">Similar Vehicles</h2>
                            <p className="mt-2 text-muted-foreground">
                                Discover other vehicles that might interest you
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {relatedCars.map((related) => (
                                <Link
                                    key={related.id}
                                    href={`/cars/${related.slug}`}
                                    className="group"
                                >
                                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                                        <div className="relative h-40 overflow-hidden">
                                            <img
                                                src={`/uploads/images/${related.img_path}`}
                                                alt={related.name}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <CardContent className="p-4">
                                            <p className="text-xs text-muted-foreground">
                                                {related.marque?.nom_marque}
                                            </p>
                                            <h3 className="font-semibold">{related.name}</h3>
                                            <div className="mt-2 flex items-center justify-between">
                                                <span className="text-lg font-bold">{related.price}€<span className="text-sm font-normal text-muted-foreground">/jour</span></span>
                                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                    <Users className="size-3" />
                                                    {related.seats}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CtaSection />
            <Contact />
            <Footer />
        </>
    );
}
