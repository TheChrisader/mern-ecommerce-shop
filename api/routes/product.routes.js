const express = require("express");
const {
  makeProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} = require("../controllers/Product.controller");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.post("/", verifyAdmin, makeProduct);

router.get("/:slug", getProduct);

router.put("/:id", verifyAdmin, updateProduct);

router.delete("/:id", verifyAdmin, deleteProduct);

router.get("/", getAllProducts);

module.exports = router;
