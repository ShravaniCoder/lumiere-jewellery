import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Store } from './shared'
import { Header, ScrollTop } from './Layout'
import Home from './Home'
import Shop from './Shop'
import Collections from './Collections'
import CollectionProducts from './CollectionProducts'
import ProductDetail from './ProductDetail'
import Cart from './Cart'
import Checkout from './Checkout'
import Story from './Story'
import Contact from './Contact'
import TrackOrder from './TrackOrder'
export default function App(){
 const [cart,setCart]=useState(()=>{try{return JSON.parse(localStorage.getItem('lumiere-cart')||'[]')}catch{return []}})
 const [wishlist,setWishlist]=useState(()=>{try{return JSON.parse(localStorage.getItem('lumiere-wishlist')||'[]')}catch{return []}})
 const saveCart=x=>{setCart(x);localStorage.setItem('lumiere-cart',JSON.stringify(x))}
 const add=(p,qty=1)=>saveCart(cart.some(x=>x.id===p.id)?cart.map(x=>x.id===p.id?{...x,qty:x.qty+qty}:x):[...cart,{...p,qty}])
 const changeQty=(id,qty)=>saveCart(qty<=0?cart.filter(x=>x.id!==id):cart.map(x=>x.id===id?{...x,qty}:x))
 const remove=id=>saveCart(cart.filter(x=>x.id!==id))
 const clearCart=()=>saveCart([])
 const toggleWish=id=>{const next=wishlist.includes(id)?wishlist.filter(x=>x!==id):[...wishlist,id];setWishlist(next);localStorage.setItem('lumiere-wishlist',JSON.stringify(next))}
 const value={cart,wishlist,add,changeQty,remove,clearCart,toggleWish}
 return <Store.Provider value={value}><ScrollTop/><Header/><Routes>
  <Route path="/" element={<Home/>}/><Route path="/shop" element={<Shop/>}/><Route path="/collections" element={<Collections/>}/>
  <Route path="/collections/:slug" element={<CollectionProducts/>}/><Route path="/product/:id" element={<ProductDetail/>}/>
  <Route path="/cart" element={<Cart/>}/><Route path="/checkout" element={<Checkout/>}/><Route path="/story" element={<Story/>}/>
  <Route path="/contact" element={<Contact/>}/><Route path="/track-order" element={<TrackOrder/>}/>
 </Routes></Store.Provider>
}
