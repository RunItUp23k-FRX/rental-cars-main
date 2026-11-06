<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string("name", "100");
            $table->string("img_path", "200");
            $table->integer("seats");
            $table->boolean("ac")->default(false);
            $table->decimal("price", 10, 2)->default(20);
            $table->boolean("display_in_home")->default(false);
            $table->enum("transmission", ["automatic", "manual"])->default("manual");
            $table->enum("fuel_type", ["diesel", "gasoline", "electric", "hybrid"])->default("gasoline");
            $table->enum("status", ["available", "rented", "maintenance", "out_of_service"])->default("available");
            $table->foreignId("created_by")->nullable()->constrained("users", "id")->nullOnDelete();
            $table->foreignId("updated_by")->nullable()->constrained("users", "id")->nullOnDelete();
            $table->foreignId("marque_id")->constrained('marque_cars', "id")->restrictOnUpdate();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
