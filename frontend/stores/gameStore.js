var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var GameConstants = require('../constants/gameConstants');
var GameStore = window.GameStore = new Store(AppDispatcher);

var _gameId, _score;
var _roundNum = 1;
var _guesses = {};

GameStore.currentGuess = function () {
  if (_roundNum === 6) {
    return {points: _score};
  }
  return _guesses[_roundNum];
};

GameStore.currentRoundNum = function () {
  return _roundNum;
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
        GameStore.__emitChange();
      break;
    case GameConstants.NEXT_ROUND:
      _roundNum += 1;
      GameStore.__emitChange();
      break;
    case GameConstants.CLEAN_HOUSE:
      _gameId = 0;
      _score = 0;
      _guesses = {};
      _roundNum = 0;
      break;
  }
};

module.exports = GameStore;
