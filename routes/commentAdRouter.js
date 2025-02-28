const express = require("express");
const router = express.Router();
const commentAdController = require("../controller/commentAdController");
const adMiddleware = require("../middlewares/adMIddleware");
const commentAdMiddleware = require("../middlewares/commentAdMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

router
  .route("/")
  .get(adMiddleware.validateBodyId, commentAdController.getAllCommentsForAd)
  .post(
    commentAdMiddleware.validateInputs,
    authMiddleware.validateBodyId,
    adMiddleware.validateBodyId,
    commentAdController.createAdComment
  );

module.exports = router;
