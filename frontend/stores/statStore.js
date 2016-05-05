var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var StatConstants = require('../constants/statConstants');
var StatStore = new Store(AppDispatcher);


var _stats = [];
var _allGames = {};

StatStore.grabStats = function () {
  return _stats;
};

StatStore.grabGames = function () {
  return _allGames;
};

StatStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case StatConstants.GAMES_RECEIVED:
      _stats = payload.data.stats;
      // _allGames = payload.data.games;
      StatStore.__emitChange();
    break;
  }
};

module.exports = StatStore;
