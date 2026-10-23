import React, { useMemo, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { Search, Heart, ShoppingBag, ArrowUpRight, ArrowRight, Truck, ShieldCheck, Gift, Headset, Plus, Minus, Check, PackageSearch } from 'lucide-react'
import { products, categories, money, collections } from './data'
import SEO from './SEO'
import { useStore, imgFallback } from './shared'
import { Footer } from './Layout'
function Collections(){
 return <><SEO title="Curated Jewellery Collections" description="Explore Lumière's curated jewellery edits: Everyday Elegance, Statement Pieces, The Layering Edit and Evening Edit." path="/collections"/><main className="collections-editorial page-wrap">
  <section className="collections-masthead"><span className="eyebrow">THE LUMIÈRE COLLECTIONS</span><h1>Jewellery for<br/><em>every version of you.</em></h1><p>Four considered edits. Distinctive details. Pieces that make your own style feel unmistakably yours.</p><span className="masthead-index">CURATED EDITIONS &nbsp; / &nbsp; 01—04</span></section>
  <section className="editorial-collection-list">{collections.map((c,i)=><article key={c.slug} className={`editorial-collection ${i%2?'editorial-reverse':''}`}>
   <Link to={`/collections/${c.slug}`} className="editorial-collection-image" aria-label={`Explore ${c.title}`}><img src={c.image} alt={c.alt} loading="lazy" onError={e=>e.currentTarget.src=imgFallback}/><span className="editorial-number">0{i+1} / 04</span></Link>
   <div className="editorial-collection-copy"><span className="eyebrow">{c.kicker}</span><h2>{c.title}</h2><p>{c.description}</p><div className="editorial-product-count">{c.productIds.length} CONSIDERED PIECES <span/></div><Link className="btn btn-dark" to={`/collections/${c.slug}`}>EXPLORE COLLECTION <ArrowUpRight size={15}/></Link></div>
  </article>)}</section>
  <section className="collections-signoff"><span className="eyebrow light">LUMIÈRE / THE ART OF DETAIL</span><h2>Find the pieces<br/><em>that feel like you.</em></h2><Link className="btn btn-gold" to="/shop">SHOP ALL JEWELLERY <ArrowRight size={15}/></Link></section>
 </main><Footer/></>
}

export default Collections
