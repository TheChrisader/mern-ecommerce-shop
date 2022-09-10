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
    profileImage: {
      type: String,
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
      type: [
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
          id: {
            type: String,
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

module.exports = mongoose.model("User", UserSchema);
