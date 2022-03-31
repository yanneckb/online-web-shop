const mongoose = require('mongoose');

// CART MODEL
const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        qty: { type: Number, default: 1 },
        size: { type: Array },
        color: { type: Array },
      },
    ],
    qty: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Cart', cartSchema);
