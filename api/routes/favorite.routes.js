const express = require("express");
const {
  getFavorite,
  createFavorite,
  updateFavorite,
  deleteFavorite,
  getAllFavorites,
} = require("../controllers/Favorite.controller");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.get("/:id", verifyUser, getFavorite);

router.post("/", verifyUser, createFavorite);

router.put("/:id", verifyUser, updateFavorite);

router.delete("/:id", verifyUser, deleteFavorite);

router.get("/", verifyAdmin, getAllFavorites);

module.exports = router;
