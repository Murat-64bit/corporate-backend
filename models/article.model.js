const { default: mongoose } = require('mongoose');
const mongose = require('mongoose');
const { Schema } = mongose;
const uniqueValidator = require('mongoose-unique-validator');

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,

    },
    content: {
        type: String,
        required: true,
    },
});

articleSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

articleSchema.plugin(uniqueValidator, {
    message: 'Title already in use.'
});

const Article = mongoose.model('article', articleSchema);
module.exports = Article;