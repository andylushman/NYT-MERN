<<<<<<< HEAD
// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Grab the proeprty associated with the Router
var Router = require('react-router').Router

// Grabs the Routes
var routes = require('./config/routes');

// Renders the contents according to the route page.
ReactDOM.render(

	<Router>{routes}</Router>,
	document.getElementById('app')
=======
//Include the Main React Dependencies
const React = require("react");
const ReactDom = require("react-dom");

//Grab the property associated with the Router
const Router = require("react-router").Router

//Grabs the routes
const routes = require("./config/routes");

//Renders the contents according to the route page.
ReactDOM.render(

  <Router>{routes}</Router>
  document.getElementById("app");
>>>>>>> bf9ec629952ee34126e80e2bb93ac2b2232aa977
)
