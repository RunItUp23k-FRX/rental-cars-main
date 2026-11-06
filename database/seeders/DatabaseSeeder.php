<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::firstOrCreate(
            ['email' => 'ayoubwazane306@gmail.com'],
            [
                'name' => 'Ayoubwazane',
                'password' => '12345678',
                'email_verified_at' => now(),
            ]
        );
        $this->call([
            MarqueCarSeeder::class,
        ]);
    }
}
