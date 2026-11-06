import { store } from '@/actions/App/Http/Controllers/OrderController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Flash } from '@/types';
import { Car } from '@/types/cars-types';
import { useForm } from '@inertiajs/react';
import { format, parse } from 'date-fns';
import { ar, enUS } from 'date-fns/locale';
import { CalendarIcon, Globe } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

// Translations for English and Arabic
const translations = {
    en: {
        reserve: 'Reserve',
        perDay: '/day',
        yourInfo: 'Your Information',
        fullName: 'Full Name',
        fullNamePlaceholder: 'Your full name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        phone: 'Phone',
        phonePlaceholder: '+212 6XX XXX XXX',
        rentalDates: 'Rental Dates',
        pickupDate: 'Pickup Date',
        returnDate: 'Return Date',
        pickDate: 'Pick a date',
        locations: 'Locations (Optional)',
        pickupLocation: 'Pickup Location',
        pickupLocationPlaceholder: 'e.g., Agadir Airport',
        dropLocation: 'Drop-off Location',
        dropLocationPlaceholder: 'e.g., Marrakech Airport',
        notes: 'Notes (optional)',
        notesPlaceholder: 'Additional information...',
        duration: 'Duration',
        days: 'day(s)',
        pricePerDay: 'Price per day',
        total: 'Total',
        cancel: 'Cancel',
        confirm: 'Confirm Reservation',
        processing: 'Processing...',
    },
    ar: {
        reserve: 'حجز',
        perDay: '/يوم',
        yourInfo: 'معلوماتك الشخصية',
        fullName: 'الاسم الكامل',
        fullNamePlaceholder: 'اسمك الكامل',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'example@email.com',
        phone: 'رقم الهاتف',
        phonePlaceholder: '+212 6XX XXX XXX',
        rentalDates: 'تواريخ الإيجار',
        pickupDate: 'تاريخ الاستلام',
        returnDate: 'تاريخ الإرجاع',
        pickDate: 'اختر تاريخ',
        locations: 'المواقع (اختياري)',
        pickupLocation: 'موقع الاستلام',
        pickupLocationPlaceholder: 'مثال: مطار أكادير',
        dropLocation: 'موقع التسليم',
        dropLocationPlaceholder: 'مثال: مطار مراكش',
        notes: 'ملاحظات (اختياري)',
        notesPlaceholder: 'معلومات إضافية...',
        duration: 'المدة',
        days: 'يوم',
        pricePerDay: 'السعر لليوم',
        total: 'المجموع',
        cancel: 'إلغاء',
        confirm: 'تأكيد الحجز',
        processing: 'جاري المعالجة...',
    },
} as const;

type Language = 'en' | 'ar';

interface ReservationDialogProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    car: Car;
}

interface FormData {
    car_id: number;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    pickup_date: string;
    return_date: string;
    pickup_location: string;
    drop_location: string;
    notes: string;
}

