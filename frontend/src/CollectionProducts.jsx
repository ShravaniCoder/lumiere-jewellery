import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products, collections } from './data'
import SEO from './SEO'
import { ProductGrid, SectionTitle, Footer } from './Layout'
import { imgFallback } from './shared'
export default function CollectionProducts(){
 const {slug}=useParams(); const selected=collections.find(item=>item.slug===slug); const c=selected||collections[0]; const items=products.filter(p=>c.productIds.includes(p.id))
 return <><SEO title={c.title} description={c.description} path={`/collections/${slug}`}/><main className="page-wrap shop-page"><div className="shop-banner"><div><span className="eyebrow">THE CURATED EDIT</span><h1>{c.title}</h1><p>{c.description}</p></div><img src={items[0]?.image||imgFallback} alt={c.title}/></div><div className="section"><SectionTitle eyebrow="SELECTED FOR YOU" title={c.title} copy="Discover pieces selected for this collection."/><ProductGrid items={items}/></div><Link className="under-link" to="/collections">BACK TO COLLECTIONS <ArrowRight size={15}/></Link></main><Footer/></>
}
