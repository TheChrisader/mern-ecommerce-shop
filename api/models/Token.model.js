const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      expires: "3d",
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Token", TokenSchema);
