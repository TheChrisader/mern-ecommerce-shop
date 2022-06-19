const jwt = require("jsonwebbtoken");
const config = require("../config/config");
const { createError } = require("./error");

const { JWT_SEC } = config;

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You are not authenticated"));

  jwt.verify(token, JWT_SEC, (err, user) => {
    if (err) return next(createError(403, "Invalid Token"));
    req.user = user;
    next();
  });
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

module.exports = { verifyToken, verifyUser, verifyAdmin };
