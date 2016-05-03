var AppDispatcher = require('../dispatcher/dispatcher.js');
var GuessConstants = require('../constants/guessConstants.js');
var GameConstants = require('../constants/gameConstants.js');


var ServerActions = {

  receiveGame: function (game) {
    AppDispatcher.dispatch({
      actionType: GameConstants.GAME_RECEIVED,
      game: game
    });
  },

  receiveGuesses: function (guesses) {
    AppDispatcher.dispatch({
      actionType: GuessConstants.GUESSES_RECEIVED,
      guesses: guesses
    });
  }

};

module.exports = ServerActions;
