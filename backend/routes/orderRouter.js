import express from 'express'
import { placeOrder, userOrders, allOrders, updateStatus, placeOrderRazorpay, verifyRazorpay, placeOrderStripe } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment Features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)
orderRouter.post('/stripe', authUser, placeOrderStripe);

// User Feature
orderRouter.post('/userorders', authUser, userOrders)

//Verifies payment
orderRouter.post('/verifyRazorpay', authUser, verifyRazorpay)

export default orderRouter