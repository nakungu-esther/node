const express = require('express')
const router = express.Router();

router.get("/login", (req, res) => {
    res.render("login");
});


router.post('/Input',(req, res)=>{
    const newCrop = new Crop(req.body)
    newCrop.save()
    res.redirect('/sign')
    });
 

module.exports = router;

