<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_name',
        'customer_email',
        'customer_phone',
        'customer_address',
        'car_id',
        'pickup_date',
        'drop_date',
        'total_price',
        'daily_rate',
        'solde_du',
        'status',
        'pickup_location',
        'drop_location',
        'notes',
        'updated_by',
    ];

    protected $casts = [
        'pickup_date' => 'datetime',
        'drop_date' => 'datetime',
        'total_price' => 'decimal:2',
        'daily_rate' => 'decimal:2',
        'solde_du' => 'decimal:2',
    ];

    // Relationships
    public function car(): BelongsTo
    {
        return $this->belongsTo(Car::class);
    }

    public function reglements(): HasMany
    {
        return $this->hasMany(Reglement::class);
    }

    public function updater(): BelongsTo
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    // Helper Methods
    public function isPaid(): bool
    {
        return $this->solde_du <= 0;
    }

    public function scopeIsOverdue(Builder $query)
    {
        return $query->where('status','!=','completed')
            ->where('drop_date', '<', now()->format("Y-m-d"));
    }

    public function isPartiallyPaid(): bool
    {
        return $this->solde_du < $this->total_price && $this->solde_du > 0;
    }

    public function getTotalPaid(): float
    {
        return $this->total_price - $this->solde_du;
    }

    public function getRentalDays(): int
    {
        return $this->pickup_date->diffInDays($this->drop_date);
    }

    public function getPaymentPercentage(): int
    {
        if ($this->total_price <= 0) {
            return 0;
        }
        return (int) round(($this->getTotalPaid() / $this->total_price) * 100);
    }

    // Scopes
    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    public function scopeConfirmed($query)
    {
        return $query->where('status', 'confirmed');
    }

    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeCompleted($query)
    {
        return $query->where('status', 'completed');
    }

    public function scopeCancelled($query)
    {
        return $query->where('status', 'cancelled');
    }

    public function scopeUnpaid($query)
    {
        return $query->where('solde_du', '>', 0);
    }

    public function scopeFullyPaid($query)
    {
        return $query->where('solde_du', '<=', 0);
    }
}