const Category = require("../models/Category.model");

const createCategory = async (req, res, next) => {
  try {
    const newCategory = new Category(req.body);
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    next(err);
  }
};

const getCategory = async (req, res, next) => {
  try {
    const category = await Category.findOne({ name: req.params.name });
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await Category.findOneAndUpdate(
      req.params.name,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    next(err);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    await Category.findOneAndDelete(req.params.name);
    res.status(200).json("Category deleted");
  } catch (err) {
    next(err);
  }
};

const getAllCategories = async (req, res, next) => {
  try {
    let newQuery = req.query.new;
    let categories;

    if (newQuery) {
      categories = await Category.find().sort({ createdAt: -1 });
    } else {
      categories = await Category.find();
    }

    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
};
