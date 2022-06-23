const slugify = require("slugify");

const createSlug = (product) => {
  return slugify(product.name, { lower: true, strict: true });
};

module.exports = createSlug;
