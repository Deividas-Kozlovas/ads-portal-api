const mongoose = require("mongoose");

const commentAdSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "Comment is required"],
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

const CommentAd = mongoose.model("CommentAd", commentAdSchema);

module.exports = CommentAd;
