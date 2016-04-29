var React = require('react');
var ReactRouter = require('react-router');
var CurrentUserState = require("../mixins/currentUserState");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SignupForm = require('./signupForm');


var Register = React.createClass({


  render: function () {
    return (
      <SignupForm />
    );
  }
});

module.exports = Register;
