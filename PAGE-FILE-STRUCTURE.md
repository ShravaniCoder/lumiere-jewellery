# Lumière page file structure
Each requested page has its own JSX file: Home.jsx, Shop.jsx, Collections.jsx, CollectionProducts.jsx, ProductDetail.jsx, Cart.jsx, Checkout.jsx, Story.jsx, Contact.jsx and TrackOrder.jsx.
Shared navigation/footer and reusable components live in Layout.jsx. Cart and wishlist state remain shared in App.jsx. The mobile navigation has one Contact Us destination only. Curated collections and their product IDs are centralised in data.js and reused by collection landing/detail pages.
