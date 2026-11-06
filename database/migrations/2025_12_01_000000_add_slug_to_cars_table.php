<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use App\Models\Car;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('cars', function (Blueprint $table) {
            $table->string('slug')->nullable()->unique()->after('name');
        });

        // Backfill slugs for existing cars
        foreach (Car::with('marque')->get() as $car) {
            $base = Str::slug(($car->marque->nom_marque ?? '') . ' ' . $car->name);
            $slug = $base;
            $i = 2;
            while (Car::where('slug', $slug)->where('id', '!=', $car->id)->exists()) {
                $slug = $base . '-' . $i++;
            }
            $car->update(['slug' => $slug]);
        }
    }

    public function down(): void
    {
        Schema::table('cars', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
    }
};
