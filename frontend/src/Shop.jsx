import React, { useMemo, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { Search, Heart, ShoppingBag, ArrowUpRight, ArrowRight, Truck, ShieldCheck, Gift, Headset, Plus, Minus, Check, PackageSearch } from 'lucide-react'
import { products, categories, money } from './data'
import SEO from './SEO'
import { useStore, imgFallback } from './shared'
import { ProductGrid } from './Layout'
import { Footer } from './Layout'
function Shop(){
 const loc=useLocation(),params=new URLSearchParams(loc.search);const [cat,setCat]=useState(params.get('category')||'All');const [sort,setSort]=useState(params.get('sort')==='new'?'new':'featured');const [search,setSearch]=useState(params.get('search')||'');const [max,setMax]=useState(2500)
 const items=useMemo(()=>{let a=products.filter(p=>(cat==='All'||p.category===cat)&&p.price<=max&&p.name.toLowerCase().includes(search.toLowerCase()));if(sort==='price-low')a.sort((x,y)=>x.price-y.price);if(sort==='price-high')a.sort((x,y)=>y.price-x.price);if(sort==='new')a.sort((x,y)=>(y.tag==='New arrival')-(x.tag==='New arrival'));return a},[cat,sort,max,search])
 return <><SEO title="Shop All Jewellery" description="Shop Lumière's considered edit of earrings, rings, bracelets and necklaces." path="/shop"/><main className="page-wrap shop-page"><div className="shop-banner"><div><span className="eyebrow">THE COMPLETE EDIT</span><h1>All Jewellery</h1><p>Pieces to keep. Details to remember.</p></div><img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=85" alt="Lumière jewellery collection" onError={e=>e.currentTarget.src=imgFallback}/></div>
  <div className="shop-layout"><aside className="filters"><div className="filter-heading"><span>FILTERS</span><button onClick={()=>{setCat('All');setMax(2500);setSearch('')}}>CLEAR ALL</button></div><label className="filter-label">CATEGORY</label>{['All','Earrings','Rings','Bracelets','Necklaces'].map(c=><label className="check-row" key={c}><input type="radio" name="cat" checked={cat===c} onChange={()=>setCat(c)}/>{c}</label>)}<div className="filter-divider"/><label className="filter-label">PRICE RANGE</label><input type="range" min="500" max="2500" step="100" value={max} onChange={e=>setMax(Number(e.target.value))}/><div className="price-range"><span>₹500</span><span>₹{max.toLocaleString('en-IN')}</span></div><div className="filter-divider"/><label className="filter-label">FIND A PIECE</label><input className="field" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search jewellery"/></aside>
  <div className="shop-results"><div className="results-top"><span>{items.length} PIECES</span><label>SORT BY <select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="new">New arrivals</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label></div>{items.length?<ProductGrid items={items}/>:<div className="empty-state"><h2>No pieces found</h2><p>Try another category or adjust your filters.</p><button className="btn btn-dark" onClick={()=>{setCat('All');setMax(2500);setSearch('')}}>CLEAR FILTERS</button></div>}</div></div></main><Footer/></>
}

export default Shop
