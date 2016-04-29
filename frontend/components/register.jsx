var React = require('react');
var ReactRouter = require('react-router');
var CurrentUserState = require("../mixins/currentUserState");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var LoginForm = require('./loginForm');


var Register = React.createClass({


  render: function () {
    return (
      <LoginForm />
    );
  }
});

module.exports = Register;
