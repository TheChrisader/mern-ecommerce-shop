const Cart = require("../models/Cart.model");

const createCart = async (userId) => {
  const newCart = new Cart({ user: userId, products: undefined });
  await newCart.save();
};

module.exports = createCart;
