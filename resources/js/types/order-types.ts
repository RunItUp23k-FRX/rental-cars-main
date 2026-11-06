import { Updater } from ".";
import { Car } from "./cars-types";

export interface OrderData {
    id: number;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    customer_address: string | null;
    car_id: number;
    pickup_date: string;
    drop_date: string;
    total_price: number;
    daily_rate: number;
    solde_du: number;
    status: 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled';
    pickup_location: string | null;
    drop_location: string | null;
    notes: string | null;
    created_at: string;
    updated_at: string;
    car: Car;
    updated_by_user?: Updater
}

export interface PaginatedOrders {
    data: OrderData[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
}