import { Button } from '@/components/ui/button';
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from '@/components/ui/empty';
import { Head, Link } from '@inertiajs/react';
import { Compass, Home } from 'lucide-react';

export default function NotFoundPage() {
    return (
        <>
            <Head title="404" />
            <main>
                <div className="flex w-full items-center justify-center">
                    <div className="flex h-screen items-center border-x">
                        <div>
                            <div className="absolute inset-x-0 h-px bg-border" />
                            <Empty>
                                <EmptyHeader>
                                    <EmptyTitle className="font-mono text-8xl font-black">
                                        404
                                    </EmptyTitle>
                                    <EmptyDescription className="text-nowrap">
                                        The page you're looking for might have
                                        been <br />
                                        moved or doesn't exist.
                                    </EmptyDescription>
                                </EmptyHeader>
                                <EmptyContent>
                                    <div className="flex gap-2">
                                        <Button asChild>
                                            <Link prefetch href="/">
                                                <Home /> Go Home
                                            </Link>
                                        </Button>

                                        <Button asChild variant="outline">
                                            <a href="/our-vehicls">
                                                <Compass /> Explore
                                            </a>
                                        </Button>
                                    </div>
                                </EmptyContent>
                            </Empty>
                            <div className="absolute inset-x-0 h-px bg-border" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
