const articleController = require("../controllers/articles.controller");

const express = require("express");
const router = express.Router();

router.post("/add", articleController.add);
router.get("/articles", articleController.articlesGet);
router.get("/:postId", articleController.articlesOne);
router.delete("/remove", articleController.remove);
router.put("/update/:articleId", articleController.update);

module.exports = router;