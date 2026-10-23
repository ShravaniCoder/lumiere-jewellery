import React, { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X, ArrowUpRight, ArrowRight, Truck, ShieldCheck, Gift, Headset, Heart, Plus } from 'lucide-react'
import { products, categories, money } from './data'
import { useStore, imgFallback } from './shared'
function Header(){
 const {cart}=useStore(); const [open,setOpen]=useState(false); const [search,setSearch]=useState(false); const [query,setQuery]=useState('')
 const nav=[['Home','/'],['Shop All','/shop'],['Collections','/collections'],['Our Story','/story'],['Contact Us','/contact'],['Track My Order','/track-order']]
 return <header className="sticky top-0 z-50 border-b border-espresso/10 bg-ivory/95 backdrop-blur">
  <div className="announcement">COMPLIMENTARY SHIPPING ON ORDERS OVER ₹1,999 <span>·</span> MADE FOR YOUR EVERYDAY ELEGANCE</div>
  <div className="site-header page-wrap">
   <button className="icon-btn md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
   <Link to="/" className="wordmark"><span>LUMIÈRE</span><small>FASHION JEWELLERY</small></Link>
   <nav className="desktop-nav">{nav.map(([n,p])=><NavLink key={n} to={p} end={p==='/'}>{n}</NavLink>)}</nav>
   <div className="header-actions">
    <button className="icon-btn" onClick={()=>setSearch(!search)} aria-label="Search"><Search size={18}/></button>
    <Link className="icon-btn relative" to="/cart" aria-label="Shopping bag"><ShoppingBag size={18}/>{cart.reduce((a,x)=>a+x.qty,0)>0&&<i className="count">{cart.reduce((a,x)=>a+x.qty,0)}</i>}</Link>
   </div>
  </div>
  {search&&<form className="search-bar page-wrap" onSubmit={e=>{e.preventDefault();location.href='/shop?search='+encodeURIComponent(query)}}><Search size={17}/><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search jewellery, styles and collections..."/><button className="text-link">SEARCH</button></form>}
  {open&&<nav className="mobile-nav">{nav.map(([n,p])=><Link onClick={()=>setOpen(false)} key={n} to={p}>{n}<ArrowUpRight size={15}/></Link>)}</nav>}
 </header>
}

function Footer(){
 const [email,setEmail]=useState('');const [sent,setSent]=useState(false)
 return <footer className="footer">
  <div className="footer-top page-wrap">
   <div className="footer-brand"><Link to="/" className="wordmark wordmark-light"><span>LUMIÈRE</span><small>FASHION JEWELLERY</small></Link><p>Thoughtfully selected pieces.<br/>Made to be part of your story.</p><div className="socials"><a href="https://instagram.com/" aria-label="Instagram" title="Instagram">IG</a><a href="https://linkedin.com/" aria-label="LinkedIn" title="LinkedIn">in</a></div></div>
   <div><h4>DISCOVER</h4><Link to="/shop">Shop All Jewellery</Link><Link to="/collections">Collections</Link><Link to="/shop">Shop All</Link><Link to="/story">Our Story</Link></div>
   <div><h4>CLIENT CARE</h4><Link to="/contact">Contact Us</Link><Link to="/track-order">Track My Order</Link></div>
   <div className="newsletter"><h4>LETTERS FROM LUMIÈRE</h4><p>New arrivals, considered edits and little things worth discovering.</p><form onSubmit={e=>{e.preventDefault();setSent(true)}}><input type="email" required placeholder="Your email address" value={email} onChange={e=>setEmail(e.target.value)}/><button aria-label="Subscribe"><ArrowRight/></button></form>{sent&&<small className="success">Thank you for joining us.</small>}<small>Sign up for updates from Lumière.</small></div>
  </div>
  <div className="footer-bottom page-wrap"><span>© {new Date().getFullYear()} LUMIÈRE. ALL RIGHTS RESERVED.</span><div><Link to="/contact">CONTACT</Link><Link to="/track-order">TRACK ORDER</Link><span>INDIA · INR ₹</span></div></div>
 </footer>
}

function ServiceStrip(){return <div className="service-strip page-wrap">{[[ShieldCheck,'Secure Payments'],[Truck,'Reliable Shipping'],[Gift,'Thoughtful Packaging'],[Headset,'Customer Care']].map(([I,t])=><div key={t}><I/><span>{t}</span></div>)}</div>}

function SectionTitle({eyebrow,title,copy,link,to='/shop'}){return <div className="section-title"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>{link&&<Link className="under-link" to={to}>{link}<ArrowUpRight size={15}/></Link>}</div>}

function ProductCard({product}) {
 const {add,wishlist,toggleWish}=useStore();const wished=wishlist.includes(product.id);const navigate=useNavigate()
 return <article className="product-card reveal-card">
  <div className="product-photo"><Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}><img src={product.image} alt={product.alt} loading="lazy" onError={e=>{e.currentTarget.src=imgFallback}}/></Link>
   {product.tag&&<span className="product-tag">{product.tag}</span>}
   <button className={`wish-btn ${wished?'wished':''}`} onClick={()=>toggleWish(product.id)} aria-label={wished?'Remove from wishlist':'Add to wishlist'}><Heart size={17} fill={wished?'currentColor':'none'}/></button>
   <div className="product-actions"><button className="quick-add" onClick={()=>add(product)}>ADD TO BAG <Plus size={14}/></button><button className="quick-buy" onClick={()=>{add(product);navigate('/checkout')}}>BUY NOW <ArrowUpRight size={13}/></button></div>
  </div><Link to={`/product/${product.id}`} className="product-name">{product.name}</Link><div className="product-meta"><span>{money(product.price)}</span><span>{product.category}</span></div>
 </article>
}

function ProductGrid({items}){return <div className="product-grid">{items.map(p=><ProductCard key={p.id} product={p}/>)}</div>}

function ScrollTop(){const {pathname}=useLocation();React.useEffect(()=>{window.scrollTo({top:0,behavior:'instant'})},[pathname]);return null}

export { Header, Footer, ServiceStrip, SectionTitle, ProductCard, ProductGrid, ScrollTop }
