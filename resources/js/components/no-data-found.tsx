import { FolderCode } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from '@/components/ui/empty';

export function NoDataFound({
    title,
    description,
    buttonText,
    action,
}: {
    title: string;
    description: string;
    buttonText: string;
    action: () => void;
}) {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <FolderCode />
                </EmptyMedia>
                <EmptyTitle>{title}</EmptyTitle>
                <EmptyDescription>{description}</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <div className="flex">
                    <Button onClick={action}>{buttonText}</Button>
                </div>
            </EmptyContent>
        </Empty>
    );
}
