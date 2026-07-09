import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongoose.js'
import connectCloudinary from './configs/cloudinary.js'
import userRouter from './routes/userRouter.js'
import productRouter from './routes/productRouter.js'

// App Config
const app = express()
const PORT = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(PORT, () => 
  console.log(`Server running on address http://localhost:${PORT}`)
)