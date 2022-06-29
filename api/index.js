const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const multer = require("multer");

const connectDB = require("./config/db");
// const { cloudinary } = require("./utils/cloudinary");
// const dataUri = require("./utils/datauri");

const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");
const productRoute = require("./routes/product.routes");
const cartRoute = require("./routes/cart.routes");
const categoryRoute = require("./routes/category.routes");
const orderRoute = require("./routes/order.routes");
const favoriteRoute = require("./routes/favorite.routes");
const paymentRoute = require("./routes/stripe.routes");

const app = express();
// const storage = multer.memoryStorage();
// const upload = multer({ storage }).single("image");

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/category", categoryRoute);
app.use("/api/order", orderRoute);
app.use("/api/favorite", favoriteRoute);
app.use("/api/payment", paymentRoute);

app.post("/api/upload", async (req, res) => {
  try {
    const file = req.body.image;

    const data = {
      image: file,
    };

    const { url } = await cloudinary.uploader.upload(data.image);
    res.status(200).json(url);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//error handler
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
    console.log("Server is running");
    await connectDB();
  } catch (err) {
    console.log(err.message);
    process.exit();
  }
});
