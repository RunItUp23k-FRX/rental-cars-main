import { TestimonialsColumn } from '@/components/testimonials-columns';

const testimonials = [
    {
        text: 'Absolutely impressed with the quality and performance! Excellent customer service and a truly reliable vehicle. Highly recommended!',
        name: 'Boukhou Iman',
        period: '5 months ago',
    },
    {
        text: "I had a great experience with your car rental service! The staff was helpful, the car was clean and in perfect condition, and the process was quick and easy. I'll definitely rent again!",
        name: 'Brahim Baklil',
        period: '3 months ago',
    },
    {
        text: "Hands down the best car rental experience I've ever had! The vehicles are clean, modern, and super reliable. The staff was friendly and efficient, and everything went smoothly from start to finish.",
        name: 'Nouaman Nouaman',
        period: '5 months ago',
    },
    {
        text: 'I definitely recommend Aguinane Cars, smooth service, no hassle. Very friendly. Hope to see you again soon.',
        name: 'Amina Flilou',
        period: 'a month ago',
    },
    {
        text: 'I recently rented a car from this agency, and the experience was excellent! The car was clean, well-maintained, and the service was professional and efficient. Highly recommend for anyone looking for a hassle-free rental.',
        name: 'Aabir Bifri',
        period: '3 weeks ago',
    },
    {
        text: 'Amazing rental company providing top notch quality cars. Cars have 0 issues drive perfect and service is amazing.',
        name: 'Akram Sooka',
        period: '2 months ago',
    },
    {
        text: 'Great service, thanks and see you again.',
        name: 'Takfarinas Hassan',
        period: '5 months ago',
    },
    {
        text: 'My trip with Aguinane Cars was really amazing the car was so comfy and the company owner was so kind and helpful.',
        name: 'Hind Achadmi',
        period: 'a month ago',
    },
    {
        text: 'Great experience! Was able to rent a car for one way and arrange pick up. Perfect!',
        name: 'Misha Lyalin',
        period: '6 months ago',
    },
    {
        text: 'Thank you Aguinane Cars for this service and the new cars given to me clean.',
        name: 'Haitham Aron',
        period: '5 months ago',
    },
    {
        text: 'Top service top cars as always.',
        name: 'Hicham Zazi',
        period: '5 months ago',
    },
    {
        text: 'I rented a Clio 5 (2025) from Aguinane Cars. The vehicle is very clean and well-maintained. The owner is accommodating and kind. Unbeatable price.',
        name: 'Bil Tig',
        period: '2 months ago',
    },
    {
        text: 'Excellent service! I rented a car for 15 days and the experience was perfect! Upon my arrival, the vehicle was ready, clean, and in excellent condition.',
        name: 'Rikia Bel',
        period: '2 months ago',
    },
    {
        text: 'My experience with you was wonderful! The car was clean and in excellent condition, and the service was respectful and very quick. I will deal with you again next time.',
        name: 'Hassan Ricardo',
        period: '3 weeks ago',
    },
    {
        text: 'Excellent rental experience! The vehicle was clean, well-maintained, and as described. The rental company was punctual, professional, and very responsive to my messages.',
        name: 'Basma Idjama',
        period: '5 months ago',
    },
    {
        text: 'Thank you for your welcome and your professionalism. Everything went very well, I will come back with pleasure next time.',
        name: 'Ibtissam Idjama',
        period: 'a month ago',
    },
    {
        text: 'I am very satisfied with the car rental! The vehicle was clean and in good condition, and the customer service was very friendly.',
        name: 'Lahcen Ait Tiga',
        period: 'a month ago',
    },
    {
        text: 'Nice car and really good service.',
        name: 'Bahim Bahim',
        period: '5 months ago',
    },
    {
        text: 'I recommend going there with your eyes closed. Very clean new cars. Very welcoming staff!',
        name: 'Sanaa Yacoub',
        period: '3 months ago',
    },
    {
        text: 'Excellent service with a magnificent staff, really friendly. I highly recommend you.',
        name: 'Otmane Bendrrouche',
        period: '5 months ago',
    },
    {
        text: 'Good service, very responsive, clean car. I recommend.',
        name: 'Bibox',
        period: '5 months ago',
    },
    {
        text: 'Service mashallah, trust and professionalism at Aguinane Cars.',
        name: 'Jamal Aissa',
        period: '3 months ago',
    },
    {
        text: 'Good service and reliability of the equipment rented.',
        name: 'Lahcen Maarouf',
        period: '7 months ago',
    },
];

const firstColumn = testimonials.slice(0, 8);
const secondColumn = testimonials.slice(8, 16);
const thirdColumn = testimonials.slice(16, 23);

export default function Testimonials() {
    return (
        <section className="place-content-center">
            <div className="mx-auto w-full max-w-6xl space-y-8 p-4">
                <div className="mx-auto mb-4 max-w-3xl text-center">
                    <h4 className="mb-4 text-4xl font-bold text-balance text-foreground md:text-5xl lg:text-6xl">
                        What Our Customers Say
                    </h4>
                    <p className="mx-auto max-w-2xl text-base text-balance text-muted-foreground md:text-lg">
                        Don't just take our word for it. See what our satisfied
                        customers have to say about their rental experience.
                    </p>
                </div>

                <div className="mt-4 flex max-h-[740px] justify-center gap-6 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
                    <TestimonialsColumn
                        duration={80} // Increased from 45
                        testimonials={firstColumn}
                    />
                    <TestimonialsColumn
                        className="hidden md:block"
                        duration={100}
                        testimonials={secondColumn}
                    />
                    <TestimonialsColumn
                        className="hidden lg:block"
                        duration={110}
                        testimonials={thirdColumn}
                    />
                </div>
            </div>
        </section>
    );
}
