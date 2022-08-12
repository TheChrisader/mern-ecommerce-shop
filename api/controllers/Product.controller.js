const Product = require("../models/Product.model");

const createCategory = require("../utils/createCategory");
const createSlug = require("../utils/createSlug");
const uploadImage = require("../utils/uploadImage");

const makeProduct = async (req, res, next) => {
  try {
    createCategory(req.body.categories);
    if (req.body.mainImage) {
      let url = await uploadImage(req.body.mainImage);
      req.body.mainImage = url;
    }
    if (req.body.images) {
      for (i = 0; i < req.body.images.length; i++) {
        let url = await uploadImage(req.body.images[i]);
        req.body.images[i] = url;
      }
    }

    const slug = createSlug(req.body);

    const newProduct = new Product({ ...req.body, slug });

    const savedProduct = await newProduct.save();
    res.status(200).json({ savedProduct });
  } catch (err) {
    next(err);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    if (req.body.name) {
      const slug = createSlug(req.body);
      req.body = { ...req.body, slug };
    }

    if (req.body.categories) {
      createCategory(req.body.categories);
    }

    if (req.body.mainImage) {
      let url = await uploadImage(req.body.mainImage);
      req.body.mainImage = url;
    }

    if (req.body.images) {
      for (i = 0; i < req.body.images.length; i++) {
        let url = await uploadImage(req.body.images[i]);
        req.body.images[i] = url;
      }
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    next(err);
  }
};

const getAllProducts = async (req, res, next) => {
  let newQuery = req.query.new;
  let categoryQuery = req.query.category;

  try {
    let products;

    if (newQuery && categoryQuery) {
      products = await Product.find({
        categories: {
          $in: [categoryQuery],
        },
      }).sort({ createdAt: -1 });
    } else if (categoryQuery) {
      products = await Product.find({
        categories: {
          $in: [categoryQuery],
        },
      });
    } else if (newQuery) {
      products = await Product.find().sort({ createdAt: -1 });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  makeProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
};
