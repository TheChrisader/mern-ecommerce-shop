const router = require("express").Router();

const createPayment = require("../controllers/Stripe.controller");
const { verifyUser } = require("../utils/verifyToken");

router.post("/", verifyUser, createPayment);

module.exports = router;
