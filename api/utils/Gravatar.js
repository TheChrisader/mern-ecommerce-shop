const gravatar = require("gravatar");

export const createGravatar = (email) => {
  let imageUrl = gravatar.url(email, { s: "100", r: "pg", d: "404" }, true);
  return imageUrl;
};
