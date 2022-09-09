const Order = require("../models/Order.model");

const createOrder = async (req, res, next) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    next(err);
  }
};

const getOrder = async (req, res, next) => {
  try {
    const order = await Order.findOne({ user: req.params.id });
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};

const updateOrder = async (req, res, next) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    next(err);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order deleted");
  } catch (err) {
    next(err);
  }
};

const getAllOrders = async (req, res, next) => {
  try {
    let newQuery = req.query.new;
    let orders;

    if (newQuery) {
      orders = await Order.find().sort({ createdAt: -1 });
    } else {
      orders = await Order.find();
    }

    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
};
