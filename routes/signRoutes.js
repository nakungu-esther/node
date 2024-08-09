const express = require('express')
const router = express.Router();

router.get("/sign", (req, res) => {
    res.render("signup");
});

router.post('/signup',(req, res)=>{
    res.json(req.body)
});


module.exports = router;

