var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var StatConstants = require('../constants/gameConstants');
var StatStore = window.StatStore = new Store(AppDispatcher);


var _stats = {};
var _allGames = {};

StatStore.grabStats = function () {
  return _stats;
};

StatStore.grabGames = function () {
  return _allGames;
};

StatStore.__OnDispatch = function (payload) {
  switch (payload.actionType) {
    case StatConstants.STATS_RECEIVED:
      _stats[bestRound] = payload.userStats[0];
      _stats[avgGame] = payload.userStats[1];
      _stats[bestGame] = payload.userStats[2];
    break;
  }
};

module.exports = StatStore;
