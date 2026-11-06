import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import { AlertCircle, Car, FileText, Shield, Users } from 'lucide-react';

const TermsCompo = () => {
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
        <div className="flex w-full items-center justify-center">
            <div className="grid grid-cols-1 py-12 md:max-w-6xl md:grid-cols-2">
                {terms.map((term, index) => {
                    const Icon = term.icon || FileText;
                    return (
                        <div
                            key={index}
                            className={`relative flex flex-col border border-muted-foreground/20 bg-card p-12 transition-all ${index === 0 ? 'col-span-1 md:col-span-2' : ''}`}
                        >
                            <GridPattern
                                width={20}
                                height={20}
                                x={-1}
                                y={-1}
                                className={cn(
                                    'mask-[linear-gradient(to_bottom_left,white,2%,transparent)]',
                                )}
                            />
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-foreground">
                                {term.title}
                            </h3>
                            <p className="leading-relaxed text-muted-foreground">
                                {term.content}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TermsCompo;
