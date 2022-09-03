const Cart = require("../models/Cart.model");

const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.params.id });
    res.status(200).json(cart);
  } catch (err) {
    next(err);
  }
};

const updateCart = async (req, res, next) => {
  try {
    const updatedCart = await Cart.findOneAndUpdate(
      { user: req.params.id },
      {
        $set: { ...req.body, user: undefined },
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    next(err);
  }
};

const deleteCart = async (req, res, next) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart deleted");
  } catch (err) {
    next(err);
  }
};

const getAllCarts = async (req, res, next) => {
  try {
    let newQuery = req.query.new;
    let carts;

    if (newQuery) {
      carts = await Cart.find().sort({ createdAt: -1 });
    } else {
      carts = await Cart.find();
    }

    res.status(200).json(carts);
  } catch (err) {
    next(err);
  }
};

module.exports = { getCart, updateCart, deleteCart, getAllCarts };
