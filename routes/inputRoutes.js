const express = require('express');
const router = express.Router();

router.post("/addInput", (req, res) => {
    res.render("You have added a member");
});

router.post('/addlnput',(req, res)=>{
    console.log(req.body)
    res.json(req,res)
});
