
const express = require('express');
const router = express.Router();

// Import models
const Register = require('../models/signup'); // Adjust the path and model name as needed

// GET request handler for registration page
router.get("/register", (req, res) => {
    res.render("register_maize"); // Ensure this view exists
});

// POST request handler for registration
router.post('/register', async (req, res) => {
    try {
        const newUser = new Register(req.body);
        console.log('This is the data being sent to the DB:', newUser);
        await newUser.save();
        res.redirect('/');
    } catch (error) {
        console.error('Error registering the crop:', error);
        res.status(400).render('register_maize', { error: 'An error occurred while registering the crop.' });
    }
});

module.exports = router;
