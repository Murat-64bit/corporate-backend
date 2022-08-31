const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config');

const auth = require('./middlewares/auth');
const errors = require('./middlewares/erros');

var { unless } = require('express-unless');

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected");
},
    (error) => { console.log("Database can't be connected " + error); }
);

auth.authenticateToken.unless = unless;

app.use(
    auth.authenticateToken.unless({
        path: [
            { url: "/users/login", methods: ["POST"] },
            { url: "/users/register", methods: ["POST"] },
            { url: "/articles/add", methods: ["POST"] },
            { url: "/articles/remove", methods: ["DELETE"] },
        ],
    })
);

app.use(express.json());

app.use('/users', require('./routes/users.routes'));
app.use('/articles', require('./routes/articles.router'));

app.use(errors.errorHandler);

app.listen(process.env.port || 4000, function () {
    console.log('Ready to go');
});
