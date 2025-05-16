const express = require("express");
const {
  getProductsController,
  getProductsUnder50Controller,
  getFilteredElectronicsController,
  getPaginatedProductsController,
  getProductsByUserController 
} = require("../controllers/products.controller");

const router = express.Router();

router.get("/", getProductsController);
router.get("/under-50", getProductsUnder50Controller);

router.get("/electronics-over-30", getFilteredElectronicsController);
router.get("/paginated", getPaginatedProductsController);
router.get("/by-user/:userId", getProductsByUserController);

module.exports = router;
