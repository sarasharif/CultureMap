var React = require('react');
var StreetView = require('./streetView');
var Summary = require('./summary');
var GameStore = require('../stores/gameStore');


var Game = React.createClass({

  getInitialState: function () {
    return {
      gameId: GameStore.grabGameId(),
      roundNum: GameStore.currentRoundNum(),
      score: GameStore.grabScore()
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
      roundNum: GameStore.currentRoundNum(),
      score: GameStore.grabScore()
    });
  },

  toRender: function () {
    if (this.state.roundNum === 6) {
      return (
        <Summary score={this.state.score} roundNum={this.state.roundNum}/>
      );
    } else {
      return (
        <div id="game">
          <div className="game-details">
            <div id='roundNum'>
              <div>ROUND</div>
              <h3>{this.state.roundNum}/5</h3>
            </div>

            <div id='score'>
              <div>SCORE</div>
              <h3>{this.state.score}</h3>
            </div>
          </div>
          <StreetView gameId={this.state.gameId}
                      roundNum={this.state.roundNum} />
        </div>
      );
    }
  },

  render: function() {
    return this.toRender();
  }

});

module.exports = Game;
