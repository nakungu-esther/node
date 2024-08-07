const express = require('express')
const router = express.Router();

router.get("/login", (req, res) => {
    res.render("login");
});

router.post('/login',(req, res)=>{
    res.json(req.body)
});


module.exports = router;

