import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { MarqueData } from '@/types/marques';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { MarqueDialog } from './marque-dialog';

type Props = {
    data: MarqueData[];
    onDelete: (marque: MarqueData) => void;
};

export function MarqueDataTable({ data, onDelete }: Props) {
    const [isEditing, setIsEditing] = useState(false);
    const [selectedData, setSelectedData] = useState<MarqueData | null>();
    return (
        <>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Brand name</TableHead>
                            <TableHead>Relalted Cars</TableHead>
                            <TableHead>Created By</TableHead>
                            <TableHead>Created At</TableHead>
                            <TableHead>Updated By</TableHead>
                            <TableHead>Updated At</TableHead>
                            <TableHead className="text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.length === 0 ? (
                            <TableRow>
                                <TableCell
                                    colSpan={6}
                                    className="h-24 text-center"
                                >
                                    No Data Found...
                                </TableCell>
                            </TableRow>
                        ) : (
                            data?.map((marque) => (
                                <TableRow key={marque.id}>
                                    <TableCell className="font-medium">
                                        {marque.nom_marque}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {marque.cars_count}
                                    </TableCell>
                                    <TableCell>
                                        {marque.creator?.name || '-'}
                                    </TableCell>
                                    <TableCell>
                                        {format(
                                            new Date(marque.created_at),
                                            'dd MMM yyyy',
                                            { locale: fr },
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {marque.updater?.name || '-'}
                                    </TableCell>
                                    <TableCell>
                                        {format(
                                            new Date(marque.updated_at),
                                            'dd MMM yyyy',
                                            { locale: fr },
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => {
                                                    setSelectedData(marque);
                                                    setIsEditing(true);
                                                }}
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => onDelete(marque)}
                                            >
                                                <Trash2 className="h-4 w-4 text-destructive" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
            <MarqueDialog
                onOpenChange={setIsEditing}
                open={isEditing}
                marque={selectedData}
                isUpdate={true}
            />
        </>
    );
}
