var React = require('react');
var ReactRouter = require('react-router');
var ClientActions = require('../actions/userClientActions');
var CurrentUserState = require("../mixins/currentUserState");
var Link = ReactRouter.Link;

var NavBar = require('./navBar');


var Splash = React.createClass({

  mixins: [CurrentUserState],

  render: function () {
    return (
      <div id="splashimage">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Splash;
