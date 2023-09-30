const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../model/User');
const key = require('../../config/keys').secret;
/**
 * @route POST api/users/register
 * @desc Register the user
 * @access Public
 */
router.post('/register', (req, res) => {
    let {
        name,
        username,
        email,
        password,
        confirm_password
    } = req.body
    if(password !== confirm_password){
        return res.status(400).json({
            msg: "Passwords do not match."
        });
    }

    // Check for unique username
    User.findOne({
        username:username
    }).then(user => {
        if(user) {
            return res.status(400).json({
                msg: "Username is already taken."
            });
        }
    })
    
    // Check for unique email
    User.findOne({email:email}).then(user => {
        if(user) {
            return res.status(400).json({
                msg: "Email is already registered. Did you forget your password?"
            });
        }
    });

    // If no error, then data is valid and we can register the user
    let newUser = new User({
        name,
        username,
        password,
        email
    });

    // Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err,hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    msg: "User is now registered!!!"
                });
            });
        });
    });
});


/**
 * @route POST api/users/login
 * @desc Signing in the user
 * @access Public
 */

router.post('/login', (req, res) => {
    User.findOne({ username: req.body.username }).then(user => {
        if(!user){
            return res.status(404).json({
                msg: "Username not found.",
                success: false
            });
        }
        // if there is user we are going to compare the password
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if(isMatch){
                const payload = {
                    _id: user._id,
                    username: user.username,
                    name: user.name,
                    email: user.email
                }
                jwt.sign(payload, key, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        msg: "You have successfully logged in !!!"
                    });
                });
                //User's password is correct and we send JSON Token for that user
            } else {
                return res.status(404).json({
                    msg: "Incorrect Password.",
                    success: false
                });
            }
        });
    });
});

/**
 * @route POST api/users/profile
 * @desc Return User's Data
 * @access Public
 */
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req,res) => {
    return res.json({
         user: req.user
    });
});



module.exports = router;
