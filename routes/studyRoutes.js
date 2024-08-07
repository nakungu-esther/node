const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('lets go out and eat')
});



router.get('/', (req, res) => { // new
    res.send('Homepage! Hello world.');
});

router.get('/about', (req, res) => { // new
    res.send('About page. l need it.');
});

router.get("/member", (req, res) => {
    res.send("These are member details");
});

router.post("/addmember", (req, res) => {
    res.send("You have added a member");
});

//rendering views
router.get('/first', (req, res) => {
    res.render('index');
 });
 
router.post('/first', (req, res) => {
    console.log(req.body);
   });
  
router.get('/input',(req,res) => {
    res.render('input');
});




router.get('/quotes', (req, res) => {
    res.sendFile(__dirname + './views/quotes.html')
});

router.post('/quotes', (req, res) => {
    console.log(req.body)
});
router .get('/select', (req, res) => {
    res.sendFile(__dirname + './views/select.html')
});

router.get('/learning',(req,res) =>{
    res.render('example')
})

module.exports = router;
