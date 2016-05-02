var Store = require('flux/utils').Store;
var GameConstants = require('../constants/gameConstants');
var AppDispatcher = require('../dispatcher/dispatcher');

var GameStore = new Store(AppDispatcher);

var _gameId, _score;

GameStore.grabId = function () {
  return _gameId;
};

GameStore.grabScore = function () {
  return _score;
};


GameStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case GameConstants.GAME_RECEIVED:
      _gameId = payload.game.id;
      _score = payload.game.score;
      break;
  }

  GameStore.__emitChange();
};

module.exports = GameStore;
