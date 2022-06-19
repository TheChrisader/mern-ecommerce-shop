const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/db");

const authRoute = require("./routes/auth.routes");

const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//routes
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, async () => {
  try {
    await dbConnect();
    console.log("Server is running");
  } catch (err) {
    console.log(err.message);
  }
});
