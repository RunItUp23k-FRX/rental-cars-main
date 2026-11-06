import CarsFiltersAdmin, { FiltersState } from '@/components/car-filters';
import CarForm from '@/components/car-form';
import CarListe from '@/components/car-liste';
import { NoDataFound } from '@/components/no-data-found';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { BreadcrumbItem } from '@/types';
import { Car } from '@/types/cars-types';
import { MarqueData } from '@/types/marques';
import { Head } from '@inertiajs/react';
import { ListFilterPlus, Plus } from 'lucide-react';
import { useMemo, useState } from 'react';
type CarProps = {
    cars: Car[];
    marques: Pick<MarqueData, 'id' | 'nom_marque'>[];
    FiltersState: FiltersState;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard.url(),
    },
    {
        title: 'Liste Vehicles',
        href: '#',
    },
];

const Index = ({ cars, marques, FiltersState }: CarProps) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isFilters, setIsFilters] = useState(false);

    const [search, setSearch] = useState('');

    const handleAddNew = () => {
        setSelectedCar(null);
        setIsUpdate(false);
        setIsFormOpen(true);
    };

    const handleEdit = (car: Car) => {
        setSelectedCar(car);
        setIsUpdate(true);
        setIsFormOpen(true);
    };

    const filteredCars = useMemo(
        () =>
            cars.filter((car) => {
                return (
                    car.marque.nom_marque
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    car.name.toLowerCase().includes(search.toLowerCase())
                );
            }),
        [search, cars],
    );
    const isNoCars = filteredCars.length === 0;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Liste Cars" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            Vehicles
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Manage your fleet and track availability in
                            real-time
                        </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Input
                        id="name"
                        name="name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Ex: Renault 201, Dacia logan, Skoda etc..."
                    />
                    <Button
                        onClick={() => {
                            setIsFilters(true);
                        }}
                        variant={'outline'}
                    >
                        <ListFilterPlus className="h-4 w-4" />
                        Filters
                    </Button>
                    <Button onClick={handleAddNew}>
                        <Plus className="h-4 w-4" />
                        Add Vehicle
                    </Button>
                </div>
                {isNoCars ? (
                    <NoDataFound
                        buttonText="Add Your First Vehicle"
                        description="Build your fleet by adding vehicles to start managing rentals and tracking availability."
                        title="Your Fleet is Empty"
                        action={handleAddNew}
                    />
                ) : (
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                        {filteredCars.map((car) => (
                            <CarListe
                                key={car.id}
                                car={car}
                                onEdit={handleEdit}
                            />
                        ))}
                    </div>
                )}
            </div>
            <CarForm
                isOpen={isFormOpen}
                setIsOpen={setIsFormOpen}
                isUpdate={isUpdate}
                marques={marques}
                carData={selectedCar}
            />
            <CarsFiltersAdmin
                marques={marques}
                currentFilters={FiltersState}
                isOpen={isFilters}
                setIsOpen={setIsFilters}
            />
        </AppLayout>
    );
};

export default Index;
