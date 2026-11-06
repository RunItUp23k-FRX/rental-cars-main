import { Creator, Updater } from ".";

export interface MarqueData {
    id: number;
    nom_marque: string;
    created_by: number | null;
    updated_by: number | null;
    creator: Creator;
    updater?: Updater | null;
    created_at: string;
    updated_at: string;
    cars_count?: number
};