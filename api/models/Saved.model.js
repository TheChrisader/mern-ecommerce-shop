const mongoose = require("mongoose");

const SavedItemsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    product: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        unique: true,
      },
    ],
    quantity: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SavedItems", SavedItemsSchema);
