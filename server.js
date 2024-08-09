//dependencies
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')


require('dotenv').config();

//import models
//importing routes
const loginRoutes = require('./routes/loginRoutes')
const inputRoutes = require('./routes/inputRoutes')
const studyRoutes = require('./routes/studyRoutes')
const signRoutes = require('./routes/signRoutes')
const cropRoutes = require('./routes/cropRoutes')



//instantiations
const app = express();
const port = 4002;




//configurations
// set db connection to mongoose
mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
  });





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
app.use('/', signRoutes)
app.use('/', cropRoutes)

app.get("*", (req, res) => {
  res.send("error! page does not exist");
});


//bootstraping a server
app.listen(port, () => console.log(`listening on port ${port}`));// string interporation
