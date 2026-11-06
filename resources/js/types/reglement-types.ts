import { Creator, Updater } from ".";

export interface ReglementData {
    id: number;
    order_id: number;
    montant: number;
    mode_paiement: 'cash' | 'card' | 'transfer' | 'check';
    date_paiement: string;
    notes: string | null;
    created_at: string;
    updated_at: string;
    creator?: Creator;
}

export interface PaginatedReglements {
    data: ReglementData[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
}