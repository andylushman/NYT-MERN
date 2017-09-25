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
)
