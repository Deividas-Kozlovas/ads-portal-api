const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register", authMiddleware.validateUser, authController.register);

module.exports = router;
