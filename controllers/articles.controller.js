const articleService = require('../services/articles.services');
const Article = require('../models/article.model');

exports.add = (req, res, next) => {
    articleService.add(req.body, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({ message: 'Succes', data: result });
    })
}

exports.remove = (req, res, next) => {
    const articleId = req.body.articleId;
    Article.findOneAndDelete({ _id: articleId }, function (err) {
        if (!err) {
            res.send("Successfully deleted selected article.");
        } else {
            res.send(err);
        }
    });
}

exports.update = (req, res, next) => {
    const articleId = req.params.articleId;

    Article.replaceOne(
        { _id: articleId },
        { content: req.body.newContent },
        { overwrite: true },
        function (err) {
            if (!err) {
                res.send("Successfully updated the content of the selected article.");
            } else {
                res.send(err);
            }
        });


}
