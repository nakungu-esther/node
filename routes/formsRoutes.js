const express = require('express');
const router = express.Router();

// Import models
const Register = require('../models/signup');

// GET request handler
router.get('/Userform', (req, res) => {
    res.render('forms');
});

// POST request handler
router.post('/Userform', async (req, res) => {
    try {
        const newUser = new Register(req.body);
        console.log('this is the data being sent to the DB',newUser)
        await newUser.save();
        res.redirect('/');
    } catch (error) {
        res.status(400).render('forms');
        console.log('Error registering the crop :', error);
    }
});

module.exports = router;
