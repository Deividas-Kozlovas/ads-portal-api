const express = require("express");
const router = express.Router();
const likeAdController = require("../controller/likeAdController");
const likeAdMiddleware = require("../middlewares/likeAdMiddleware");
const adMiddleware = require("../middlewares/adMIddleware");
const authMiddleware = require("../middlewares/authMiddleware");

router
  .route("/")
  .post(
    likeAdMiddleware.validate,
    adMiddleware.validateBodyId,
    authMiddleware.validateBodyId,
    likeAdController.likeAd
  );

module.exports = router;
