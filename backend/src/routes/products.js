import {Router} from 'express'
import Product from '../models/Product.js'
const router=Router()
router.get('/',async(req,res,next)=>{try{
 const filter={active:true};if(req.query.category)filter.category=req.query.category
 if(req.query.q)filter.name={$regex:String(req.query.q).slice(0,80),$options:'i'}
 if(req.query.maxPrice)filter.price={$lte:Number(req.query.maxPrice)}
 const sort=req.query.sort==='price-low'?{price:1}:req.query.sort==='price-high'?{price:-1}:{createdAt:-1}
 res.json(await Product.find(filter).sort(sort).limit(100).lean())
}catch(e){next(e)}})
router.get('/:id',async(req,res,next)=>{try{const p=await Product.findOne({_id:req.params.id,active:true}).lean();if(!p)return res.status(404).json({message:'Product not found'});res.json(p)}catch(e){next(e)}})
export default router
