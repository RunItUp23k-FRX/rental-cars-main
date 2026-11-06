// resources/js/components/car-card.tsx
import ReservationDialog from '@/components/reservation-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import { Car } from '@/types/cars-types';
import { Calendar, Fuel, MessageCircle, Settings, Users, Wind } from 'lucide-react';
import { useState } from 'react';

interface CarCardProps {
    car: Car;
}

export default function CarCard({ car }: CarCardProps) {
    const [isReservationOpen, setIsReservationOpen] = useState(false);

    const getTransmissionLabel = (transmission: string) => {
        return transmission === 'automatic' ? 'Automatic' : 'Manual';
    };

    const getFuelTypeLabel = (fuelType: string) => {
        const labels: Record<string, string> = {
            gasoline: 'Gasoline',
            diesel: 'Diesel',
            electric: 'Electric',
            hybrid: 'Hybrid',
        };
        return labels[fuelType] || fuelType;
    };

    const handleWhatsAppBooking = () => {
        const phoneNumber = '212661542175'; // Format: country code + number (no + or spaces)
        
        // Create a professional pre-filled message
        const message = `Hi! I'm interested in booking the following car:

🚗 *${car.name}*
🏢 Brand: ${car.marque?.nom_marque}
💰 Price: €${car.price}/day

📋 Details:
• ${car.seats} seats
• ${getTransmissionLabel(car.transmission)}
• ${getFuelTypeLabel(car.fuel_type)}
${car.ac ? '• Air Conditioning\n' : ''}
Could you please help me with the booking process?`;

        // URL encode the message
        const encodedMessage = encodeURIComponent(message);
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <>
            <ReservationDialog
                isOpen={isReservationOpen}
                setIsOpen={setIsReservationOpen}
                car={car}
            />
            <div className="group relative overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-xl">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                        src={`/uploads/images/${car.img_path}`}
                        alt={car.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {car.status === 'available' && (
                        <Badge className="absolute top-3 right-3 bg-green-500">
                            Available
                        </Badge>
                    )}
                </div>

                {/* Content */}
                <div className="space-y-4 p-5">
                    <GridPattern
                        className={cn(
                            'mask-[linear-gradient(to_top_left,white,2%,transparent)]',
                        )}
                        height={20}
                        width={20}
                        x={2}
                    />
                    <div>
                        <p className="text-sm text-muted-foreground">
                            {car.marque?.nom_marque}
                        </p>
                        <h3 className="mt-1 text-xl font-bold">{car.name}</h3>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>{car.seats} seats</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Settings className="h-4 w-4" />
                            <span>
                                {getTransmissionLabel(car.transmission)}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Fuel className="h-4 w-4" />
                            <span>{getFuelTypeLabel(car.fuel_type)}</span>
                        </div>
                        {car.ac && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Wind className="h-4 w-4" />
                                <span>AC</span>
                            </div>
                        )}
                    </div>

                    {/* Price & Buttons */}
                    <div className="space-y-3 border-t pt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-2xl font-bold">€{car.price}</p>
                                <p className="text-sm text-muted-foreground">
                                    per day
                                </p>
                            </div>
                        </div>

                        {/* Dual Action Buttons */}
                        <div className="flex gap-2">
                            <Button
                                onClick={() => setIsReservationOpen(true)}
                                className="flex-1 gap-2"
                                variant="default"
                            >
                                <Calendar className="h-4 w-4" />
                                Book Now
                            </Button>
                            <Button
                                onClick={handleWhatsAppBooking}
                                className="flex-1 gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white"
                                variant="default"
                            >
                                <MessageCircle className="h-4 w-4" />
                                Via WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}