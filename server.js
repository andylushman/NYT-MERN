<<<<<<< HEAD
// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

//Require History Schema
//var History = require('./models/History.js');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener
=======
//Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

//Create Instances of express
const app = express();
const PORT = process.env.PORT || 3000;
>>>>>>> bf9ec629952ee34126e80e2bb93ac2b2232aa977

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Allows us to use static paths
app.use(express.static('./public'));

// -------------------------------------------------

<<<<<<< HEAD
// MongoDB Configuration configuration (Change this URL to your own DB)
var Articles = require('./models/articles.js');
var mongoose = require('mongoose');
var uri = process.env.MONGODB_URI || 'mongodb://localhost/nytmern';
mongoose.connect(uri);  //This is to connect locally
//mongoose.connect("mongodb://heroku_mgk2lddj:3rptbp9oitsf16u3si1n68b7mc@ds019766.mlab.com:19766/heroku_mgk2lddj");  // This is to connect on Heroku

var db = mongoose.connection;
//
db.on('error', function (err) {
   console.log('Mongoose Error: ', err);
=======
//MongoDB configuration (Change this URL to your own DB)
const Articles = require("./models/articles.js");
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI || "mongodb: //localhost/nytmern";
mongoose.connect(uri); //This is to connect locally

const db = mongoose.connection;
db.on("error", (err) => {
  console.log("Mongoose Error: ", err);
>>>>>>> bf9ec629952ee34126e80e2bb93ac2b2232aa977
});
//
db.once('open', function () {
   console.log('Mongoose connection successful.');
});

// Main Route. This route will redirect to our rendered React application
// app.get('/', function(req, res){
//   res.sendFile('./public/index.html');
// });

app.get('/api', function(req, res) {

  // This GET request will search for the latest clickCount
  Articles.find({}).sort('-date').exec(function(err, doc){

           if(err){
             console.log(err);
           }
           else {
             res.send(doc);
           }
    });
});

<<<<<<< HEAD
=======
app.post("/api/", (req, res) => {
  const newArticle = new Articles(req.body);
  console.log(req.body);
>>>>>>> bf9ec629952ee34126e80e2bb93ac2b2232aa977

app.post('/api/', function(req, res){
       var newArticle = new Articles(req.body);
       //console.log(req.body);
       console.log(req.body);
     //   var clickID = req.body.clickID;
     //   var clicks = parseInt(req.body.clicks);

       // Note how this route utilizes the findOneAndUpdate function to update the clickCount.
      newArticle.save(function(err, doc){
              if(err){
                console.log(err);
              }

              else{
                   res.send("Updated Click Count!");
              }
       });
  });


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
