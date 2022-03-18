const mongoose = require('mongoose');

// CART MODEL
const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        qty: { type: Number, default: 1 },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Cart', cartSchema);
