const articleController = require("../controllers/articles.controller");

const express = require("express");
const router = express.Router();

router.post("/add", articleController.add);

module.exports = router;