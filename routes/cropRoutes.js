const express = require('express')
const router = express.Router();

//import models
const Crop = require('../models/crop')

router.get("/register", (req, res) => {
    res.render("register_maize");
});

router.post('/register',(req, res)=>{
const newCrop = new Crop(req.body)
newCrop.save()
res.redirect('/Input')
});


module.exports = router;

