const express = require("express");
const { getProductsController, getProductsUnder50Controller } = require("../controllers/products.controller");

const router = express.Router();

// GET /products
router.get("/", getProductsController);
router.get("/under-50", getProductsUnder50Controller);

module.exports = router;
