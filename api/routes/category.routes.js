const express = require("express");
const {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
} = require("../controllers/Category.controller");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.get("/:name", getCategory);

router.post("/", verifyAdmin, createCategory);

router.put("/:name", verifyAdmin, updateCategory);

router.delete("/:name", verifyAdmin, deleteCategory);

router.get("/", getAllCategories);

module.exports = router;
