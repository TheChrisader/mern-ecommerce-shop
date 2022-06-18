const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    savedItems: {
      type: mongoose.Types.ObjectId,
      ref: "SavedItems",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
