exports.validateParamId = async (req, res, next, val) => {
  if (!mongoose.Types.ObjectId.isValid(val)) {
    return res.status(400).json({
      status: "fail",
      message: "Ad comments ID format is invalid",
    });
  }

  const ad = await Ad.findById(val);
  if (!ad) {
    return ser.status(404).json({
      status: "fail",
      message: "Ad comments ID is invalid",
    });
  }
  next();
};

exports.validateInputs = async (req, res, next) => {
  const { comment, ad, user } = req.body;

  if (!comment || !ad || !user) {
    return res.status(400).json({
      status: "fail",
      message: "All fields are required",
    });
  }

  next();
};
