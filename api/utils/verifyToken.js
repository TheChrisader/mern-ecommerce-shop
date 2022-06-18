const jwt = require("jsonwebbtoken");
const config = require("../config/config");

const { JWT_SEC } = config;

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(console.log("You are not authenticated"));

  jwt.verify(token, JWT_SEC, (err, user) => {
    if (err) return next(console.log("Token invalid"));
    req.user = user;
    next();
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(console.log("Forbidden"));
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(console.log("Forbidden"));
    }
  });
};

module.exports = { verifyToken, verifyUser, verifyAdmin };
