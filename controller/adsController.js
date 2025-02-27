const Ad = require("../models/adsModel");

exports.cerateAd = async (req, res) => {
  try {
    const ad = await Ad.create(req.body);
    return res.status(200).json({
      status: "success",
      data: {
        ad,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: "Something went wrong creating ad",
    });
  }
};

exports.updateAd = async (req, res) => {
  try {
    const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!ad) {
      return res.status(404).json({
        status: "fail",
        message: "Ad not found",
      });
    }

    return res.status(200).json({
      status: "success",
      data: {
        ad,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: "Something went wrong updating ad",
    });
  }
};

exports.getAllAds = async (req, res) => {
  try {
    const ads = await Ad.find();

    if (!ads || ads.length === 0) {
      return res.status(200).json({
        status: "success",
        message: "No ads found",
        data: [],
      });
    }

    return res.status(200).json({
      status: "success",
      data: { ads },
    });
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: "Something went wrong fetching ads",
    });
  }
};

exports.getAd = async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id).populate("category");
    if (!ad) {
      return res.status(404).json({
        status: "fail",
        message: "Ad not found",
      });
    }

    return res.status(200).json({
      status: "success",
      data: { ad },
    });
  } catch (err) {
    return res.status(200).json({
      status: "fail",
      message: "Something went wrong fetching ad",
    });
  }
};

exports.deleteAd = async (req, res) => {
  try {
    const ad = await Ad.findByIdAndDelete(req.params.id);

    if (!ad) {
      return res.status(404).json({
        status: "fail",
        message: "Ad not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Ad deleted successfully",
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: "Something went wrong deleting ad",
    });
  }
};
