const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/db");

dotenv.config();

const app = express();

app.listen(8800, async () => {
  await dbConnect();
  console.log("Server is running");
});
