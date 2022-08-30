const jwt = require("jsonwebtoken");

const Token = require("../models/Token.model");
const config = require("../config/config");
const createError = require("./error");

const { JWT_SEC } = config;

const generateToken = (payload, type) => {
  if (type === "ACCESS")
    return jwt.sign({ ...payload }, JWT_SEC, { expiresIn: "1h" });
  if (type === "REFRESH")
    return jwt.sign({ ...payload }, JWT_SEC, { expiresIn: "3d" });
};

const saveToken = async (token, userId) => {
  const tokenDoc = new Token({
    token,
    user: userId,
  });

  await tokenDoc.save();
};

const generateAuthToken = async (payload) => {
  let oldToken = await Token.findOne({ user: payload.id });

  if (oldToken) await Token.findByIdAndDelete(oldToken.id);

  const accessToken = generateToken(payload, "ACCESS");

  const refreshToken = generateToken(payload, "REFRESH");

  await saveToken(refreshToken, payload.id);

  const token = `${accessToken} ${refreshToken}`;

  return token;
};

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token?.split(" ");
  if (!token) throw createError(401, "You are not authenticated");

  let access_token = token[0];
  let refresh_token = token[1];

  // empty callback to override the default behaviour for errors
  let user = jwt.verify(access_token, JWT_SEC, () => {});

  if (!user) {
    user = jwt.verify(refresh_token, JWT_SEC);

    const refreshToken = await Token.findOne({
      user: user.id,
    });

    if (!refreshToken) return next(createError(403, "Token not Found"));

    access_token = generateToken(
      { id: user.id, isAdmin: user.isAdmin },
      "ACCESS"
    );

    let cookieToken = `${access_token} ${refresh_token}`;

    res.cookie("token", cookieToken, {
      maxAge: 3 * 86400000,
      httpOnly: true,
    });
  }

  return user;
};

const verifyUser = async (req, res, next) => {
  try {
    let user = await verifyToken(req, res, next);
    if (user?.id === req.params.id || user?.isAdmin) {
      next();
    } else {
      return next(createError(403, "Forbidden Access"));
    }
  } catch (err) {
    next(err);
  }
};

const verifyAdmin = async (req, res, next) => {
  try {
    let user = await verifyToken(req, res, next);
    if (user?.isAdmin) {
      next();
    } else {
      return next(createError(403, "Forbidden Access"));
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  generateToken,
  saveToken,
  generateAuthToken,
  verifyToken,
  verifyUser,
  verifyAdmin,
};
