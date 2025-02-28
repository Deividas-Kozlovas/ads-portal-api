const express = require("express");
const router = express.Router();
const adsController = require("../controller/adsController");
const adMiddleware = require("../middlewares/adMIddleware");
const categoryMiddleware = require("../middlewares/categoryMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

router.param("id", adMiddleware.validateParamId);

router
  .route("/")
  .get(authMiddleware.protect, adsController.getAllAds)
  .post(
    adMiddleware.validate,
    categoryMiddleware.validateCategory,
    adsController.cerateAd
  );

router
  .route("/:id")
  .get(adsController.getAd)
  .patch(categoryMiddleware.validateCategory, adsController.updateAd)
  .delete(adsController.deleteAd);

module.exports = router;
