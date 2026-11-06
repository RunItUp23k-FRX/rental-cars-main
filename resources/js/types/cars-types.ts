import { Creator } from ".";
import { MarqueData } from "./marques";

export type Transmission = "automatic" | "manual";
export type FuelType = "diesel" | "gasoline" | "electric" | "hybrid";
export type Status = "available" | "rented" | "maintenance" | "out_of_service";

export interface Car {
    id: number;
    encryption: string;
    name: string;
    slug: string;
    img_path: string;
    seats: number;
    ac: boolean;
    display_in_home: boolean;
    transmission: Transmission;
    fuel_type: FuelType;
    status: Status;
    creator: Creator;
    marque: Pick<MarqueData, "id" | "nom_marque">;
    price: number
}