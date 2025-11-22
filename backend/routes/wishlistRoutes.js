import express from 'express';
import { getWishlist, addToWishlist, removeFromWishlist } from '../controllers/wishlistController.js';

const router = express.Router();

router.get('/:userId', getWishlist);
router.post('/add', addToWishlist);
router.post('/remove', removeFromWishlist);

export default router;
