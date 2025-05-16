const express = require("express");
const { getUsersBasicController } = require("../controllers/users.controller");

const router = express.Router();

// GET /users/basic
router.get("/basic", getUsersBasicController);

module.exports = router;
