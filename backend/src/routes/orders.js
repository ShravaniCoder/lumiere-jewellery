import {Router} from 'express'
import Order from '../models/Order.js'
const router=Router()
// Public order lookup intentionally returns only non-sensitive shipment status.
// Add rate limiting and stronger verification (order number + email/phone OTP) before production.
router.get('/track/:orderNumber',async(req,res,next)=>{try{
 const order=await Order.findOne({orderNumber:req.params.orderNumber}).select('orderNumber orderStatus courier trackingNumber createdAt').lean()
 if(!order)return res.status(404).json({message:'Order not found'})
 res.json(order)
}catch(e){next(e)}})
// Do not expose a public create-order endpoint until server-side price validation,
// inventory reservation, payment order creation and payment signature verification are implemented.
router.post('/',(req,res)=>res.status(501).json({message:'Checkout is not enabled. Configure server-side payment and order validation first.'}))
export default router
