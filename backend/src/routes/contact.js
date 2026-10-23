import {Router} from 'express'
import ContactEnquiry from '../models/ContactEnquiry.js'
const router=Router()
router.post('/',async(req,res,next)=>{try{
 const {name,email,subject,message}=req.body||{}
 if(!name||!email||!message)return res.status(400).json({message:'Name, email and message are required'})
 if(String(name).length>120||String(email).length>254||String(message).length>5000)return res.status(400).json({message:'Input is too long'})
 const enquiry=await ContactEnquiry.create({name:String(name).trim(),email:String(email).trim().toLowerCase(),subject:String(subject||'').slice(0,160),message:String(message).trim()})
 res.status(201).json({message:'Enquiry received',id:enquiry._id})
}catch(e){next(e)}})
export default router
