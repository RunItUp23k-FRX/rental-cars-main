import Lenis from 'lenis';
import { useEffect } from 'react';

export default function LenisScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            prevent: (node) => {
                return (
                    node.classList.contains('prevent-scroll') ||
                    node.closest('[role="dialog"]') !== null ||
                    node.closest('[data-radix-scroll-area-viewport]') !== null
                );
            },
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
