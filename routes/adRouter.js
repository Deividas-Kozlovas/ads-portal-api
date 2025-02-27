const express = require("express");
const router = express.Router();
const adsController = require("../controller/adsController");
const adMiddleware = require("../middlewares/adMIddleware");

router.param("id", adMiddleware.validateId);

router
  .route("/")
  .get(adsController.getAllAds)
  .post(adMiddleware.validate, adsController.cerateAd);

router.route("/:id").get(adsController.getAd).delete(adsController.deleteAd);

module.exports = router;
