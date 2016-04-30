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
  
  receiveSite: function (site) {
    AppDispatcher.dispatch({
      actionType: GuessConstants.SITE_RECEIVED,
      site: site
    });
  },
};

module.exports = ServerActions;
