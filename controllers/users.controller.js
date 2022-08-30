const bcrpytjs = require('bcryptjs');
const userService = require('../services/users.services');

exports.register = (req, res, next) => {
    const { password } = req.body;
    const salt = bcrpytjs.genSaltSync(10);

    req.body.password = bcrpytjs.hashSync(password, salt);

    userService.register(req.body, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({ message: 'Succes', data: result });
    })
}

exports.login = (req, res, next) => {
    const { username, password } = req.body;

    userService.login({ username, password }, (error, result) => {
        if (error) {
            return next(error);
        }
        return res.status(200).send({ message: 'Succes', data: result });
    })
}

exports.userProfile =(req,res,next)=>{
    return res.status(401).json({message: 'Authorized User'});
}