var Store = require('flux/utils').Store;
var GuessConstants = require('../constants/guessConstants');
var AppDispatcher = require('../dispatcher/dispatcher');

var GameStore = new Store(AppDispatcher);

var GameId;

GameStore.grabId = function () {
  return GameId;
};

GameStore.__onDispatch = function(payload) {

  switch (payload.actionType) {
    case "GAME_RECEIVED":
      GameId = payload.game.id;
      break;
  }

  GameStore.__emitChange();
};

module.exports = GameStore;
