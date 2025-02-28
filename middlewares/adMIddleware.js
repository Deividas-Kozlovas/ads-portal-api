const { default: mongoose } = require("mongoose");
const Ad = require("../models/adsModel");

exports.validateParamId = async (req, res, next, val) => {
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

exports.validateBodyId = async (req, res, next) => {
  const { ad } = req.body;

  if (!mongoose.Types.ObjectId.isValid(ad)) {
    return res.status(400).json({
      status: "fail",
      message: "Ad ID format is invalid in body",
    });
  }

  const adExists = await Ad.findById(ad);
  if (!adExists) {
    return res.status(404).json({
      status: "fail",
      message: "Ad not found",
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

  next();
};
