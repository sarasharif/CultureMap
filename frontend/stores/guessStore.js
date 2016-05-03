var Store = require('flux/utils').Store;
var GuessConstants = require('../constants/guessConstants');
var AppDispatcher = require('../dispatcher/dispatcher');
var GuessStore = window.GuessStore = new Store(AppDispatcher);

var guess = {};
var _guesses = {};

GuessStore.currentGuess = function (round_num) {
  return _guesses[(round_num - 1)];
};

GuessStore.__onDispatch = function (payload) {

  switch(payload.actionType) {
    case GuessConstants.GUESSES_RECEIVED:
      for (var i = 0; i < 5; i++) {
        _guesses[i] = payload.guesses[0][i];
      }
    break;
  }
  GuessStore.__emitChange();
};

module.exports = GuessStore;
