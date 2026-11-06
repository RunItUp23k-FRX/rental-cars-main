# SEO & Growth Strategy — Aguinane Cars

## Current Status
- **Domain:** aguinanecars.com
- **Live since:** ~4 months
- **Traffic:** Zero (SimilarWeb shows no data)
- **Indexed pages:** ~6 public pages
- **Target cities:** Agadir, Marrakech (expand to 6+)

---

## PHASE 1 — Technical Fixes (This Week) ✅
- [x] **Add canonical URL** to Our Vehicles page (`OurVehicles/Index.tsx`)
- [x] **Fix OG image path** on Our Vehicles page (`/images/fleet-og.jpg` → `bg-our-vehicles.webp`)
- [x] **Add `manifest.json`** to `/public/` for PWA signals
- [x] **Add hreflang tags** to homepage (currently only on city pages)
- [x] **Verify all OG image URLs** actually exist and are accessible

---

## PHASE 2 — Content Expansion (Weeks 2-4)

### Individual Car Detail Pages
- [ ] Create public route: `/cars/{slug}` (e.g., `/cars/dacia-duster-agadir`)
- [ ] Create `Cars/Show.tsx` page component with full car details
- [ ] Add Product/Vehicle schema (JSON-LD) to each car page
- [ ] Add proper meta tags (title, description, OG, canonical) per car
- [ ] Uncomment car listings in `SitemapController.php`
- [ ] Estimated: 30-50 new indexed pages

### New City Landing Pages
- [ ] Create `/location-voiture-essaouira` — Essaouira landing page
- [ ] Create `/location-voiture-imsouane` — Imsouane landing page
- [ ] Create `/location-voiture-taghazout` — Taghazout landing page
- [ ] Create `/location-voiture-casablanca` — Casablanca landing page
- [ ] Add routes in `web.php` for each new city
- [ ] Add all new city pages to `SitemapController.php`
- [ ] Each page must have UNIQUE content (not copy-paste from Agadir/Marrakech)

### Make Existing City Pages Unique
- [ ] **Agadir page** — Add local driving tips, Al Massira airport info, popular routes (Agadir → Taghazout, Agadir → Imsouane, Agadir → Essaouira)
- [ ] **Marrakech page** — Add Menara airport info, popular routes (Marrakech → Ouarzazate, Marrakech → Ait Ben Haddou), driving in medina tips
- [ ] Differentiate feature sections (currently nearly identical across both pages)

### Cross-Linking
- [ ] Agadir page → link to Marrakech, Essaouira, Imsouane, Taghazout
- [ ] Marrakech page → link to Agadir, Essaouira, Casablanca
- [ ] Each city page → link to related nearby cities
- [ ] Add "Also available in..." section at bottom of each city page

