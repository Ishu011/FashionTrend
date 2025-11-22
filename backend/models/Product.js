import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: String,
  category: String,
  price: Number,
  image: String,
  sizes: [String],
  description: String,
  rating: { type: Number, default: 0 },
  stock: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
