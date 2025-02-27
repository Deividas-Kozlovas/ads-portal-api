const Category = require("../models/categoryModel");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    if (!categories || categories.length === 0) {
      return res.status(400).json({
        status: "fail",
        message: "No categories found",
        data: [],
      });
    }

    return res.status(200).json({
      status: "success",
      data: { categories },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: "Something went wrong fetching categories",
    });
  }
};
