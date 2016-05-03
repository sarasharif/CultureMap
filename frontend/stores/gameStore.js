var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var GameConstants = require('../constants/gameConstants');
var GameStore = window.GameStore = new Store(AppDispatcher);

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
    case GameConstants.PACKAGE_RECEIVED:
      var game = payload.data[0];
        _gameId = game.id;
        _score = game.score;
      var guesses = payload.data[1];
        for (var i = 0; i < guesses.length; i++) {
          _guesses[guesses[i].round_num] = guesses[i];
        }
        console.log("emitting gamestore change now");
        GameStore.__emitChange();
      break;
  }
};

module.exports = GameStore;
