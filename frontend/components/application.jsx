var React = require('react');
var ReactRouter = require('react-router');
var ClientActions = require('../actions/userClientActions');
var CurrentUserState = require("../mixins/currentUserState");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Link = ReactRouter.Link;

var NavBar = require('./navBar');


var App = React.createClass({

  mixins: [CurrentUserState],

  whenloggedin: function () {
    if ( this.state.currentUser ) {
      return (<Link to="/play">LETS GO EXPLORING</Link>);
    }
  },

  render: function () {
    return (
      <div>
        <NavBar />
        <div id="background"></div>
        <header><h1>Let's Explore the World!</h1></header>
        {this.props.children}
        {this.whenloggedin()}
      </div>
    );
  }
});

module.exports = App;