export default function ReservationDialog({
    isOpen,
    setIsOpen,
    car,
}: ReservationDialogProps) {
    const [lang, setLang] = useState<Language>('en');
    const t = translations[lang];
    const isRTL = lang === 'ar';
    const dateLocale = lang === 'ar' ? ar : enUS;

    const { data, setData, post, processing, errors, reset } =
        useForm<FormData>({
            car_id: car.id,
            customer_name: '',
            customer_email: '',
            customer_phone: '',
            pickup_date: '',
            return_date: '',
            pickup_location: '',
            drop_location: '',
            notes: '',
        });

    const toggleLanguage = () => {
        setLang(lang === 'en' ? 'ar' : 'en');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(store.url(), {
            preserveScroll: true,
            onSuccess: ({ props }) => {
                const { success, error } = props.flash as Flash;
                if (success) {
                    // Track FaceBook Pixel Lead
                    // @ts-ignore
                    if (typeof window.fbq === 'function') {
                        // @ts-ignore
                        window.fbq('track', 'Lead', {
                            value: totalPrice,
                            currency: 'EUR',
                            content_name: car.name,
                            content_category: 'Car Rental',
                            content_ids: [car.id],
                        });
                    }

                    toast.success(success);
                    reset();
                    setIsOpen(false);
                }
                if (error) {
                    toast.error(error);
                }
            },
        });
    };

    const calculateDays = () => {
        if (data.pickup_date && data.return_date) {
            const pickup = parse(data.pickup_date, 'yyyy-MM-dd', new Date());
            const returnDate = parse(
                data.return_date,
                'yyyy-MM-dd',
                new Date(),
            );
            const diffTime = Math.abs(returnDate.getTime() - pickup.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays || 1;
        }
        return 0;
    };

    const totalPrice = calculateDays() * car.price;

    // Get today at midnight for comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Convert string dates to Date objects for Calendar component
    const pickupDateObj = data.pickup_date
        ? parse(data.pickup_date, 'yyyy-MM-dd', new Date())
        : undefined;

    const returnDateObj = data.return_date
        ? parse(data.return_date, 'yyyy-MM-dd', new Date())
        : undefined;

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent
                className="prevent-scroll max-h-[90vh] max-w-2xl overflow-y-auto sm:min-w-4xl"
                dir={isRTL ? 'rtl' : 'ltr'}
            >
                <DialogHeader className={cn("relative", isRTL && "text-right")}>
                    {/* Header with Language Toggle */}
                    <div className={cn("flex items-start justify-between gap-4", isRTL && "flex-row-reverse")}>
                        <div className={cn("flex-1", isRTL && "text-right")}>
                            <DialogTitle className={cn(isRTL && "font-arabic")}>
                                {t.reserve} {car.name}
                            </DialogTitle>
                            <DialogDescription className={cn(isRTL && "font-arabic")}>
                                {car.marque?.nom_marque} • €{car.price}{t.perDay}
                            </DialogDescription>
                        </div>

                        {/* Language Toggle Button */}
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={toggleLanguage}
                            className="flex shrink-0 items-center gap-2 text-xs font-medium transition-all hover:bg-primary hover:text-primary-foreground"
                        >
                            <Globe className="size-4" />
                            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
                        </Button>
                    </div>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-2">
                    {/* Customer Information */}
                    <div className="space-y-4">
                        <h3 className={cn("text-lg font-semibold", isRTL && "font-arabic text-right")}>
                            {t.yourInfo}
                        </h3>

                        <div className="grid gap-4">
                            <div>
                                <Label htmlFor="customer_name" className={cn(isRTL && "font-arabic")}>
                                    {t.fullName}{' '}
                                    <span className="text-destructive">*</span>
                                </Label>
                                <Input
                                    id="customer_name"
                                    value={data.customer_name}
                                    onChange={(e) =>
                                        setData('customer_name', e.target.value)
                                    }
                                    placeholder={t.fullNamePlaceholder}
                                    required
                                    className={cn(isRTL && "text-right")}
                                    dir={isRTL ? 'rtl' : 'ltr'}
                                />
                                <InputError message={errors.customer_name} />
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <Label htmlFor="customer_email" className={cn(isRTL && "font-arabic")}>
                                        {t.email}{' '}
                                        <span className="text-destructive">
                                            *
                                        </span>
                                    </Label>
                                    <Input
                                        id="customer_email"
                                        type="email"
                                        value={data.customer_email}
                                        onChange={(e) =>
                                            setData(
                                                'customer_email',
                                                e.target.value,
                                            )
                                        }
                                        placeholder={t.emailPlaceholder}
                                        required
                                        dir="ltr"
                                        className="text-left"
                                    />
                                    <InputError
                                        message={errors.customer_email}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="customer_phone" className={cn(isRTL && "font-arabic")}>
                                        {t.phone}{' '}
                                        <span className="text-destructive">
                                            *
                                        </span>
                                    </Label>
                                    <Input
                                        id="customer_phone"
                                        type="tel"
                                        value={data.customer_phone}
                                        onChange={(e) =>
                                            setData(
                                                'customer_phone',
                                                e.target.value,
                                            )
                                        }
                                        placeholder={t.phonePlaceholder}
                                        required
                                        dir="ltr"
                                        className="text-left"
                                    />
                                    <InputError
                                        message={errors.customer_phone}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rental Dates */}
                    <div className="space-y-2">
                        <h3 className={cn("text-lg font-semibold", isRTL && "font-arabic text-right")}>
                            {t.rentalDates}
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <Label className={cn(isRTL && "font-arabic")}>
                                    {t.pickupDate}{' '}
                                    <span className="text-destructive">*</span>
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className={cn(
                                                'w-full justify-start font-normal',
                                                !data.pickup_date &&
                                                'text-muted-foreground',
                                                isRTL && 'flex-row-reverse text-right'
                                            )}
                                        >
                                            <CalendarIcon className={cn("h-4 w-4", isRTL ? "ml-2" : "mr-2")} />
                                            {data.pickup_date ? (
                                                format(pickupDateObj!, 'PPP', { locale: dateLocale })
                                            ) : (
                                                <span className={cn(isRTL && "font-arabic")}>{t.pickDate}</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={pickupDateObj}
                                            onSelect={(
                                                date: Date | undefined,
                                            ) => {
                                                if (date) {
                                                    setData(
                                                        'pickup_date',
                                                        format(
                                                            date,
                                                            'yyyy-MM-dd',
                                                        ),
                                                    );
                                                } else {
                                                    setData('pickup_date', '');
                                                }
                                            }}
                                            disabled={(date) => {
                                                const checkDate = new Date(
                                                    date,
                                                );
                                                checkDate.setHours(0, 0, 0, 0);
                                                return checkDate < today;
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover>
                                <InputError message={errors.pickup_date} />
                            </div>

                            <div>
                                <Label className={cn(isRTL && "font-arabic")}>
                                    {t.returnDate}{' '}
                                    <span className="text-destructive">*</span>
                                </Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className={cn(
                                                'w-full justify-start font-normal',
                                                !data.return_date &&
                                                'text-muted-foreground',
                                                isRTL && 'flex-row-reverse text-right'
                                            )}
                                        >
                                            <CalendarIcon className={cn("h-4 w-4", isRTL ? "ml-2" : "mr-2")} />
                                            {data.return_date ? (
                                                format(returnDateObj!, 'PPP', { locale: dateLocale })
                                            ) : (
                                                <span className={cn(isRTL && "font-arabic")}>{t.pickDate}</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={returnDateObj}
                                            onSelect={(
                                                date: Date | undefined,
                                            ) => {
                                                if (date) {
                                                    setData(
                                                        'return_date',
                                                        format(
                                                            date,
                                                            'yyyy-MM-dd',
                                                        ),
                                                    );
                                                } else {
                                                    setData('return_date', '');
                                                }
                                            }}
                                            disabled={(date) => {
                                                if (!data.pickup_date)
                                                    return true;

                                                const checkDate = new Date(
                                                    date,
                                                );
                                                checkDate.setHours(0, 0, 0, 0);

                                                const pickupDate = parse(
                                                    data.pickup_date,
                                                    'yyyy-MM-dd',
                                                    new Date(),
                                                );
                                                pickupDate.setHours(0, 0, 0, 0);

                                                return checkDate <= pickupDate;
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover>
                                <InputError message={errors.return_date} />
                            </div>
                        </div>
                    </div>

                    {/* Pickup & Drop Locations (Optional) */}
                    <div className="space-y-2">
                        <h3 className={cn("text-lg font-semibold", isRTL && "font-arabic text-right")}>
                            {t.locations}
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <Label htmlFor="pickup_location" className={cn(isRTL && "font-arabic")}>
                                    {t.pickupLocation}
                                </Label>
                                <Input
                                    id="pickup_location"
                                    value={data.pickup_location}
                                    onChange={(e) =>
                                        setData(
                                            'pickup_location',
                                            e.target.value,
                                        )
                                    }
                                    placeholder={t.pickupLocationPlaceholder}
                                    className={cn(isRTL && "text-right")}
                                    dir={isRTL ? 'rtl' : 'ltr'}
                                />
                                <InputError message={errors.pickup_location} />
                            </div>

                            <div>
                                <Label htmlFor="drop_location" className={cn(isRTL && "font-arabic")}>
                                    {t.dropLocation}
                                </Label>
                                <Input
                                    id="drop_location"
                                    value={data.drop_location}
                                    onChange={(e) =>
                                        setData('drop_location', e.target.value)
                                    }
                                    placeholder={t.dropLocationPlaceholder}
                                    className={cn(isRTL && "text-right")}
                                    dir={isRTL ? 'rtl' : 'ltr'}
                                />
                                <InputError message={errors.drop_location} />
                            </div>
                        </div>
                    </div>

                    {/* Notes */}
                    <div>
                        <Label htmlFor="notes" className={cn(isRTL && "font-arabic")}>
                            {t.notes}
                        </Label>
                        <Textarea
                            id="notes"
                            value={data.notes}
                            onChange={(e) => setData('notes', e.target.value)}
                            placeholder={t.notesPlaceholder}
                            rows={3}
                            className={cn(isRTL && "text-right")}
                            dir={isRTL ? 'rtl' : 'ltr'}
                        />
                        <InputError message={errors.notes} />
                    </div>

                    {/* Price Summary */}
                    {calculateDays() > 0 && (
                        <div className="space-y-2 rounded-lg bg-muted p-4">
                            <div className={cn("flex justify-between", isRTL && "flex-row-reverse")}>
                                <span className={cn(isRTL && "font-arabic")}>{t.duration}:</span>
                                <span className={cn("font-semibold", isRTL && "font-arabic")}>
                                    {calculateDays()} {t.days}
                                </span>
                            </div>
                            <div className={cn("flex justify-between", isRTL && "flex-row-reverse")}>
                                <span className={cn(isRTL && "font-arabic")}>{t.pricePerDay}:</span>
                                <span>€{car.price}</span>
                            </div>
                            <div className={cn("flex justify-between border-t pt-2 text-lg font-bold", isRTL && "flex-row-reverse")}>
                                <span className={cn(isRTL && "font-arabic")}>{t.total}:</span>
                                <span>€{totalPrice}</span>
                            </div>
                        </div>
                    )}

                    <DialogFooter className={cn(isRTL && "flex-row-reverse sm:flex-row-reverse")}>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsOpen(false)}
                            className={cn(isRTL && "font-arabic")}
                        >
                            {t.cancel}
                        </Button>
                        <Button
                            type="submit"
                            disabled={processing}
                            className={cn(isRTL && "font-arabic")}
                        >
                            {processing
                                ? t.processing
                                : t.confirm}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
