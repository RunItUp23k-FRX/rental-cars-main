<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MarqueCar extends Model
{
    protected $table = "marque_cars";

    protected $fillable = [
        "nom_marque",
        "created_by",
        "updated_by"
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, "created_by");
    }

    public function updater()
    {
        return $this->belongsTo(User::class, "updated_by");
    }

    public function cars()
    {
        return $this->hasMany(Car::class, "marque_id");
    }

    public static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (auth()->check()) {
                $model->created_by = auth()->id();
            }
        });
        static::updating(function ($model) {
            if (auth()->check()) {
                $model->updated_by = auth()->id();
            }
        });
    }

}
