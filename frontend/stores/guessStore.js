var Store = require('flux/utils').Store;
var GuessConstants = require('../constants/guessConstants');
var AppDispatcher = require('../dispatcher/dispatcher');
var GuessStore = new Store(AppDispatcher);

var guess = {};

GuessStore.find = function (siteId) {
  return guess;
},

GuessStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "SITE_RECEIVED":
      guess = payload;
      GuessStore.__emitChange();
      break;
  }
  GuessStore.__emitChange();
};

module.exports = GuessStore;
