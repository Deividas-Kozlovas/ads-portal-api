const LikeAd = require("../models/likeAdModel");
const Ad = require("../models/adsModel");
exports.likeAd = async (req, res) => {
  try {
    const { ad, user } = req.body;

    let like = await LikeAd.findOne({ ad, user });

    if (!like) {
      like = new LikeAd({
        ad,
        user,
        isLiked: true,
      });

      await like.save();

      await Ad.findByIdAndUpdate(ad, {
        $push: { likes: like._id },
      });

      return res.status(201).json({
        status: "success",
        message: "Ad liked successfully",
        data: like,
      });
    } else {
      if (like.isLiked === true) {
        like.isLiked = false;
        await like.save();

        await Ad.findByIdAndUpdate(ad, {
          $pull: { likes: like._id },
        });

        return res.status(200).json({
          status: "success",
          message: "Ad unliked successfully",
        });
      } else {
        like.isLiked = true;
        await like.save();

        await Ad.findByIdAndUpdate(ad, {
          $push: { likes: like._id },
        });

        return res.status(200).json({
          status: "success",
          message: "Ad liked successfully",
          data: like,
        });
      }
    }
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: err.message,
    });
  }
};
