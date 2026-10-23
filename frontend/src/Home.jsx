import React, { useMemo, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { Search, Heart, ShoppingBag, ArrowUpRight, ArrowRight, Truck, ShieldCheck, Gift, Headset, Plus, Minus, Check, PackageSearch } from 'lucide-react'
import { products, categories, money } from './data'
import SEO from './SEO'
import { useStore, imgFallback } from './shared'
import { ServiceStrip, SectionTitle, ProductGrid } from './Layout'
import { Footer } from './Layout'
function Home(){
 const newProducts=products.filter(p=>p.tag==='New arrival'||p.tag==='Bestseller').slice(0,4)
 return <><SEO title="Lumière — Jewellery, Elevated" description="Discover refined fashion jewellery designed to make every moment unforgettable." path="/"/>
  <main>
   <section className="hero page-wrap"><div className="hero-image"><img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=2000&q=90" alt="Gold-tone jewellery styled for a luxury campaign" onError={e=>e.currentTarget.src=imgFallback}/><div className="hero-vignette"/></div><div className="hero-content"><span className="eyebrow">THE NEW SEASON EDIT</span><h1>JEWELLERY,<br/><em>ELEVATED.</em></h1><p>Discover refined statement pieces designed to make every moment unforgettable.</p><div className="hero-actions"><Link className="btn btn-dark" to="/shop">SHOP THE COLLECTION <ArrowUpRight size={15}/></Link><Link className="btn btn-outline" to="/story">DISCOVER OUR WORLD</Link></div></div><div className="hero-caption">A STUDY IN FORM & LIGHT <span>01 / 04</span></div></section>
   <section className="category-row page-wrap">{categories.map((c,i)=><Link to={`/shop?category=${c.name}`} className="category-tile" key={c.name}><div className="category-image"><img src={c.image} alt={`${c.name} collection`} onError={e=>e.currentTarget.src=imgFallback}/><span>0{i+1}</span></div><div className="category-copy"><div><h3>{c.name}</h3><small>EXPLORE COLLECTION</small></div><ArrowUpRight size={18}/></div></Link>)}</section>
   <section className="section page-wrap"><SectionTitle eyebrow="THE LUMIÈRE EDIT" title="New Arrivals" copy="Considered pieces. Distinctive details. Your new everyday favourites." link="VIEW ALL PIECES" to="/shop?sort=new"/><ProductGrid items={newProducts}/></section>
   <section className="campaign"><img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=2000&q=90" alt="Close-up of gold jewellery and elegant styling" onError={e=>e.currentTarget.src=imgFallback}/><div className="campaign-shade"/><div className="campaign-content"><span className="eyebrow light">A LITTLE EXTRAORDINARY</span><h2>MADE TO BE<br/><em>NOTICED.</em></h2><p>Distinctive designs. Refined details.<br/>A signature of your own.</p><Link className="btn btn-gold" to="/shop?category=Earrings">EXPLORE STATEMENT JEWELLERY <ArrowUpRight size={15}/></Link></div></section>
   <section className="story-preview page-wrap"><div className="story-image"><img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=85" alt="Detailed gold-tone ring in warm natural light" onError={e=>e.currentTarget.src=imgFallback}/></div><div className="story-text"><span className="eyebrow">THE LUMIÈRE POINT OF VIEW</span><h2>THE ART OF<br/><em>EVERYDAY ELEGANCE</em></h2><p>Discover thoughtfully selected jewellery that brings together contemporary design, timeless inspiration and the beauty of personal expression.</p><Link className="under-link" to="/story">OUR STORY <ArrowUpRight size={15}/></Link></div><div className="packaging-image"><img src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=900&q=85" alt="Thoughtful neutral-toned gift packaging" onError={e=>e.currentTarget.src=imgFallback}/><span>THE LUMIÈRE GIFTING EDIT</span></div></section>
   <ServiceStrip/>
   <section className="newsletter-band"><span className="eyebrow">A NOTE FROM LUMIÈRE</span><h2>Good things, thoughtfully chosen.</h2><p>Join our world for considered edits and first looks at new arrivals.</p><Link className="btn btn-dark" to="/contact">GET IN TOUCH <ArrowRight size={15}/></Link></section>
  </main><Footer/></>
}

export default Home
