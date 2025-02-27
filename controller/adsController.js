const Ads = require("../models/adsModel");

exports.getAllAds = async (req, res) => {
  try {
    const ads = await Ads.find();

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
