const express = require("express");
const {
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/User.controller");
const { verifyAdmin, verifyUser } = require("../utils/verifyToken");

const router = express.Router();

router.get("/:id", getUser);

router.get("/", verifyAdmin, getAllUsers);

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

module.exports = router;
