# Lumière — Luxury Jewellery E-commerce

A responsive React + Vite + Tailwind CSS storefront with a Node.js/Express API starter and MongoDB integration points.

## Included
- Home, Shop All, Collections, dedicated New Arrivals/Earrings/Rings/Necklaces/Bracelets/Bestsellers pages, Product Details, Cart, Checkout, Our Story, Contact, Track Order, Wishlist, Account placeholder, Admin starter, FAQs and policy pages
- Responsive luxury design inspired by the supplied reference image
- Search, category filtering, sorting, wishlist, cart quantity controls, local cart persistence
- Admin dashboard starter for products and orders
- Express API starter, MongoDB models, environment configuration
- Per-route SEO titles/descriptions, canonical links, Open Graph metadata, JSON-LD, sitemap and robots.txt
- Indian rupee pricing and sample product catalogue

## Requirements
- Node.js 20+ recommended
- MongoDB Atlas or local MongoDB (optional for frontend demo)
- Razorpay account and courier provider credentials for production integrations

See `PROJECT-PAGES.md` for the full route inventory.

## Run the frontend
```bash
cd frontend
npm install
npm run dev
```
Open the local URL shown by Vite.

## Run the backend
```bash
cd backend
cp .env.example .env
# Fill in MONGODB_URI and other values
npm install
npm run dev
```
API defaults to `http://localhost:5000`.

Set `VITE_API_URL=http://localhost:5000/api` in `frontend/.env` when connecting the frontend to the backend.

## Build
```bash
cd frontend
npm run build
npm run preview
```

## SEO before launch
1. Replace `https://www.example.com` in `frontend/public/robots.txt`, `frontend/public/sitemap.xml`, and the SEO component with your real domain.
2. Update product copy, product images, shipping/returns policies, contact information and social links.
3. Verify pages using Google Search Console after deployment.
4. For production SEO on a React SPA, consider prerendering/SSR (e.g. Next.js or a Vite prerender plugin) so crawlers receive page-specific HTML without relying on JavaScript execution. The site navigation is limited to the requested pages; collection categories are available through Collections and Shop All filters.

## Production integrations
- **Payments:** checkout UI is a demo flow. Add Razorpay server-side order creation and signature verification before accepting real payments. Never put secret keys in frontend environment variables.
- **Authentication:** admin route is a development starter, not production-secure. Add authentication, role checks, rate limiting, validation, audit logs and secure session/token handling before deployment.
- **Courier tracking:** tracking page is a UI starter. Connect your chosen courier API and verify tracking numbers server-side.
- **Images:** sample image URLs are remote Unsplash source URLs for design preview. Replace with licensed product photography or your own optimised WebP/AVIF assets before launch.
