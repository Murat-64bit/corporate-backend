const articleController = require("../controllers/articles.controller");

const express = require("express");
const router = express.Router();

router.post("/add", articleController.add);
router.delete("/remove", articleController.remove);
router.put("/update/:articleId", articleController.update);

module.exports = router;