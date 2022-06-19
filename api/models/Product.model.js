const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: String,
    mainImage: {
      type: String,
      required: true,
    },
    images: [{ type: String }],
    description: {
      type: String,
      required: true,
    },
    categories: [
      {
        type: String,
        required: true,
      },
    ],
    seller: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    price: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      default: 0,
    },
    colors: [
      {
        type: String,
        default: "",
      },
    ],
    sizes: [
      {
        type: String,
        default: "",
      },
    ],
    quantity: {
      type: Number,
      default: 0,
    },
    isOutOfStock: {
      type: Boolean,
      default: false,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
