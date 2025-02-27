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

exports.validateCategory = async (req, res, next) => {
  const { category } = req.body;

  if (category) {
    if (!mongoose.Types.ObjectId.isValid(category)) {
      return res.status(400).json({
        status: "fail",
        message: "Category ID format is invalid",
      });
    }

    try {
      const findCategory = await Category.findById(category);

      if (!findCategory) {
        return res.status(400).json({
          status: "fail",
          message: "Category ID is invalid",
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "fail",
        message: "Error validating category",
      });
    }
  }

  next();
};
