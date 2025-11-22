import express from 'express';
import { createOrder, getOrdersByUser } from '../controllers/orderController.js';

const router = express.Router();

router.post('/create', createOrder);
router.get('/:userId', getOrdersByUser);

export default router;
