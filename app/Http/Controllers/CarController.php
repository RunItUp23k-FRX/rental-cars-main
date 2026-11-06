<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\MarqueCar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CarController extends Controller
{
    private function handleImgUpload($image, $carName)
    {
        $file = $image;
        $destinationPath = public_path('uploads/images');
        $imageName = time() . str_replace(" ", "", $carName) . '.' . $file->getClientOriginalExtension();
        $file->move($destinationPath, $imageName);
        return $imageName;
    }

    public function index(Request $request)
    {
        $query = Car::query()->with(["marque:id,nom_marque"]);

        // Filter by marques
        if ($request->has('marques') && $request->marques) {
            $marqueIds = explode(',', $request->marques);
            $query->whereIn('marque_id', $marqueIds);
        }

        // Filter by transmission
        if ($request->has('transmission') && $request->transmission !== 'all') {
            $query->where('transmission', $request->transmission);
        }

        // Filter by fuel type
        if ($request->has('fuelType') && $request->fuelType !== 'all') {
            $query->where('fuel_type', $request->fuelType);
        }

        // Filter by status
        if ($request->has('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        // Filter by seats range
        if ($request->has('minSeats')) {
            $query->where('seats', '>=', $request->minSeats);
        }
        if ($request->has('maxSeats')) {
            $query->where('seats', '<=', $request->maxSeats);
        }

        // Filter by price range
        if ($request->has('minPrice')) {
            $query->where('price', '>=', $request->minPrice);
        }
        if ($request->has('maxPrice')) {
            $query->where('price', '<=', $request->maxPrice);
        }

        // Filter by AC
        if ($request->has('hasAC')) {
            $query->where('ac', $request->hasAC === '1');
        }

        // Filter by display home
        if ($request->has('displayHome')) {
            $query->where('display_in_home', $request->displayHome === '1');
        }

        $cars = $query->orderBy("name", "asc")->get();
        $marques = MarqueCar::select(["id", "nom_marque"])->orderBy("nom_marque", "asc")->get();

        return Inertia::render("Cars/Index", [
            "cars" => $cars,
            "marques" => $marques,
            "filters" => $request->only([
                'marques',
                'transmission',
                'fuelType',
                'status',
                'minSeats',
                'maxSeats',
                'minPrice',
                'maxPrice',
                'hasAC',
                'displayHome'
            ])
        ]);
    }

    public function store(Request $request)
    {
        $validateData = $request->validate([
            "carName" => "required|string|max:100",
            "marque" => "required|numeric|exists:marque_cars,id",
            "transmission" => "required|in:automatic,manual",
            "fuelType" => "required|in:diesel,gasoline,electric,hybrid",
            "status" => "required|in:available,rented,maintenance,out_of_service",
            "hasAC" => "required|boolean",
            "displayHome" => "required|boolean",
            "file" => "required|image|mimes:jpeg,png,jpg,gif|max:2048",
            "seats" => "required|numeric|max:10|min:2",
            "price" => "required|numeric|min:0"
        ]);

        try {
            $img_path = $this->handleImgUpload($validateData["file"], $validateData["carName"]);

            Car::create([
                "name" => $validateData["carName"],
                "img_path" => $img_path,
                "marque_id" => $validateData["marque"],
                "seats" => $validateData["seats"],
                "ac" => $validateData["hasAC"],
                "display_in_home" => $validateData["displayHome"],
                "transmission" => $validateData["transmission"],
                "fuel_type" => $validateData["fuelType"],
                "status" => $validateData["status"],
                "price" => $validateData["price"],
                "created_by" => Auth::user()->id
            ]);

            return redirect()->back()->with('success', "✅ Voiture créée avec succès !");
        } catch (\Exception $e) {
            Log::error("Error creating Car: " . $e->getMessage());
            return back()->with("error", "❌ Échec de la création de la voiture. Veuillez contacter votre développeur.");
        }
    }

    public function show(Car $car)
    {
        $car->load('marque:id,nom_marque');

        // Guard against missing marque relation
        if (!$car->marque) {
            abort(404, 'Vehicle not found');
        }

        // Only send the fields the frontend needs (avoids serialising null relations like creator/updater)
        $carData = $car->only([
            'id', 'name', 'slug', 'img_path', 'seats', 'ac',
            'transmission', 'fuel_type', 'status', 'price',
        ]);
        $carData['marque'] = $car->marque->only(['id', 'nom_marque']);

        $relatedCars = Car::where('status', 'available')
            ->where('id', '!=', $car->id)
            ->with('marque:id,nom_marque')
            ->where(function ($query) use ($car) {
                $query->where('marque_id', $car->marque_id)
                    ->orWhereBetween('price', [$car->price * 0.7, $car->price * 1.3]);
            })
            ->limit(4)
            ->get()
            ->map(function ($related) {
                $data = $related->only([
                    'id', 'name', 'slug', 'img_path', 'seats', 'ac',
                    'transmission', 'fuel_type', 'status', 'price',
                ]);
                $data['marque'] = $related->marque ? $related->marque->only(['id', 'nom_marque']) : ['id' => 0, 'nom_marque' => ''];
                return $data;
            });

        return Inertia::render("Cars/Show", [
            "car" => $carData,
            "relatedCars" => $relatedCars,
        ]);
    }

    public function update(Request $request, Car $car)
    {
        $validateData = $request->validate([
            "carName" => "required|string|max:100",
            "marque" => "required|numeric|exists:marque_cars,id",
            "transmission" => "required|in:automatic,manual",
            "fuelType" => "required|in:diesel,gasoline,electric,hybrid",
            "status" => "required|in:available,rented,maintenance,out_of_service",
            "hasAC" => "required|boolean",
            "displayHome" => "required|boolean",
            "file" => "nullable|image|mimes:jpeg,png,jpg,gif|max:2048", // nullable for update
            "seats" => "required|numeric|max:10|min:2",
            "price" => "required|numeric|min:0"
        ]);

        try {
            // Handle new image upload
            if ($request->hasFile('file')) {
                // Delete old image
                $oldImagePath = public_path('uploads/images/' . $car->img_path);
                if (file_exists($oldImagePath)) {
                    unlink($oldImagePath);
                }

                $img_path = $this->handleImgUpload($validateData["file"], $validateData["carName"]);
            } else {
                $img_path = $car->img_path; // Keep old image
            }

            $car->update([
                "name" => $validateData["carName"],
                "img_path" => $img_path,
                "marque_id" => $validateData["marque"],
                "seats" => $validateData["seats"],
                "ac" => $validateData["hasAC"],
                "display_in_home" => $validateData["displayHome"],
                "transmission" => $validateData["transmission"],
                "fuel_type" => $validateData["fuelType"],
                "status" => $validateData["status"],
                "price" => $validateData["price"],
                "updated_by" => Auth::user()->id
            ]);

            return back()->with('success', "✅ Voiture mise à jour avec succès !");
        } catch (\Exception $e) {
            Log::error("Error updating Car: " . $e->getMessage());
            return back()->with("error", "❌ Échec de la mise à jour de la voiture. Veuillez contacter votre développeur.");
        }
    }

    public function destroy(Car $car)
    {
        try {
            // Delete the image file
            $imagePath = public_path('uploads/images/' . $car->img_path);
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }

            $car->delete();

            return back()->with('success', "✅ Voiture supprimée avec succès !");
        } catch (\Exception $e) {
            Log::error("Error deleting Car: " . $e->getMessage());
            return back()->with("error", "❌ Échec de la suppression de la voiture. Veuillez contacter votre développeur.");
        }
    }

    public function ourVehiclesPageData(Request $request)
    {
        $validated = $request->validate([
            'marques' => ['nullable', 'string', 'regex:/^[\d,]+$/'],
            'marques.*' => ['nullable', 'integer', 'exists:marque_cars,id'],
            'transmission' => ['nullable', 'string', 'in:manual,automatic,all'],
            'fuel_type' => ['nullable', 'string', 'in:diesel,gasoline,electric,hybrid,all'],
            'min_seats' => ['nullable', 'integer', 'min:1', 'max:20'],
            'max_seats' => ['nullable', 'integer', 'min:1', 'max:20'],
            'min_price' => ['nullable', 'numeric', 'min:0', 'max:10000'],
            'max_price' => ['nullable', 'numeric', 'min:0', 'max:10000'],
            'ac' => ['nullable', 'string', 'in:true,false,1,0'],
            'sort_by' => ['nullable', 'string', 'in:name,price,seats'],
            'sort_order' => ['nullable', 'string', 'in:asc,desc'],
            'page' => ['nullable', 'integer', 'min:1'],
        ]);

        // Build query with validated data only
        $query = Car::where('status', 'available')
            ->with('marque:id,nom_marque');

        // Apply filters using validated data
        if (!empty($validated['marques'])) {
            // Convert comma-separated string to array of integers
            $marqueIds = array_map('intval', explode(',', $validated['marques']));
            // Remove any duplicates and filter out zeros
            $marqueIds = array_filter(array_unique($marqueIds));

            if (!empty($marqueIds)) {
                $query->whereIn('marque_id', $marqueIds);
            }
        }

        if (!empty($validated['transmission']) && $validated['transmission'] !== 'all') {
            $query->where('transmission', $validated['transmission']);
        }

        if (!empty($validated['fuel_type']) && $validated['fuel_type'] !== 'all') {
            $query->where('fuel_type', $validated['fuel_type']);
        }

        if (isset($validated['min_seats']) && $validated['min_seats'] !== '') {
            $query->where('seats', '>=', (int) $validated['min_seats']);
        }

        if (isset($validated['max_seats']) && $validated['max_seats'] !== '') {
            // Also ensure max_seats is not less than min_seats
            $maxSeats = (int) $validated['max_seats'];
            if (isset($validated['min_seats'])) {
                $maxSeats = max($maxSeats, (int) $validated['min_seats']);
            }
            $query->where('seats', '<=', $maxSeats);
        }

        if (isset($validated['min_price']) && $validated['min_price'] !== '') {
            $query->where('price', '>=', (float) $validated['min_price']);
        }

        if (isset($validated['max_price']) && $validated['max_price'] !== '') {
            // Also ensure max_price is not less than min_price
            $maxPrice = (float) $validated['max_price'];
            if (isset($validated['min_price'])) {
                $maxPrice = max($maxPrice, (float) $validated['min_price']);
            }
            $query->where('price', '<=', $maxPrice);
        }

        if (isset($validated['ac']) && $validated['ac'] !== '') {
            $query->where('ac', in_array($validated['ac'], ['true', '1'], true));
        }

        // Sorting with whitelist
        $sortBy = $validated['sort_by'] ?? 'name';
        $sortOrder = $validated['sort_order'] ?? 'asc';

        // Double-check even though validation already whitelisted these
        if (in_array($sortBy, ['name', 'price', 'seats'], true) && in_array($sortOrder, ['asc', 'desc'], true)) {
            $query->orderBy($sortBy, $sortOrder);
        }

        // Paginate with a maximum limit
        $cars = $query->paginate(12)->withQueryString();

        // Get all marques for filter (cached for performance)
        $marques = Cache::remember('marques_for_filter', 3600, function () {
            return MarqueCar::select('id', 'nom_marque')->orderBy('nom_marque')->get();
        });

        return Inertia::render("OurVehicles/Index", [
            'cars' => $cars,
            'marques' => $marques,
            'filters' => $validated
        ]);
    }
}