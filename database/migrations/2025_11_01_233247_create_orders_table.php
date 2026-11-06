<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();

            // Customer information (for guests without accounts)
            $table->string('customer_name', 100);
            $table->string('customer_email', 100);
            $table->string('customer_phone', 20);
            $table->string('customer_address')->nullable();
            // Car rental
            $table->foreignId('car_id')->constrained('cars')->restrictOnDelete();
            // Rental period
            $table->dateTime('pickup_date');
            $table->dateTime('drop_date');
            // Pricing
            $table->decimal('total_price', 10, 2);
            $table->decimal('solde_du', 10, 2);
            $table->decimal('daily_rate', 10, 2);
            // Status tracking
            $table->enum('status', [
                'pending',
                'confirmed',
                'active',
                'completed',
                'cancelled'
            ])->default('pending');
            // Optional fields
            $table->string('pickup_location')->nullable();
            $table->string('drop_location')->nullable();
            $table->text('notes')->nullable();
            $table->foreignId('updated_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};