const Article = require('../models/article.model');

async function add(params, callback) {
    if (params.title === undefined) {
        return callback({ message: 'title required' });
    }

    const article = new Article(params);
    article.save().then((response) => {
        return callback(null, response);
    }).catch((error) => { return callback(error) })
}


module.exports = {
    add
}