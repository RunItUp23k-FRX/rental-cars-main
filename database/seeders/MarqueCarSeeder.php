<?php

namespace Database\Seeders;

use App\Models\MarqueCar;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MarqueCarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $marques = [
            'Dacia',
            'Peugeot',
            'Renault',
            'Nissan',
            'Seat',
            'BMW',
            'Volkswagen',
            'Citroën',
            'Audi',
            'Toyota',
            'Hyundai',
            'Kia',
            'Ford',
            'Opel',
            'Fiat',
            'Suzuki',
            'Skoda',
            'Mercedes-Benz',
            'Mazda',
            'Mitsubishi',
            'Chevrolet',
            'Honda',
            'Jeep',
            'Land Rover',
            'Volvo',
            'Porsche',
        ];

        foreach ($marques as $marque) {
            MarqueCar::create([
                'nom_marque' => $marque,
            ]);
        }
    }
}