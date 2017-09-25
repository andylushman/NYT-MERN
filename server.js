//Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

//Create Instances of express
const app = express();
const PORT = process.env.PORT || 3000;

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
const Articles = require("./models/articles.js");
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI || "mongodb: //localhost/nytmern";
mongoose.connect(uri); //This is to connect locally

const db = mongoose.connection;
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
  const newArticle = new Articles(req.body);
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
