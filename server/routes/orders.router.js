const express = require("express");
const { getOrdersSortedController } = require("../controllers/orders.controller");

const router = express.Router();

// GET /orders/sorted
router.get("/orders/sorted", getOrdersSortedController);

module.exports = router;
