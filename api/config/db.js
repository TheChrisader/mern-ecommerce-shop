const mongoose = require("mongoose");
const config = require("./config");

const { MONGO_URL } = config;

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("DB is connected");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connect;
