# Lumière — Requested Page Structure

The public website is limited to the pages requested by the client:

1. `/` — Home
2. `/shop` — Shop All with search, category/price filters and sorting
3. `/collections` — Earrings, Rings, Bracelets and Necklaces collections
4. `/product/:id` — Product details, photography, price, materials and Add to Bag
5. `/cart` — Shopping bag and order summary
6. `/checkout` — Delivery address and payment step interface
7. `/story` — Our Story
8. `/contact` — Contact Us
9. `/track-order` — Track My Order

The cart and checkout are separate routes within the requested “Shopping Bag & Checkout” journey. Category navigation is handled through Shop All filters and the Collections page; no separate category pages are included.

Replace the example domain in SEO configuration, `robots.txt`, and `sitemap.xml` before launch. Live payments, authentication and courier tracking require provider credentials and server-side integration.
