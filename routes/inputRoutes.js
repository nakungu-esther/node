const express = require('express');
const router = express.Router();


//import models
const Record = require('../models/record')


router.get("/Input", (req, res) => {
    res.render("input");
});

router.post('/Input',(req, res)=>{
    const newRecord = new Record(req.body)
newRecord.save()
res.redirect('/sign')
    
});

module.exports = router;
