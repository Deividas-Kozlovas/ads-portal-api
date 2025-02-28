const mongoose = require("mongoose");

const likeAdSchema = new mongoose.Schema(
  {
    isLiked: {
      type: Boolean,
      default: false,
    },
    ad: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ad",
      required: [true, "Ad is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
  },
  {
    timestamps: true,
  }
);

likeAdSchema.index({ ad: 1, user: 1 }, { unique: true });

const LikeAd = mongoose.model("LikeAd", likeAdSchema);

module.exports = LikeAd;
