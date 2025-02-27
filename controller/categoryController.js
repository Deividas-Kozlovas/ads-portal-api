const { status } = require("init");
const Category = require("../models/categoryModel");

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(200).json({
      status: "success",
      data: {
        category,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: "Something went wrong creating category",
    });
  }
};

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

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        status: "fail",
        message: "Category not found",
      });
    }

    return res.status(200).json({
      status: "success",
      data: { category },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: "Something went wrong fetching category",
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        status: "fail",
        message: "Category not found",
      });
    }

    await Category.findByIdAndDelete(req.params.id);

    return res.status(204).json({
      status: "success",
      message: "Category deleted successfully",
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: "Something went wrong deleting category",
    });
  }
};
