const express = require("express");
const router = express.Router();
const categoryController = require("../controller/categoryController");
const categoryMiddleware = require("../middlewares/categoryMiddleware");

router.param("id", categoryMiddleware.validateId);

router
  .route("/")
  .get(categoryController.getAllCategories)
  .post(categoryMiddleware.validate, categoryController.createCategory);

router
  .route("/:id")
  .get(categoryController.getCategory)
  .delete(categoryController.deleteCategory);

module.exports = router;
