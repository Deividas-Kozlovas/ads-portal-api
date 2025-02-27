const { default: mongoose } = require("mongoose");
const Category = require("../models/categoryModel");

exports.validateId = async (req, res, next, val) => {
  if (!mongoose.Types.ObjectId.isValid(val)) {
    return res.status(400).json({
      status: "fail",
      message: "Categories ID format is invalid",
    });
  }

  const category = await Category.findById(val);
  if (!category) {
    return ser.status(404).json({
      status: "fail",
      message: "Room ID is invalid",
    });
  }
  next();
};

exports.validate = async (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      status: "fail",
      message: "Title is required",
    });
  }

  next();
};
