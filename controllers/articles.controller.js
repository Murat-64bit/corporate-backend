const articleService = require('../services/articles.services');

exports.add = (req, res, next) => {
    articleService.add(req.body, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({ message: 'Succes', data: result });
    })
}
