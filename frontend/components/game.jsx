var React = require('react');
var CurrentUserState = require("../mixins/currentUserState");

var StreetView = require('./streetView');

var GameStore = require('../stores/gameStore');

var Game = React.createClass({

  mixins: [CurrentUserState],

  getInitialState: function () {
    return {gameId: GameStore.grabId(), roundNum: 1, score: 0};
  },

  componentDidMount: function() {
    this.listener = GameStore.addListener(this._onChange);
    // this.setState({});
  },

  _onChange: function() {
    this.setState({
      gameId: GameStore.grabId(),
      roundNum: this.state.roundNum + 1,
      score: GameStore.grabScore()
    });

  },

  render: function() {
    var siteId = this.state.siteId;

    if ( this.state.currentUser ) {
      return (
        <div className="gamediv">
          <div id='roundNum'> ROUND {this.state.roundNum}</div>
          <div id='score'>SCORE {this.state.score}</div>
          <StreetView
            gameId={this.state.gameId}
            roundNum={this.state.roundNum}/>
      </div>);
    } else {
      return null;
    }
  }


});

module.exports = Game;
