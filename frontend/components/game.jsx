var React = require('react');
var ClientActions = require('../actions/userClientActions');
var CurrentUserState = require("../mixins/currentUserState");
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var StreetView = require('./streetView');
var MapGuess = require('./mapGuess');

var Game = React.createClass({

  mixins: [LinkedStateMixin, CurrentUserState],

  render: function() {
    if ( this.state.currentUser ) {
      return (<div className="gamediv">
        <StreetView />
        <MapGuess />
      </div>);
    } else {
      return null;
    }
  }


});

module.exports = Game;
