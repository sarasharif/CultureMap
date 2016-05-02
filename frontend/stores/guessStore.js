var Store = require('flux/utils').Store;
var GuessConstants = require('../constants/guessConstants');
var AppDispatcher = require('../dispatcher/dispatcher');
var GuessStore = window.GuessStore = new Store(AppDispatcher);

var guess = {};
var _guesses = {};
var _guessToRender = {};

GuessStore.current_guess = function () {
  return _guessToRender;
};

GuessStore.__onDispatch = function (payload) {

  switch(payload.actionType) {
    case GuessConstants.GUESSES_RECEIVED:
      for (var i = 0; i < 5; i++) {
        _guesses[i] = payload.guesses[0][i];
      }
      _guessToRender = _guesses[0];
    break;
  }
  GuessStore.__emitChange();
};

module.exports = GuessStore;
