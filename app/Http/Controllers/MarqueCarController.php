<?php

namespace App\Http\Controllers;

use App\Models\MarqueCar;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class MarqueCarController extends Controller
{
    public function index()
    {
        $marques = MarqueCar::
            withCount("cars")
            ->orderBy('nom_marque', 'asc')->with(["creator:id,name", "updater:id,name"])
            ->get();
        return Inertia::render("Cars/Marques/Index", ["data" => $marques]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            "nom_marque" => "required|unique:marque_cars,nom_marque|max:100"
        ]);
        try {
            MarqueCar::create($validatedData);
            return back()->with('success', "✅ Marque automobile créée avec succès !");
        } catch (\Exception $e) {
            Log::error("Error creating Marque : " . $e->getMessage());
            return back()->with("error", "❌ Échec de la création de la marque. Veuillez contacter votre développeur.");
        }
    }

    public function show(MarqueCar $marqueCar)
    {
        //
    }

    public function edit(MarqueCar $marqueCar)
    {
        //
    }

    public function update(Request $request, int $id)
    {
        $marque = MarqueCar::find($id);
        if (!$marque) {
            return back()->with("error", "❌ Marque demandé N'exist pas...");
        }

        $validatedData = $request->validate([
            "nom_marque" => "required|unique:marque_cars,nom_marque," . $marque->id . "max:100"
        ]);
        try {
            $marque->update($validatedData);
            return back()->with('success', "✅ Marque automobile mise à jour avec succès !");
        } catch (\Exception $e) {
            Log::error("Error creating Marque : " . $e->getMessage());
            return back()->with("error", "❌ Échec de la mise à jour. Veuillez contacter votre développeur.");
        }
    }

    public function destroy(int $id)
    {
        try {
            $marque = MarqueCar::find($id);
            if (!$marque) {
                return back()->with("error", "❌ Marque demandé N'exist pas...");
            }
            $marqueName = $marque->nom_marque;
            $marque->delete();
            return back()->with('success', "🗑️ Marque '{$marqueName}' supprimée définitivement !");
        } catch (QueryException $e) {
            if ($e->getCode() === '23000') {
                return back()->with("error", "❌ Cannot delete this brand because it's being used in other system data. Please delete the associated items first.");
            }
            Log::error('Database error during article deletion: ' . $e->getMessage());
            return back()->with("error", "❌ Technical Error: An unexpected error occurred. Please contact support.");
        } catch (\Exception $e) {
            Log::error("Erreur suppression Marque ID {$marque->id} : " . $e->getMessage());
            return back()->with("error", "❌ Impossible de supprimer cette marque. Veuillez contacter votre développeur.");
        }
    }
}
