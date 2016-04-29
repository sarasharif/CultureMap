var React = require('react');
var ClientActions = require('../actions/userClientActions');
var CurrentUserState = require("../mixins/currentUserState");
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var StreetView = require('./streetView');

var Game = React.createClass({

  mixins: [LinkedStateMixin, CurrentUserState],

  render: function() {
    if ( this.state.currentUser ) {
      return (<div>
        <StreetView />
      </div>);
    } else {
      return null;
    }
  }


});

module.exports = Game;