### FAQ Sections
- [ ] Add FAQ section to Agadir page (5-8 questions about renting in Agadir)
- [ ] Add FAQ section to Marrakech page (5-8 questions about renting in Marrakech)
- [ ] Add FAQ section to each new city page
- [ ] Implement `FAQPage` schema (JSON-LD) on each page with FAQ
- [ ] Target real search queries people ask (use Google's "People also ask")

---

## PHASE 3 — Blog / Content Marketing (Weeks 4-8)

### Blog System
- [ ] Create Blog model + migration (title, slug, content, meta_description, featured_image, published_at)
- [ ] Create BlogController with index and show routes
- [ ] Create `Blog/Index.tsx` — blog listing page
- [ ] Create `Blog/Show.tsx` — individual article page with Article schema
- [ ] Add blog routes: `/blog`, `/blog/{slug}`
- [ ] Add blog to sitemap
- [ ] Add blog link to main navigation

### Priority Articles (French + English)

#### French Articles (Primary — higher search volume in Morocco)
- [ ] "Location voiture Agadir pas cher — Guide complet"
- [ ] "Location voiture Marrakech aeroport — Conseils pratiques"
- [ ] "Road trip Agadir Essaouira — Itinéraire et conseils"
- [ ] "Conduire au Maroc — Tout ce qu'il faut savoir"
- [ ] "Les plus belles routes du Maroc en voiture"
- [ ] "Location voiture Maroc — Prix et astuces"

#### English Articles (Secondary — captures tourists)
- [ ] "Agadir Airport Car Rental — Complete Guide"
- [ ] "Best Road Trips from Marrakech"
- [ ] "Driving Tips for Tourists in Morocco"
- [ ] "Agadir to Essaouira Road Trip Guide"
- [ ] "Cheapest Car Rental in Morocco — What to Know"
- [ ] "Marrakech to Ouarzazate — Desert Road Trip"

---

## PHASE 4 — Local SEO & Off-Page (Ongoing)

### Google Business Profile
- [ ] Create & verify GBP for Agadir location
- [ ] Create & verify GBP for Marrakech location
- [ ] Add photos weekly (cars, office, happy customers)
- [ ] Post updates weekly (offers, new cars, travel tips)
- [ ] Collect real reviews from customers (aim for 20+ reviews)

### Local Directories & Backlinks
- [ ] List on TripAdvisor
- [ ] List on Morocco travel directories
- [ ] List on airport rental comparison sites
- [ ] Partner with local hotels/riads for referral links
- [ ] Reach out to Morocco travel bloggers for features
- [ ] Submit to Yelp, Yellow Pages Morocco, PagesJaunes.ma

### Social Media
- [ ] Instagram — Post cars with Agadir/Marrakech location tags
- [ ] Facebook — Share blog articles, customer testimonials
- [ ] Use Facebook Pixel data (already installed) for retargeting ads
- [ ] Consider Google Ads for "location voiture agadir" (high-intent keyword)

### WhatsApp Integration
- [ ] Add click-to-WhatsApp button on all public pages
- [ ] Add WhatsApp to structured data contact info
- [ ] WhatsApp is the #1 messaging app in Morocco — essential for conversions

---

## PHASE 5 — Advanced SEO (Months 3-6)

### Structured Data Enhancements
- [ ] Add `Organization` schema to homepage
- [ ] Add `ContactPoint` schema globally (phone, WhatsApp, email)
- [ ] Add `BreadcrumbList` schema to all pages
- [ ] Add `Vehicle` schema to individual car pages
- [ ] Add `LocalBusiness` schema to each city page
- [ ] Verify all schema with Google Rich Results Test

### Performance & Core Web Vitals
- [ ] Run Lighthouse audit and fix issues
- [ ] Optimize image sizes (some backgrounds are 300-600KB)
- [ ] Add lazy loading for below-fold images
- [ ] Verify SSR is working correctly for Googlebot
- [ ] Test with Google PageSpeed Insights

### Multilingual SEO
- [ ] Add proper hreflang tags to ALL pages (not just city pages)
- [ ] Consider full French version of the site (fr.aguinanecars.com or /fr/)
- [ ] Arabic content for local Moroccan searches
- [ ] Ensure date-fns locale is set correctly per user language

### Image SEO
- [ ] Add image sitemap to `SitemapController.php`
- [ ] Add descriptive alt text to all car images
- [ ] Optimize file names (e.g., `dacia-duster-agadir-rental.webp` instead of `car-1.webp`)

---

## Priority Matrix

```
HIGH IMPACT + LOW EFFORT (Do First):
├── Google Business Profile (Agadir + Marrakech)
├── Fix .htaccess (gzip, cache)
├── Remove fake reviews from schema
├── Add canonical to Our Vehicles page
└── Submit sitemap to Google Search Console

HIGH IMPACT + HIGH EFFORT (Plan & Execute):
├── Individual car detail pages (30-50 pages)
├── Blog system + 12 articles
├── 4 new city landing pages
└── FAQ sections with schema

LOW IMPACT + LOW EFFORT (Quick Wins):
├── Add manifest.json
├── Fix OG image paths
├── Add hreflang to homepage
└── Cross-link city pages

LOW IMPACT + HIGH EFFORT (Later):
├── Full French site version
├── Image sitemap
├── Advanced schema types
└── Arabic content expansion
```

---

## Expected Timeline

| Milestone | Target |
|-----------|--------|
| Phase 1 complete (technical fixes) | Week 1 |
| First pages indexed in Google | Weeks 2-3 |
| Phase 2 complete (content expansion) | Week 4 |
| First organic visitors | Weeks 4-6 |
| Phase 3 complete (blog launched) | Week 8 |
| Ranking page 1 for long-tail keywords | Month 3 |
| Ranking page 1 for "location voiture agadir" | Month 4-6 |
| Consistent daily organic traffic | Month 6-9 |
| Local SEO dominance in Agadir | Month 9-12 |

---

## Notes
- French keywords have MUCH higher volume in Morocco than English — prioritize French content
- Google Business Profile is the single most impactful thing for local "near me" searches
- Each new indexed page is a new entry point from Google — more pages = more chances to rank
- Real customer reviews on Google are worth more than any technical SEO fix
- Competitor analysis needed: search "location voiture agadir" and study who ranks #1-5
