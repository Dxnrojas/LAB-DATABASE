const express = require("express");
const {
  getProductsController,
  getProductsUnder50Controller,
  getFilteredElectronicsController,
   getPaginatedProductsController,
} = require("../controllers/products.controller");

const router = express.Router();

router.get("/", getProductsController);
router.get("/under-50", getProductsUnder50Controller);

router.get("/electronics-over-30", getFilteredElectronicsController);
router.get("/paginated", getPaginatedProductsController);

module.exports = router;
