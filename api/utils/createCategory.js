const mongoose = require("mongoose");

const Category = require("../models/Category.model");

const createCategory = (categories) => {
  if (categories === undefined) return;

  if (categories.length === 0) return;

  categories.map(async (category) => {
    const existingCategory = await Category.findOne({ name: category });
    if (!existingCategory) {
      const newCategory = new Category({ name: category });
      await newCategory.save();
    }
  });
};

module.exports = createCategory;
