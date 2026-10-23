import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
 name:{type:String,required:true,trim:true},slug:{type:String,unique:true,sparse:true},
 description:{type:String,default:''},category:{type:String,required:true,index:true},
 price:{type:Number,required:true,min:0},compareAtPrice:{type:Number,min:0},
 sku:{type:String,unique:true,sparse:true},images:[{url:String,alt:String}],
 material:{type:String,default:''},finish:{type:String,default:''},
 inventory:{type:Number,default:0,min:0},active:{type:Boolean,default:true},
 tags:[String]
},{timestamps:true})
export default mongoose.model('Product',productSchema)
