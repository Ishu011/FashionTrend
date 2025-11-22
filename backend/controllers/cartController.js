import Cart from '../models/Cart.js';

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId }).populate('items.product');
    if (!cart) return res.json({ success: true, data: { items: [] } });
    res.json({ success: true, data: cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { userId, productId, qty = 1, size } = req.body;
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = await Cart.create({ user: userId, items: [{ product: productId, qty, size }] });
    } else {
      const idx = cart.items.findIndex(i => i.product.toString() === productId);
      if (idx > -1) {
        cart.items[idx].qty += qty;
      } else {
        cart.items.push({ product: productId, qty, size });
      }
      await cart.save();
    }
    res.json({ success: true, data: cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    let cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(400).json({ success: false, message: 'Cart not found' });
    cart.items = cart.items.filter(i => i._id.toString() !== itemId);
    await cart.save();
    res.json({ success: true, data: cart });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
