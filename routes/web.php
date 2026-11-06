<?php

use App\Http\Controllers\CarController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MarqueCarController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ReglementController;
use App\Http\Controllers\SitemapController;
use App\Http\Controllers\UserController;
use App\Models\Car;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $featuredCars = Car::where('display_in_home', true)
        ->where('status', 'available')
        ->with('marque:id,nom_marque')
        ->limit(6)
        ->get();
    return Inertia::render('welcome', [
        'canRegister' => false,
        "featuredCars" => Inertia::defer(fn() => $featuredCars),
    ]);
})->name('home');


Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', [DashboardController::class, "index"])->name('dashboard');
    Route::get('notifications', [NotificationController::class, "index"])->name('dashboard.notifs');
    Route::get('notifications/setup', [NotificationController::class, "setup"])->name('notifications.setup');
    Route::post('/fcm-token', [NotificationController::class, 'storeFcmToken'])
        ->name('fcm.token.store');
});
Route::get("/about", function () {
    return Inertia::render("about");
});
Route::get("/terms", function () {
    return Inertia::render("terms");
});

// City-specific SEO landing pages
Route::get("/car-rental-agadir", function () {
    return Inertia::render("locations/agadir");
})->name('location.agadir');

Route::get("/car-rental-marrakech", function () {
    return Inertia::render("locations/marrakech");
})->name('location.marrakech');

Route::get("/car-rental-essaouira", function () {
    return Inertia::render("locations/essaouira");
})->name('location.essaouira');

Route::get("/car-rental-imsouane", function () {
    return Inertia::render("locations/imsouane");
})->name('location.imsouane');

Route::get("/car-rental-taghazout", function () {
    return Inertia::render("locations/taghazout");
})->name('location.taghazout');

Route::get("/car-rental-casablanca", function () {
    return Inertia::render("locations/casablanca");
})->name('location.casablanca');

Route::get('/cars/{car:slug}', [CarController::class, 'show'])->name('cars.show');

Route::get('/sitemap.xml', [SitemapController::class, 'index']);
Route::get("/our-vehicles", [CarController::class, "ourVehiclesPageData"])->name("ourVehiclesPageData");
Route::post('/client/orders', [OrderController::class, 'store'])->name('orders.store');
Route::resource("reglements", ReglementController::class)->middleware("auth");
Route::resource("users", UserController::class)->middleware("auth");
// Admin routes for managing orders (protected by auth middleware)
Route::middleware(['auth'])->group(function () {
    Route::get('orders', [OrderController::class, 'index'])->name('orders.index');
    Route::get('orders/{order}', [OrderController::class, 'show'])->name('orders.show');
    Route::put('orders/{order}', [OrderController::class, 'update'])->name('orders.update');
    Route::delete('orders/{order}', [OrderController::class, 'destroy'])->name('orders.destroy');
});
Route::middleware(["auth"])->prefix("vehicles")->name("vehicles.")->group(function () {
    Route::prefix("marque")->name("marque.")->group(function () {
        Route::get("/", [MarqueCarController::class, "index"])->name("index");
        Route::post("store", [MarqueCarController::class, "store"])->name("store");
        Route::put("{marque}/update", [MarqueCarController::class, "update"])->name("update");
        Route::delete("{marque}/delete", [MarqueCarController::class, "destroy"])->name("destroy");
    });
    Route::get("/", [CarController::class, "index"])->name("index");
    Route::post("store", [CarController::class, "store"])->name("store");
    Route::post("{car}/update", [CarController::class, "update"])->name("update");
    Route::delete("{car}/delete", [CarController::class, "destroy"])->name("destroy");
});

require __DIR__ . '/settings.php';
