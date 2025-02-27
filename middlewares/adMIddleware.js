const { default: mongoose } = require("mongoose");
const Ad = require("../models/adsModel");

exports.validateId = async (req, res, next, val) => {
  if (!mongoose.Types.ObjectId.isValid(val)) {
    return res.status(400).json({
      status: "fail",
      message: "Ad ID format is invalid",
    });
  }

  const ad = await Ad.findById(val);
  if (!ad) {
    return ser.status(404).json({
      status: "fail",
      message: "Ad ID is invalid",
    });
  }
  next();
};

exports.validate = async (req, res, next) => {
  const { title, description, price, image, city, category } = req.body;

  if (!title || !description || !price || !image || !city || !category) {
    return res.status(400).json({
      status: "fail",
      message: "All fields are required",
    });
  }

  const findCategory = await Category.findById(category);
  if (!findCategory) {
    return res.status(400).json({
      status: "fail",
      message: "Category ID is invalid",
    });
  }

  next();
};
