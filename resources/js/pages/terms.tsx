import { Contact } from '@/components/contact';
import { CtaSection } from '@/components/CtaSection';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import LenisScroll from '@/components/LenisScroll';
import TermsCompo from '@/components/terms';
import { Head } from '@inertiajs/react';
import { AlertCircle, Car, FileText, Shield, Users } from 'lucide-react';

const Terms = () => {
    const terms: { title: string; content: string; icon?: any }[] = [
        {
            title: 'Reservation',
            icon: FileText,
            content:
                'When you make a reservation through our booking engine, Aguinane Cars will confirm your booking via email within 24 hours, providing you with a voucher containing all necessary details. We only use your email address to send the voucher and your phone number for necessary communication regarding your booking. If you need to modify your reservation, you must contact Aguinane Cars via email with precise details of the requested changes. While we strive to accommodate changes, we do not guarantee that all modifications can be processed. By using this booking system, you agree not to make speculative or false reservations, use the system to research pricing or rental providers, or use the name "Aguinane Cars" for commercial purposes without prior written permission.',
        },
        {
            title: 'Booking Cancellation',
            icon: AlertCircle,
            content:
                'Reservations must be canceled at least 48 hours before the scheduled pick-up time. If a booking is made less than 48 hours before pick-up, any prepayment will not be refunded in case of cancellation.',
        },
        {
            title: 'Customer Requirements',
            icon: Users,
            content:
                'All children, regardless of age, are considered passengers and must have their own seat. The number of passengers must not exceed the seating capacity of the vehicle. The driver has the right to refuse service if extra passengers are present. Customers must provide a valid mobile phone number and remain reachable at arrival time. Smoking and drinking are prohibited inside the vehicle. In case of violation, the driver has the right to terminate the service.',
        },
        {
            title: 'Pick-up & Drop-off',
            icon: Car,
            content:
                "For airport pick-ups, it is essential to provide the correct flight number and arrival time. You can update this information online or by phone. If not available at the time of booking, you must inform us at least 2 days before departure via email or phone. The driver will wait at the designated pick-up location holding a sign with the customer's last name.",
        },
        {
            title: 'Privacy Statement',
            icon: Shield,
            content:
                'Aguinane Cars is committed to protecting your personal data. We only collect the essential information required to fulfill our services. Customers are informed about how their data is used and can choose whether their details are included in marketing campaigns. All personal data is strictly protected, accessible only to employees who need it for business purposes. Our staff and business partners adhere to strict confidentiality policies.',
        },
        {
            title: 'Complaints',
            icon: AlertCircle,
            content:
                'All complaints must be submitted in writing within 7 days after the drop-off date. Complaints received after this period cannot be processed.',
        },
        {
            title: 'Included in Rental Price',
            icon: FileText,
            content:
                'The rental price includes customer support, additional driver, and child seat at no extra charge.',
        },
        {
            title: 'Legal Driving Age',
            icon: Users,
            content:
                'To rent a vehicle, the driver must be at least 21 years old.',
        },
        {
            title: 'Required Documents',
            icon: FileText,
            content:
                "To rent a vehicle from Aguinane Cars, you must provide a valid driver's license and passport.",
        },
        {
            title: 'Accident & Damage Procedures',
            icon: AlertCircle,
            content:
                'In the event of an accident or theft, the customer must immediately inform Aguinane Cars and the police, follow police and company instructions, and remain at the accident scene until authorities arrive, unless assisting others in need.',
        },
        {
            title: 'Border Crossing',
            icon: Car,
            content:
                'Traveling outside Morocco with a rented vehicle is not permitted.',
        },
        {
            title: 'Deposit Policy',
            icon: Shield,
            content: 'No deposit is required when renting from Aguinane Cars.',
        },
        {
            title: 'Cleanliness Policy',
            icon: Car,
            content:
                "If the car's interior is extremely dirty, a cleaning fee will be charged upon return. Parking and traffic fines are the customer's responsibility. Loss of keys or vehicle documentation will result in a charge of €500.",
        },
    ];

    return (
        <>
            <Head>
                <title>
                    Terms & Conditions - Aguinane Cars | Car Rental Terms
                    Morocco
                </title>
                <meta
                    name="description"
                    content="Read Aguinane Cars terms and conditions for car rental in Morocco. Learn about our booking policy, cancellation terms, requirements, and rental agreements in Agadir, Marrakech, and Imsouane."
                />
                <meta
                    name="keywords"
                    content="car rental terms Morocco, Aguinane Cars terms, rental conditions Agadir, car hire policy Morocco, booking terms Marrakech, rental agreement Imsouane, cancellation policy Morocco, car rental requirements"
                />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="Terms & Conditions - Aguinane Cars Morocco"
                />
                <meta
                    property="og:description"
                    content="Complete terms and conditions for car rental services with Aguinane Cars. Transparent policies for booking, cancellation, and vehicle rental in Morocco."
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://aguinanecars.com/terms"
                />
                <meta property="og:image" content="https://aguinanecars.com/bg-terms.webp" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Terms & Conditions - Aguinane Cars"
                />
                <meta
                    name="twitter:description"
                    content="Read our terms and conditions for car rental services in Morocco. Clear policies and transparent agreements."
                />

                {/* Additional SEO */}
                <link rel="canonical" href="https://aguinanecars.com/terms" />
                <meta name="robots" content="index, follow" />
            </Head>

            <LenisScroll />

            {/* Hero Section */}
            <section
                id="terms-hero"
                className="flex h-screen min-h-screen items-center justify-center p-4"
            >
                <div
                    className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-lg bg-cover bg-center md:bg-center"
                    style={{
                        backgroundImage: `url(/bg-terms.webp)`,
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    <Header />

                    <div className="relative z-10 flex w-full flex-col px-4 pb-20">
                        <h1 className="text-center text-5xl leading-tight font-bold text-white md:text-left md:text-7xl">
                            Terms & Conditions
                        </h1>
                        <p className="mt-4 max-w-2xl text-center text-lg font-medium text-white/90 md:text-left md:text-xl">
                            Please read our terms and conditions carefully
                            before booking your vehicle
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="relative z-50 -mt-24 w-full px-4">
                <div className="mx-auto max-w-[360px] rounded-lg bg-background pt-8 text-center md:max-w-6xl">
                    <h2 className="text-4xl font-bold text-foreground md:text-5xl">
                        Our Commitment to You
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                        Aguinane Cars recognizes and values the importance of
                        responsible handling of personal data collected on this
                        website. We take appropriate measures to keep your
                        information secure and ensure it is used solely for
                        legitimate business purposes.
                    </p>
                </div>
            </section>

            {/* Terms Grid */}
            <section className="bg-muted/30 px-4 py-12">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-foreground md:text-5xl">
                            Rental Terms & Policies
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Everything you need to know about renting with us
                        </p>
                    </div>
                    <TermsCompo />
                </div>
            </section>
            {/* Last Updated */}
            <section className="bg-background px-4 py-12">
                <div className="mx-auto max-w-7xl text-center">
                    <p className="text-sm text-muted-foreground">
                        Last updated:{' '}
                        {new Date().toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </p>
                </div>
            </section>

            <CtaSection />
            <Contact />
            <Footer />
        </>
    );
};

export default Terms;
