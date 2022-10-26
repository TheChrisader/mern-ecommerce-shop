const bcrypt = require("bcrypt");

const User = require("../models/User.model");

const createCart = require("../utils/createCart");
const createError = require("../utils/error");
const { generateAuthToken } = require("../utils/verifyToken");
const createGravatar = require("../utils/Gravatar");

const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const imageUrl = await createGravatar(req.body.email);

    const newUser = new User({
      ...req.body,
      password: hash,
      profileImage: imageUrl,
    });

    const savedUser = await newUser.save();

    await createCart(savedUser._id);

    const token = await generateAuthToken({
      id: savedUser._id,
      isAdmin: savedUser.isAdmin,
    });

    const { password, ...details } = savedUser._doc;

    res
      .cookie("token", token, {
        maxAge: 3 * 86400000,
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .json({ ...details });
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
