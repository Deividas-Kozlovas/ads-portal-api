const CommentAd = require("../models/commentAdModel");

exports.createAdComment = async (req, res) => {
  try {
    const commentAd = await CommentAd.create(req.body);

    return res.status(201).json({
      status: "success",
      data: {
        commentAd,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: "Something went wrong creating ad comment",
      error: err.message,
    });
  }
};

exports.getAllCommentsForAd = async (req, res) => {
  try {
    const { ad } = req.body;
    const allAdComments = await CommentAd.find({ ad });
    if (!allAdComments || allAdComments === 0) {
      return res.status(400).json({
        status: "fail",
        message: "No comment found",
      });
    }
    return res.status(200).json({
      status: "success",
      data: {
        allAdComments,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: "Something went wrong fetching comments",
    });
  }
};
