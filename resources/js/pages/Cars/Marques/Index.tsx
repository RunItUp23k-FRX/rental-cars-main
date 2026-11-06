import { DeleteMarqueDialog } from '@/components/delete-marque-dialog';
import { MarqueDataTable } from '@/components/marque-data-table';
import { MarqueDialog } from '@/components/marque-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { MarqueData } from '@/types/marques';
import { Head } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';

type Props = {
    data: MarqueData[];
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard.url(),
    },
    {
        title: 'Brands',
        href: '#',
    },
];

const Index = ({ data }: Props) => {
    console.log(data);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [deletingMarque, setDeletingMarque] = useState<MarqueData | null>(
        null,
    );

    const filteredData = data.filter((marque) =>
        marque.nom_marque.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Marques des Voitures" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            Brands
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Manage Available Car Brands
                        </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Input
                        id="marque"
                        name="nom_marque"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Ex: Renault, Dacia, Skoda etc"
                    />
                    <Button onClick={() => setIsCreateOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add new brand
                    </Button>
                </div>
                <MarqueDataTable
                    data={filteredData}
                    onDelete={setDeletingMarque}
                />

                <MarqueDialog
                    open={isCreateOpen}
                    onOpenChange={setIsCreateOpen}
                    isUpdate={false}
                />

                <DeleteMarqueDialog
                    open={!!deletingMarque}
                    onOpenChange={(open) => !open && setDeletingMarque(null)}
                    marque={deletingMarque}
                />
            </div>
        </AppLayout>
    );
};

export default Index;
