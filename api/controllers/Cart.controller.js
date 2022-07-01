const Cart = require("../models/Cart.model");

const createCart = async (req, res, next) => {
  try {
    const newCart = new Cart(req.body);
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    next(err);
  }
};

const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findById(req.params.id);
    res.status(200).json(cart);
  } catch (err) {
    next(err);
  }
};

const updateCart = async (req, res, next) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
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

module.exports = { createCart, getCart, updateCart, deleteCart, getAllCarts };
