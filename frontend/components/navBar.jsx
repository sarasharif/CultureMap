var React = require('react');
var ReactRouter = require('react-router');
var CurrentUserState = require("../mixins/currentUserState");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ClientActions = require('../actions/userClientActions');
var Link = ReactRouter.Link;

var NavBar = React.createClass({

  mixins: [CurrentUserState],

  navlink1: function () {
    if (this.state.currentUser) {
      return (<button type="submit" onClick={this.logout}>LOGOUT</button>);
    } else {
      return (<Link to="/login">LOGIN</Link>);
    }
  },

  navlink2: function () {
    if (this.state.currentUser) {
      return (<Link to="/me">YourProfile</Link>);
    } else {
      return (<Link to="/signup">SIGNUP</Link>);
    }
  },

  guestlink: function () {
    if (this.state.currentUser) {
      return;
    } else {
      return (<button type="submit" onClick={this.handleGuestLogin}>GUEST</button>);
    }
  },

  handleGuestLogin: function (event) {
    event.preventDefault();
    ClientActions.login({
      username: "Guest",
      password: "asdfasdf"
    });
  },

  logout: function(event) {
    event.preventDefault();
    ClientActions.logout();
  },

  render: function () {
    return (
        <div>
          <div><img src={"logo.png"} /></div>
          <Link to="/">cultureMap</Link>
          <div>{this.navlink1()}</div>
          <div>{this.navlink2()}</div>
          <div>{this.guestlink()}</div>
        </div>
    );
  }
});

module.exports = NavBar;
