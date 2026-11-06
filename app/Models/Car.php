<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Car extends Model
{
    protected $table = "cars";
    protected $fillable = [
        "name",
        "slug",
        "img_path",
        "seats",
        "ac",
        "transmission",
        "fuel_type",
        "status",
        "display_in_home",
        "marque_id",
        "created_by",
        "updated_by",
        "price"
    ];

    protected $attributes = [
        "ac" => false,
        "display_in_home" => false,
        "transmission" => "automatic",
        "fuel_type" => "diesel",
        "status" => "available",
        "price" => 20
    ];

    protected $casts = [
        "ac" => "boolean",
        "display_in_home" => "boolean",
        'transmission' => 'string',
        'fuel_type' => 'string',
        'status' => 'string',
        'price' => 'decimal:2',
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, "created_by");
    }

    public function updater()
    {
        return $this->belongsTo(User::class, "updated_by");
    }

    public function marque()
    {
        return $this->belongsTo(MarqueCar::class, "marque_id");
    }

    public function orders()
    {
        return $this->hasMany(Order::class, "car_id");
    }

    public static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            if (auth()->check()) {
                $model->created_by = auth()->id();
            }
            if (empty($model->slug)) {
                $model->slug = static::generateUniqueSlug($model);
            }
        });
        static::updating(function ($model) {
            if (auth()->check()) {
                $model->updated_by = auth()->id();
            }
        });
    }

    protected static function generateUniqueSlug($model)
    {
        $marque = $model->marque ?? MarqueCar::find($model->marque_id);
        $base = Str::slug(($marque->nom_marque ?? '') . ' ' . $model->name);
        $slug = $base;
        $i = 2;
        while (static::where('slug', $slug)->where('id', '!=', $model->id ?? 0)->exists()) {
            $slug = $base . '-' . $i++;
        }
        return $slug;
    }
}
