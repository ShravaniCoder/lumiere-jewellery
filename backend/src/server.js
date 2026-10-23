import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import mongoose from 'mongoose'
import productRoutes from './routes/products.js'
import orderRoutes from './routes/orders.js'
import contactRoutes from './routes/contact.js'

const app = express()
app.use(helmet())
app.use(cors({origin:process.env.FRONTEND_URL || 'http://localhost:5173'}))
app.use(express.json({limit:'1mb'}))
app.use(morgan('dev'))
app.get('/api/health',(req,res)=>res.json({ok:true,service:'Lumière API'}))
app.use('/api/products',productRoutes)
app.use('/api/orders',orderRoutes)
app.use('/api/contact',contactRoutes)
app.use((err,req,res,next)=>{console.error(err);res.status(500).json({message:'Unexpected server error'})})
const port=process.env.PORT||5000
if(process.env.MONGODB_URI){
 mongoose.connect(process.env.MONGODB_URI).then(()=>console.log('MongoDB connected')).catch(e=>console.error('MongoDB connection failed:',e.message))
}else console.warn('MONGODB_URI missing: database features unavailable')
app.listen(port,()=>console.log(`Lumière API listening on ${port}`))
