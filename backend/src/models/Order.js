import mongoose from 'mongoose'
const orderSchema = new mongoose.Schema({
 orderNumber:{type:String,unique:true,index:true},
 customer:{name:{type:String,required:true},email:{type:String,required:true,lowercase:true},phone:{type:String,required:true}},
 address:{line1:String,city:String,state:String,pincode:String,country:{type:String,default:'India'}},
 items:[{productId:{type:mongoose.Schema.Types.ObjectId,ref:'Product'},name:String,sku:String,quantity:{type:Number,min:1},unitPrice:{type:Number,min:0}}],
 subtotal:{type:Number,required:true,min:0},shipping:{type:Number,default:0,min:0},total:{type:Number,required:true,min:0},
 paymentStatus:{type:String,enum:['pending','paid','failed','refunded'],default:'pending'},
 orderStatus:{type:String,enum:['placed','processing','shipped','delivered','cancelled'],default:'placed'},
 paymentProvider:String,paymentReference:String,courier:String,trackingNumber:String
},{timestamps:true})
export default mongoose.model('Order',orderSchema)
