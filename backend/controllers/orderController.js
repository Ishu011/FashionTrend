import Order from '../models/Order.js';
import Cart from '../models/Cart.js';

export const createOrder = async (req, res) => {
  try {
    const { userId, address } = req.body;
    const cart = await Cart.findOne({ user: userId }).populate('items.product');
    if (!cart || cart.items.length === 0) return res.status(400).json({ success: false, message: 'Cart empty' });

    const products = cart.items.map(i => ({ product: i.product._id, qty: i.qty, price: i.product.price }));
    const totalAmount = products.reduce((acc, p) => acc + p.qty * p.price, 0);

    const order = await Order.create({ user: userId, products, totalAmount, address });
    cart.items = [];
    await cart.save();

    res.json({ success: true, data: order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId }).populate('products.product');
    res.json({ success: true, data: orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
