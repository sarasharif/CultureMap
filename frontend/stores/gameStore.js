var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var GameConstants = require('../constants/gameConstants');
var GameStore = new Store(AppDispatcher);

var _gameId, _score;
var _guesses = {};

GameStore.currentGuess = function () {
  for ( var idx = 1; idx < 6; idx++) {
    if (_guesses[idx] && !_guesses[idx].lat_guess) {
      return _guesses[idx];
    }
  }
};

GameStore.grabGameId = function () {
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
    case GameConstants.GUESSES_RECEIVED:
      var guesses = payload.guesses;
      for (var i = 0; i < guesses.length; i++) {
        _guesses[guesses[i].round_num] = guesses[i];
      }
    break;
  }

  GameStore.__emitChange();
};

module.exports = GameStore;
