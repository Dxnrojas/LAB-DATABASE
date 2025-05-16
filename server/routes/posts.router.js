const express = require("express");
const { getTutorialPostsController } = require("../controllers/posts.controller");

const router = express.Router();

// GET /posts/tutorials
router.get("/posts/tutorials", getTutorialPostsController);

module.exports = router;
