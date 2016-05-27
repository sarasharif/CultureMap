var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var GameConstants = require('../constants/gameConstants');
var UserConstants = require('../constants/userConstants');
var GameStore = new Store(AppDispatcher);

var _gameId, _score;
var _roundNum = 1;
var _guesses = {};

GameStore.currentGuess = function () {
  if (_roundNum === 6) {
    return {points: _score};
  }
  console.log("gamestore says _roundnum is " + _roundNum);
  return _guesses[_roundNum];
};

GameStore.grabAllGuesses = function () {
  return _guesses;
};

GameStore.currentRoundNum = function () {
  if (_score === 0) {_roundNum = 1;}
  return _roundNum;
};

GameStore.grabGameId = function () {
  return _gameId;
};

GameStore.grabScore = function () {
  return _score;
};

var cleanHouse = function () {
    _gameId = 0;
    _score = 0;
    _guesses = {};
    _roundNum = 1;
};

GameStore.__onDispatch = function(payload) {

  switch (payload.actionType) {
    case GameConstants.PACKAGE_RECEIVED:
      var game = payload.data.game;
        _gameId = game.id;
        _score = game.score;
      var guesses = payload.data.guesses;
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
      cleanHouse();
      console.log("cleaning house now")
      GameStore.__emitChange();
      break;
    case UserConstants.LOGOUT:
      cleanHouse();
      GameStore.__emitChange();
      break;
  }
};

module.exports = GameStore;
