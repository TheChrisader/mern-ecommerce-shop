const jwt = require("jsonwebtoken");

const Token = require("../models/Token.model");
const config = require("../config/config");
const { createError } = require("./error");

const { JWT_SEC } = config;

const generateToken = (payload, expires) => {
  return jwt.sign({ ...payload }, JWT_SEC, { expiresIn: expires });
};

const saveToken = async (token, userId) => {
  const tokenDoc = new Token({
    token,
    user: userId,
  });

  await tokenDoc.save();
};

const generateAuthToken = async (payload) => {
  const accessToken = generateToken(payload, "1h");

  const refreshToken = generateToken(payload, "3d");

  await saveToken(refreshToken, payload.id);

  return accessToken;
};

const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You are not authenticated"));

  const payload = jwt.verify(token, JWT_SEC, (err, user) => {
    if (err) return next(createError(403, "Invalid Token"));
    req.user = user;
  });

  const tokenDoc = await Token.findOne({
    token,
    user: payload.id,
  });

  if (!tokenDoc) {
    return next(createError(403, "Token not Found"));
  }

  next();
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "Forbidden Access"));
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "Forbidden Access"));
    }
  });
};

module.exports = {
  generateToken,
  saveToken,

  generateAuthToken,
  verifyToken,
  verifyUser,
  verifyAdmin,
};
