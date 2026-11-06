<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reglement extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'montant',
        'mode_paiement',
        'date_paiement',
        'notes',
        'created_by',
    ];

    protected $casts = [
        'montant' => 'decimal:2',
        'date_paiement' => 'date',
    ];

    /**
     * Get the order that owns the reglement.
     */
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * Get the user who created the reglement.
     */
    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}