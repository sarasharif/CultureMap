var React = require('react');
var ClientActions = require('../actions/userClientActions');
var CurrentUserState = require("../mixins/currentUserState");

var StreetView = require('./streetView');
var MapGuess = require('./mapGuess');
var GameStore = require('../stores/gameStore');

var Game = React.createClass({

  mixins: [CurrentUserState],

  getInitialState: function () {
    return {gameId: null};
  },

  componentDidMount: function() {
    this.listener = GameStore.addListener(this._onChange);

  },

  _onChange: function() {
    this.setState({gameId: GameStore.grabId()});
    console.log("We created a game");
    // go through flux and create guesses
  },

  render: function() {
    var siteId = this.state.siteId;

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
