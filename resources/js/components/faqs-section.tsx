import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from '@inertiajs/react';

interface FaqQuestion {
    id: string;
    title: string;
    content: string;
}

interface FaqsSectionProps {
    questions?: FaqQuestion[];
    title?: string;
    description?: string;
}

export function FaqsSection({ questions: customQuestions, title, description }: FaqsSectionProps = {}) {
    const faqItems = customQuestions || defaultQuestions;
    const heading = title || 'Frequently Asked Questions';
    const subtitle = description || "Got questions? We've got answers. Find everything you need to know about renting a car with Aguinane Cars.";

    return (
        <section className="place-content-center">
            <div className="mx-auto w-full max-w-6xl space-y-8 p-4">
                {/* Header */}
                <div className="mx-auto mb-4 max-w-3xl text-center">
                    <h5 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                        {heading}
                    </h5>
                    <p className="mx-auto max-w-2xl text-base text-balance text-muted-foreground md:text-lg">
                        {subtitle}
                    </p>
                </div>

                {/* Accordion */}
                <Accordion
                    className="w-full -space-y-px rounded-xl bg-card shadow-lg dark:bg-card/50"
                    collapsible
                    defaultValue="item-1"
                    type="single"
                >
                    {faqItems.map((item) => (
                        <AccordionItem
                            className="relative border-x first:rounded-t-xl first:border-t last:rounded-b-xl last:border-b"
                            key={item.id}
                            value={item.id}
                        >
                            <AccordionTrigger className="cursor-pointer px-6 py-5 text-base leading-6 font-semibold hover:no-underline md:text-lg">
                                {item.title}
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Contact Support */}
                <div className="text-center">
                    <p className="text-base text-muted-foreground">
                        Still have questions? Contact our support team
                        <Link
                            className="mx-2 font-semibold text-primary underline-offset-4 hover:underline"
                            href="/contact"
                        >
                            Contact our support team
                        </Link>
                        — we're here to help 24/7.
                    </p>
                </div>
            </div>
        </section>
    );
}

const defaultQuestions = [
    {
        id: 'item-1',
        title: 'What documents do I need to rent a car?',
        content:
            "You need a valid driver's license (held for at least 1 year), a national ID card or passport, and a credit card in the driver's name for the security deposit. International visitors may need an International Driving Permit (IDP) depending on their country of origin.",
    },
    {
        id: 'item-2',
        title: 'What is the minimum age requirement?',
        content:
            'The minimum age to rent a car is 21 years old. Drivers under 25 may be subject to a young driver surcharge. Some premium or larger vehicles may require the driver to be 25 or older.',
    },
    {
        id: 'item-3',
        title: 'Is insurance included in the rental price?',
        content:
            'Yes, basic insurance coverage is included in all our rental prices. This covers third-party liability and collision damage waiver (CDW). Additional coverage options such as personal accident insurance and theft protection are available for extra peace of mind.',
    },
    {
        id: 'item-4',
        title: 'What is your cancellation policy?',
        content:
            'We offer free cancellation up to 24 hours before your scheduled pickup time. Cancellations made within 24 hours of pickup may be subject to a cancellation fee. We recommend reviewing your booking details and canceling early if your plans change.',
    },
    {
        id: 'item-5',
        title: 'What is your fuel policy?',
        content:
            'We operate a full-to-full fuel policy. You receive the car with a full tank and return it with a full tank. If you prefer, we also offer a prepaid fuel option where you pay for a full tank upfront and can return the car empty.',
    },
    {
        id: 'item-6',
        title: 'Can I modify or extend my rental period?',
        content:
            'Yes, you can modify or extend your rental period subject to vehicle availability. Please contact us as soon as possible to make changes. Extensions are charged at the daily rate, and we recommend confirming at least 24 hours before your original return time.',
    },
    {
        id: 'item-7',
        title: 'Do you offer delivery and pickup service?',
        content:
            'Yes! We offer convenient delivery and pickup services to airports, hotels, and other locations in Agadir. Delivery fees may apply depending on the distance. Contact us when booking to arrange delivery to your preferred location.',
    },
    {
        id: 'item-8',
        title: 'What happens if the car breaks down?',
        content:
            'All our rentals include 24/7 roadside assistance. If you experience any mechanical issues, simply call our emergency hotline and we will arrange immediate assistance or provide a replacement vehicle at no extra cost.',
    },
    {
        id: 'item-9',
        title: 'Are there any hidden fees?',
        content:
            'No hidden fees! Our pricing is transparent. The rental price includes basic insurance, unlimited mileage (unless specified), and 24/7 support. Additional costs may include optional extras like GPS, child seats, additional drivers, or fuel if not returned full.',
    },
    {
        id: 'item-10',
        title: 'Can I add an additional driver?',
        content:
            'Yes, you can add additional drivers to your rental. Additional drivers must meet the same age and license requirements as the primary driver and must be present at pickup with their documents. A small daily fee may apply per additional driver.',
    },
];
