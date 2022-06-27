const Favorite = require("../models/Favorite.model");

const createFavorite = async (req, res, next) => {
  try {
    const newFavorite = new Favorite(req.body);
    const savedFavorite = await newFavorite.save();
    res.status(200).json(savedFavorite);
  } catch (err) {
    next(err);
  }
};

const getFavorite = async (req, res, next) => {
  try {
    const favorite = await Favorite.findById(req.params.id);
    res.status(200).json(favorite);
  } catch (err) {
    next(err);
  }
};

const updateFavorite = async (req, res, next) => {
  try {
    const updatedFavorite = await Favorite.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedFavorite);
  } catch (err) {
    next(err);
  }
};

const deleteFavorite = async (req, res, next) => {
  try {
    await Favorite.findByIdAndDelete(req.params.id);
    res.status(200).json("Favorite deleted");
  } catch (err) {
    next(err);
  }
};

const getAllFavorites = async (req, res, next) => {
  try {
    let newQuery = req.query.new;
    let favorites;

    if (newQuery) {
      favorites = await Favorite.find().sort({ createdAt: -1 });
    } else {
      favorites = await Favorite.find();
    }

    res.status(200).json(favorites);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createFavorite,
  getFavorite,
  updateFavorite,
  deleteFavorite,
  getAllFavorites,
};
