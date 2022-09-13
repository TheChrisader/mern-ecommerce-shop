const express = require("express");
const {
  getCart,
  updateCart,
  deleteCart,
  getAllCarts,
} = require("../controllers/Cart.controller");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.get("/:id", verifyUser, getCart);

router.put("/:id", verifyUser, updateCart);

router.delete("/:id", verifyUser, deleteCart);

router.get("/", verifyAdmin, getAllCarts);

module.exports = router;
