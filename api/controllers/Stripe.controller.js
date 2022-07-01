const { STRIPE_KEY } = require("../config/config");
const stripe = require("stripe")(STRIPE_KEY);

const createPayment = async (req, res, next) => {
  try {
    const stripeRes = await stripe.charges.create({
      amount: req.body.amount,
      currency: "usd",
      source: req.body.token,
    });
    res.status(200).json(stripeRes);
  } catch (err) {
    next(err);
  }
};

module.exports = createPayment;
