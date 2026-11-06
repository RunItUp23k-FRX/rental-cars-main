import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

export type Testimonial = {
    text: string;
    name: string;
    period: string;
};

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => (
    <div className={props.className}>
        <motion.div
            animate={{
                translateY: '-50%',
            }}
            className="flex flex-col gap-6 pb-6"
            transition={{
                duration: props.duration || 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
                repeatType: 'loop',
            }}
        >
            {[
                ...new Array(2).fill(0).map((_, index) => (
                    <React.Fragment key={`column-${index}`}>
                        {props.testimonials.map(({ text, name, period }) => (
                            <div
                                className="w-full max-w-xs rounded-3xl border bg-card p-8 dark:bg-card/20"
                                key={`${name}-${index}`}
                            >
                                {/* Star Rating */}
                                <div className="mb-4 flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <div className="text-sm leading-relaxed text-foreground">
                                    {text}
                                </div>

                                {/* Customer Info */}
                                <div className="mt-5 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                        <span className="text-sm font-semibold text-primary">
                                            {name
                                                .split(' ')
                                                .map((n) => n[0])
                                                .join('')
                                                .slice(0, 2)
                                                .toUpperCase()}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="leading-5 font-medium tracking-tight">
                                            {name}
                                        </div>
                                        <div className="text-xs leading-5 tracking-tight text-muted-foreground">
                                            {period}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                )),
            ]}
        </motion.div>
    </div>
);
