const express = require("express");
const {
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
} = require("../controllers/Order.controller");
const { verifyAdmin, verifyUser } = require("../utils/verifyToken");

const router = express.Router();

router.get("/:id", verifyUser, getOrder);

router.post("/", verifyUser, createOrder);

router.put("/:id", verifyUser, updateOrder);

router.delete("/:id", verifyUser, deleteOrder);

router.get("/", verifyAdmin, getAllOrders);

module.exports = router;
