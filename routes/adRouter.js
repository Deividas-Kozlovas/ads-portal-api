const express = require("express");
const router = express.Router();
const adsController = require("../controller/adsController");
const adMiddleware = require("../middlewares/adMIddleware");
const categoryMiddleware = require("../middlewares/categoryMiddleware");

router.param("id", adMiddleware.validateId);

router
  .route("/")
  .get(adsController.getAllAds)
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
