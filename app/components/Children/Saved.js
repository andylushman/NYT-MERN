<<<<<<< HEAD
var axios = require('axios');
// Include React
var React = require('react');

// This is the results component
var Saved = React.createClass({
     getInitialState: function(){
=======
const axios = require("axios");
// Include React
const React = require(="react");

// This is the results component
const Saved = React.createClass({
     getInitialState: () => {
>>>>>>> bf9ec629952ee34126e80e2bb93ac2b2232aa977
		return {

		}
	},

     // componentDidUpdate: function() {
     //      axios.get('/api')
     //     .then(function(results){
     //          console.log("secretword" + JSON.stringify(results));
     //          console.log(results.data[0].title + "That is the title");
     //          this.setState({title0: results.data[0].title});
     //          this.setState({url0: results.data[0].url})
     //          /*this.setState({title0: results.data[0].title});
     //          this.setState({url0: results.data[0].url});
     //          this.setState({title1: results.data[0].title});
     //          this.setState({url1: results.data[0].url});*/
     //     }.bind(this))
     // },
	// Here we render the function
<<<<<<< HEAD
	render: function(){
=======
	render: () => {
>>>>>>> bf9ec629952ee34126e80e2bb93ac2b2232aa977

		return(
               <div className="col-lg-12">
     			<div className="panel panel-default">
     				<div className="panel-heading">
     					<h3 className="panel-title text-center">Saved</h3>
     				</div>
     				<div className="panel-body text-left">

     						<h4><a href={this.props.url0}>{this.props.title0}</a> {this.props.date0}</h4>
                                   <h4><a href={this.props.url1}>{this.props.title1}</a> {this.props.date1}</h4>
                                   <h4><a href={this.props.url2}>{this.props.title2}</a> {this.props.date2}</h4>
                                   <h4><a href={this.props.url3}>{this.props.title3}</a> {this.props.date3}</h4>
                                   <h4><a href={this.props.url4}>{this.props.title4}</a> {this.props.date4}</h4>
     				</div>
     			</div>
               </div>
		)
	}
});

// Export the component back for use in other files
module.exports = Saved;
