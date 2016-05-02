var Store = require('flux/utils').Store;
var GuessConstants = require('../constants/guessConstants');
var AppDispatcher = require('../dispatcher/dispatcher');
var GuessStore = new Store(AppDispatcher);

var guess = {};
var _guesses = {};
var _guessToRender = {};

GuessStore.current_guess = function () {
  return _guessToRender;
};

GuessStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "SITE_RECEIVED":
      guess = payload;
      break;
    case "EMPTY_GUESSES_RECEIVED":
      for (var i = 0; i < 5; i++) {
        _guesses[i] = payload.guesses[0][i];
      }
      _guessToRender = _guesses[0];
    break;
    case "GUESSES_UPDATED":
      for (var idx = 0; idx < 5; idx++) {
        _guesses[i] = payload.guesses[0][i];
      }
      _guessToRender = _guesses[0];
    break;
  }
  GuessStore.__emitChange();
};

module.exports = GuessStore;
