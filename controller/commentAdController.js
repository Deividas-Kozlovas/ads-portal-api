exports.createAdComment = async (req, res) => {
  try {
    const commentAd = await create(req.body);
    return res.status(200).json({
      status: "success",
      data: {
        commentAd,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: "Something went wrong creating ad comment",
    });
  }
};

exports.getAllCommentsForAd = async (req, res) => {
  try {
    const ad = req.params.a;
    const allAdComments = await find({ ad });
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
