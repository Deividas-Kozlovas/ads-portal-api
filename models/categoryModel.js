const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Category title is required"],
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
