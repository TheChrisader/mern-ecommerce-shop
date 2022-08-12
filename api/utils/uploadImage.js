const { cloudinary } = require("../config/cloudinary");

const uploadImage = async (file) => {
  const data = {
    image: file,
  };

  const { url } = await cloudinary.uploader.upload(data.image);
  return url;
};

module.exports = uploadImage;
