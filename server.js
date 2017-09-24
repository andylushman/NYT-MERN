//Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");

//Create Instances of express
var app = express();
var PORT = process.env.PORT || 3000;

//Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({eextended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//Allows us to use static paths
app.use(express.static("./public"));

//*********************************************

//MongoDB configuration (Change this URL to your own DB)
var Articles = require("./models/articles.js");
var mongoose = require("mongoose");
var uri = process.env.MONGODB_URI || "mongodb: //localhost/nytmern";
mongoose.connect(uri); //This is to connect locally

var db = mongoose.connection;
db.on("error", (err) => {
  console.log("Mongoose Error: ", err);
});

db.once("open", () => {
  console.log("Mongoose connection successful.");
});

app.get("/api", (req, res) => {
  //This GET request will search for the lastest clickCount
  Articles.find({}).sort("-date").exec((err, doc) => {
    if(err){
      console.log(err);
    }
    else {
      res.send(doc);
    }

  });
});

app.post("/api/", (req, res) => {
  var newArticle = new Articles(req.body);
  console.log(req.body);

  newArticle.save((err, doc) => {
    if(err) {
      console.log(err);
    }
    else {
      res.send("Updated Click Count!");
    }

  });

});

//Listener
app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});
