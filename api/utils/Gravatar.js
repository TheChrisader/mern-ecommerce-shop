const gravatar = require("gravatar");

const createGravatar = async (email) => {
  let imageUrl = await gravatar.url(email, { s: "100", r: "pg" }, true);
  return imageUrl;
};

module.exports = createGravatar;
