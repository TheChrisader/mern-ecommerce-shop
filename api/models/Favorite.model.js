const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
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
        productPrice: {
          type: Number,
        },
        inStock: {
          type: Boolean,
          default: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Favorite", FavoriteSchema);
