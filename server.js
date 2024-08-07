//dependencies
const express = require('express')
const path = require('path')


//configurations
//importing routes
const loginRoutes = require('./routes/loginRoutes')
const inputRoutes = require('./routes/studyRoutes')
const studyRoutes = require('./routes/studyRoutes')






//instantiations
const app = express();
const port = 4000;










//set view engine to pug

app.set("view engine", "pug");// specify the view engine
app.set("views", path.join(__dirname, "views"));// specify the view directory







//middleware
app.use(express.static(path.join(__dirname, "public")));//specify a folder for static files
app.use(express.urlencoded({ extended: true }));// helps to parse data from forms
app.use(express.json());// helps to capture data in json







//Routes
//use routes/use imported routes
app.use('/study', studyRoutes)
app.use('/', inputRoutes)
app.use('/', loginRoutes)

app.get("*", (req, res) => {
  res.send("error! page does not exist");
});


//bootstraping a server
app.listen(port, () => console.log(`listening on port ${port}`));// string interporation
