const mongoose = require("mongoose");

const adsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Ad title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    minlength: 0,
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Category is required"],
  },
});

const Ad = mongoose.model("Ad", adsSchema);

module.exports = Ad;
