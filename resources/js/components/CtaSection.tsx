import { Link } from '@inertiajs/react';
export function CtaSection() {
    return (
        <section className="relative my-4 mb-10 px-4">
            <div
                className="relative mx-auto max-w-6xl overflow-hidden rounded-full bg-cover bg-fixed bg-center p-12 md:p-20"
                style={{
                    backgroundImage: `url(/cta-bg.webp)`,
                }}
            >
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 flex flex-col items-center text-center">
                    <h5 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                        Ready to Hit the Road?
                    </h5>
                    <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
                        Book your perfect car today and experience hassle-free
                        travel with unbeatable rates.
                    </p>
                    <Link
                        href={'/our-vehicles'}
                        prefetch
                        className="gap-3 text-center flex justify-center items-center rounded-full bg-primary p-2 text-white min-h-16 min-w-52"
                    >
                        Book Your Car Now
                    </Link>
                </div>
            </div>
        </section>
    );
}
