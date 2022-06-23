const express = require("express");
const {
  getCart,
  createCart,
  updateCart,
  deleteCart,
  getAllCarts,
} = require("../controllers/Cart.controller");

const router = express.Router();

router.get("/:id", getCart);

router.post("/", createCart);

router.put("/:id", updateCart);

router.delete("/:id", deleteCart);

router.get("/", getAllCarts);

module.exports = router;
