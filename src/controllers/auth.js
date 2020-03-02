
const User = require('../models/user');

exports.register = (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {

            if (user) return res.status(401).json({message: 'The email address you have entered is already associated with another account.'});
            const newUser = new User(req.body);
            newUser.save()
                .then(user => res.status(200).json({token: user.generateJWT(), user: user}))
                .catch(err => res.status(500).json({message:err.message}));
        })
        .catch(err => res.status(500).json({success: false, message: err.message}));
};

exports.login = (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) return res.status(401).json({msg: 'The email address ' + req.body.email + ' is not associated with any account. Double-check your email address and try again.'});

            if (!user.comparePassword(req.body.password)) return res.status(401).json({message: 'Invalid email or password'});

            res.status(200).json({token: user.generateJWT(), user: user});
        })
        .catch(err => res.status(500).json({message: err.message}));
};