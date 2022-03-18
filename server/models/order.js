const mongoose = require('mongoose');

// ORDER MODEL
const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        qty: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: 'pending' },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Order', orderSchema);
