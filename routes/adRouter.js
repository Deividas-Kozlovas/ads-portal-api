const express = require("express");
const router = express.Router();
const adsController = require("../controller/adsController");

router.get("/", adsController.getAllAds);

module.exports = router;
