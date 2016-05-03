var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var GameConstants = require('../constants/gameConstants');
var GameStore = new Store(AppDispatcher);

var _gameId, _score;
var _guesses = {};

GameStore.currentGuess = function () {
  console.log("roundnum");
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
        console.log(_gameId);
        _score = game.score;
        console.log(_score);

      var guesses = payload.data[1];
        for (var i = 0; i < guesses.length; i++) {
          _guesses[guesses[i].round_num] = guesses[i];
        }
        console.log(_guesses);
        GameStore.__emitChange();
      break;
  }
};

module.exports = GameStore;
