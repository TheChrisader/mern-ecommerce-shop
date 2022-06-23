const mongoose = require("mongoose");
const config = require("./config");

const { MONGO_URL } = config;

const connectDB = async () => {
  await mongoose.connect(MONGO_URL);
  console.log("DB is connected");
};

module.exports = connectDB;
