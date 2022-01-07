const express = require('express');

const {check, validationResult} = require('express-validator')

const router = express.Router();

router.post('/', 
check('email', 'Please add valid email').isEmail(),
check('password', 'Please enter your password').exists(), (req, res) => {
    const errors = validationResult(req)
    if(errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password} = req.body;
    
    return res.json({email: email, password: password})
});

module.exports = router;