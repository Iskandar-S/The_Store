const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productTitle: { type: String, required: true },
  manufacturer: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, required: false },
  features: { type: Array, required: false },
  image: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
