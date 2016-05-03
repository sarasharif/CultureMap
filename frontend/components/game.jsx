var React = require('react');

var StreetView = require('./streetView');
var Summary = require('./summary');

var GameStore = require('../stores/gameStore');

var Game = React.createClass({

  getInitialState: function () {
    return {
      gameId: GameStore.grabGameId(),
      roundNum: 1,
      score: 0
    };
  },

  componentDidMount: function() {
    this.listener = GameStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({
      gameId: GameStore.grabGameId(),
      roundNum: GameStore.currentGuess().roundNum,
      score: GameStore.grabScore()
    });
  },

  toRender: function () {
    if (this.state.gameId > 1 && this.state.roundNum < 5) {
      return (
        <div className="gamediv">
          <div id='roundNum'>ROUND: {this.state.roundNum} </div>
          <div id='score'>SCORE: {this.state.score} </div>
          <StreetView
            gameId={this.state.gameId}
            roundNum={this.state.roundNum} />
        </div>);
      } else {
        return (
          <Summary score={this.state.score}/>
        );
      }
  },

  render: function() {
    return this.toRender();
  }

});

module.exports = Game;
