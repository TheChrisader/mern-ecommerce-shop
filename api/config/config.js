const dotenv = require("dotenv").config();

const config = {
  MONGO_URL: process.env.MONGO_URL,
  JWT_SEC: process.env.JWT_SEC,
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  STRIPE_KEY: process.env.STRIPE_KEY,
};

module.exports = config;
