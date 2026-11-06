<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class SitemapController extends Controller
{
    public function index()
    {
        $sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
        $sitemap .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

        // Homepage
        $sitemap .= $this->addUrl(route('home'), now(), 'daily', '1.0');

        // About page
        $sitemap .= $this->addUrl(url('/about'), now()->subDays(7), 'monthly', '0.8');

        // Terms page
        $sitemap .= $this->addUrl(url('/terms'), now()->subDays(30), 'yearly', '0.5');

        // City-specific SEO landing pages (high priority for local search)
        $sitemap .= $this->addUrl(url('/car-rental-agadir'), now(), 'weekly', '0.9');
        $sitemap .= $this->addUrl(url('/car-rental-marrakech'), now(), 'weekly', '0.9');
        $sitemap .= $this->addUrl(url('/car-rental-essaouira'), now(), 'weekly', '0.9');
        $sitemap .= $this->addUrl(url('/car-rental-imsouane'), now(), 'weekly', '0.9');
        $sitemap .= $this->addUrl(url('/car-rental-taghazout'), now(), 'weekly', '0.9');
        $sitemap .= $this->addUrl(url('/car-rental-casablanca'), now(), 'weekly', '0.9');

        // Our Vehicles page
        $sitemap .= $this->addUrl(route('ourVehiclesPageData'), now(), 'daily', '0.9');

        // Individual car detail pages
        $cars = Car::where('status', 'available')->whereNotNull('slug')->get();
        foreach ($cars as $car) {
            $sitemap .= $this->addUrl(
                route('cars.show', ['car' => $car->slug]),
                $car->updated_at,
                'weekly',
                '0.7'
            );
        }

        $sitemap .= '</urlset>';

        return response($sitemap, 200)
            ->header('Content-Type', 'application/xml');
    }

    private function addUrl($loc, $lastmod, $changefreq, $priority)
    {
        return '<url>' .
            '<loc>' . htmlspecialchars($loc) . '</loc>' .
            '<lastmod>' . $lastmod->toAtomString() . '</lastmod>' .
            '<changefreq>' . $changefreq . '</changefreq>' .
            '<priority>' . $priority . '</priority>' .
            '</url>';
    }
}