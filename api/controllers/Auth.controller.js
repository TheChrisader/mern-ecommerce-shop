const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const createError = require("../utils/error");
const { generateAuthToken } = require("../utils/verifyToken");

const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "User not found."));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username"));

    const token = await generateAuthToken({
      id: user._id,
      isAdmin: user.isAdmin,
    });

    const { password, ...details } = user._doc;

    res
      .cookie("token", token, {
        maxAge: 3 * 86400000,
        httpOnly: true,
      })
      .status(200)
      .json({ ...details });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };
