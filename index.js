// dependencies
const express = require('express');
const path = require('path');



// instatiations
const app = express();
const post = 4000;





//configurations
// import routers
const studyRoutes = require ('./routes/studyRoutes')
//set view engine to pug

app.set("view engine", "pug");// specify the view engine
app.set("views", path.join(__dirname, "views"));// specify the view directory

// const studyRoutes = require('./routes/studyRoutes')



//set the views path

app.set('views', path.join(__dirname, 'views'))


 
//middleware
app.use(express.urlencoded({extended: true}));
        // Simple request time logger
app.use((req, res, next) => {
  console.log("A new request received at " + Date.now()); 
  next();
});

//Simple request time logger for a specific route
app.use('/about', (req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
  });
  





//Routes
//use routes/use imported routes
app.use('/', studyRoutes)


app.get("*", (req, res) => {
  res.send("error! page does not exist");
});


//bootstraping a server
app.listen(3000, () => console.log('listening on port 3000')); 