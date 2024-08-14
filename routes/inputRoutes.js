const express = require('express');
const router = express.Router();


//import models
const Record = require('../models/record')


router.get("/cropRecords", (req, res) => {
    res.render("records");
});

// POST request handler for registration
router.post('/cropRecords', async (req, res) => {
    try {
        const newUser = new Register(req.body);
        console.log('This is the data being sent to the DB:', newUser);
        await newUser.save();
        res.redirect('/');
    } catch (error) {
        console.error('Error registering the crop:', error);
        res.status(400).render('records', { error: 'An error occurred while registering the crop.' });
    }
});


module.exports = router;
