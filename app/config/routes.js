//Include the React library
const React = require("react");

//Include the Router
const Router = require("react-router");
const Route = Router.Route;

//Include the Index Route (catch-all route)
const IndexRoute = Router.IndexRoute;

//Referance the high-level components
const Main = require("../components/Main.js");

// Export the Routes
module.exports = (

  //High Level component is the Main component
  <Route path = "/" component={Main}>
);
