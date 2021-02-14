const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// set up express app
const app = express();

//connect to mogodb
mongoose.connect("mongodb://localhost/ninjago");
mongoose.Promise = global.Promise;

//serving static html docs (another middleware)
app.use(express.static("public"));

//use body-parser as middleware
app.use(bodyParser.json());

//initialize routes
app.use("/api",routes);

//error handling middleware for "name required"
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error:err.message});
});

//listen for request
app.listen(process.env.port || 4000, function(){
    console.log("now listening for requests");
});













