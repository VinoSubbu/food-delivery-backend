import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { listOrders, placeOrder, updateStatus, userOrder, verifyOrder } from '../controllers/orderController.js'

const orderRouter = express.Router();

orderRouter.post('/plcae', authMiddleware, placeOrder)
orderRouter.post('/verify', verifyOrder)
orderRouter.post('/userorders', authMiddleware, userOrder)
orderRouter.get('/list', listOrders)
orderRouter.post('/status',updateStatus)

export default orderRouter