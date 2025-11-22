import Wishlist from '../models/Wishlist.js';

export const getWishlist = async (req, res) => {
  try {
    const wl = await Wishlist.findOne({ user: req.params.userId }).populate('items');
    if (!wl) return res.json({ success: true, data: { items: [] } });
    res.json({ success: true, data: wl });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const addToWishlist = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    let wl = await Wishlist.findOne({ user: userId });
    if (!wl) wl = await Wishlist.create({ user: userId, items: [productId] });
    else {
      if (!wl.items.includes(productId)) wl.items.push(productId);
      await wl.save();
    }
    res.json({ success: true, data: wl });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    let wl = await Wishlist.findOne({ user: userId });
    if (!wl) return res.status(400).json({ success: false, message: 'Wishlist not found' });
    wl.items = wl.items.filter(i => i.toString() !== itemId);
    await wl.save();
    res.json({ success: true, data: wl });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
