var React = require('react');
var ReactRouter = require('react-router');
var ClientActions = require('../actions/userClientActions');
var CurrentUserState = require("../mixins/currentUserState");
var Link = ReactRouter.Link;

var NavBar = require('./navBar');

var App = React.createClass({

  mixins: [CurrentUserState],

  render: function () {
    return (
      <div>
        <NavBar currentUser={this.state.currentUser} />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
