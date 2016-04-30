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

  receiveEmptyGuesses: function (emptyGuesses) {
    AppDispatcher.dispatch({
      actionType: GuessConstants.EMPTY_GUESSES_RECEIVED,
      guesses: emptyGuesses
    });
  },

  receiveSite: function (site) {
    AppDispatcher.dispatch({
      actionType: GuessConstants.SITE_RECEIVED,
      site: site
    });
  },
};

module.exports = ServerActions;
