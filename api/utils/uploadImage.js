const { cloudinary } = require("../config/cloudinary");

const uploadImage = async (file) => {
  try {
    const data = {
      image: file,
    };

    const { url } = await cloudinary.uploader.upload(data.image);
    return url;
  } catch (err) {
    next(err);
  }
};

module.exports = uploadImage;
