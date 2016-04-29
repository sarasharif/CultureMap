var React = require('react');
var ReactRouter = require('react-router');
var CurrentUserState = require("../mixins/currentUserState");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ClientActions = require('../actions/userClientActions');
var Link = ReactRouter.Link;

var NavBar = React.createClass({

  mixins: [CurrentUserState],

  toprightlink1: function () {
    if (this.state.currentUser) {
      return (<button type="submit" onClick={this.logout}>LOGOUT</button>);
    } else {
      return (<Link to="/register">LOGIN</Link>);
    }
  },

  toprightlink2: function () {
    if (this.state.currentUser) {
      return (<Link to="/me">YourProfile</Link>);
    } else {
      return (<Link to="/register">SIGNUP</Link>);
    }
  },

  logout: function(event) {
    event.preventDefault();
    ClientActions.logout();
  },

  render: function () {
    return (
      <div>
        <Link to="/">cultureMap</Link>
        <div class="toprightlink1">{this.toprightlink1()}</div>
        <div class="toprightlink2">{this.toprightlink2()}</div>
      </div>
    );
  }
});

module.exports = NavBar;
