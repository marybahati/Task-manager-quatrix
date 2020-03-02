const express = require('express');
const {check} = require('express-validator');
const Auth = require('../controllers/auth');
const validate = require('../middlewares/validate');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: "All Tasks"});
});

router.post('/register', [
    check('email').isEmail().withMessage('Enter a valid email address'),
    check('password').not().isEmpty().isLength({min: 6}).withMessage('Must be at least 6 chars long'),
    check('customer_first_name').not().isEmpty().withMessage('You first name is required'),
    check('personnel_first_name').not().isEmpty().withMessage('This is required'),
    check('personnel_other_name').not().isEmpty().withMessage('This is required'),
    check('customer_last_name').not().isEmpty().withMessage('This is required'),
    check('customer_phone').not().isEmpty().withMessage('This is required'),
    check('assigned').not().isEmpty().withMessage('This is required'),
    // check('in_progress').not().isEmpty().withMessage('This is required'),
    check('deferred').not().isEmpty().withMessage('This is required'),
], validate, Auth.register);

router.post("/login", [
    check('email').isEmail().withMessage('Enter a valid email address'),
    check('password').not().isEmpty(),
], validate, Auth.login);

module.exports = router;
