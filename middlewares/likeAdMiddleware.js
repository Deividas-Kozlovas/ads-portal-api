exports.validate = async (req, res, next) => {
  const { ad, user } = req.body;

  if (!ad || !user) {
    return res.status(400).json({
      status: "fail",
      message: "Ad and user id is required",
    });
  }

  next();
};
