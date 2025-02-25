const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const { password, passwordConfirm, email } = req.body;

    if (password !== passwordConfirm) {
      return res.status(400).json({
        status: "fail",
        message: "Passwords do not match.",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        message: "User already exists with that email.",
      });
    }

    const newUser = await User.create(req.body);

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return res.status(201).json({
      status: "success",
      message: "User successfully registered",
      data: { user: newUser, token },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: `Error: ${err.message}`,
    });
  }
};
