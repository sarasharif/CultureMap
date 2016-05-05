var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var StatConstants = require('../constants/statConstants');
var StatStore = new Store(AppDispatcher);


var _stats = [];
var _allGames = {};
var _bestGames = {};

StatStore.grabStats = function () {
  return _stats;
};

StatStore.grabGames = function () {
  return _allGames;
};

StatStore.grabBestGames = function () {
  return _bestGames;
};

StatStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case StatConstants.GAMES_RECEIVED:
      _stats = payload.data.stats;
      _allGames = payload.data.games;
      StatStore.__emitChange();
      break;
    case StatConstants.BEST_GAMES_RECEIVED:
      _bestGames = payload.data.bestGames;
      StatStore.__emitChange();
      break;
  }
};

module.exports = StatStore;
