import mongoose from 'mongoose'
const schema = new mongoose.Schema({name:{type:String,required:true},email:{type:String,required:true},subject:String,message:{type:String,required:true},status:{type:String,enum:['new','in_progress','resolved'],default:'new'}},{timestamps:true})
export default mongoose.model('ContactEnquiry',schema)
