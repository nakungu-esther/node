const express = require('express');
const router = express.Router();


const Profile = require ('../models/profile');

router.get('/Userprofile',(req,res)=>{
    res.render('profile');
});

router.post('/Userprofile', async (req,res)=>{
    try {
        const newUser = new Profile(req.body);
        console.log('this is the data being sent to the DB',newUser)
        await newUser.save();
        res.redirect('/');
    } catch (error) {
        res.status(400).render('profile');
        console.log('Error retrieving user profile :', error);
    }
});

module.exports = router;