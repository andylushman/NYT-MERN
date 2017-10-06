<<<<<<< HEAD
// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;

// Reference the high-level components
var Main = require('../components/Main.js');
//var Child1 = require('../components/Children/Saved');
//var Child2 = require('../components/Children/Search');
=======
//Include the React library
const React = require("react");

//Include the Router
const Router = require("react-router");
const Route = Router.Route;

//Include the Index Route (catch-all route)
const IndexRoute = Router.IndexRoute;

//Referance the high-level components
const Main = require("../components/Main.js");
>>>>>>> bf9ec629952ee34126e80e2bb93ac2b2232aa977

// Export the Routes
module.exports = (

<<<<<<< HEAD
	/*High level component is the Main component*/
	<Route path='/' component={Main}>

		{/* If user selects Child1 then show the appropriate component*/}
		{/* <Route path='Child1' component={Child1} >

			{/*Child1 has its own Grandchildren options*/}
			{/* <Route path='GrandChild1' component={GrandChild1} />
			<Route path='GrandChild2' component={GrandChild2} />

			<IndexRoute component={GrandChild1} />

		</Route> */}

		{/* If user selects Child2 then show the appropriate component*/}
		{/* <Route path='Child2' component={Child2} /> */}

		{/*If user selects any other path... we get the Home Route*/}
		{/* <IndexRoute component={Child1} /> */} */}

	</Route>
=======
  //High Level component is the Main component
  <Route path = "/" component={Main}>
>>>>>>> bf9ec629952ee34126e80e2bb93ac2b2232aa977
);
