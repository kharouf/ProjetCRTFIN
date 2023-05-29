const { check, validationResult } = require('express-validator');
// check rules middleware register

 
exports.registerRules = () => 
    [
        check('name', "Name is required").notEmpty(),
        check('lastName', "Last Name is required").notEmpty(),
        check('email', "email is required").notEmpty().isEmail(),
        check('password', "password is required").isLength({
            min: 8
        }),

    ]



// check rules middleware login
exports.loginRules = () => 
    [
       
        check('email', "email is required").notEmpty().isEmail(),
        check('password', "password is required").isLength({
            min: 8
        }),

    ]

// validation register
exports.validation = (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors)
    if(!errors.isEmpty()){
       return res.status(400).send({ errors: errors.array().map(el => el.msg) });
    } 
    next()
}