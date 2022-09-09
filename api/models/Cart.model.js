const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        productName: {
          type: String,
        },
        productSlug: {
          type: String,
        },
        productImage: {
          type: String,
        },
        quantity: {
          type: Number,
        },
        productPrice: {
          type: Number,
        },
        productDiscount: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
