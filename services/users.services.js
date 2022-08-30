const User = require('../models/user.model');
const bcrpyt = require('bcryptjs');
const auth = require('../middlewares/auth.js');

async function login({ username, password }, callback) {
    const user = await User.findOne({ username });

    if (user != null) {
        if (bcrpyt.compareSync(password, user.password)) {
            const token = auth.generateAccesToken(username);
            return callback(null, { ...user.toJSON(), token })
        } else {
            return callback({
                message: 'Invalid username/password',
            })
        }
    }
    else {
        return callback({
            message: 'Invalid username/password',
        })
    }
}

async function register(params, callback) {
    if (params.username === undefined) {
        return callback({ message: 'Username required' });
    }

    const user = new User(params);
    user.save().then((response) => {
        return callback(null, response);
    }).catch((error) => { return callback(error) })
}

module.exports = {
    login, register
}