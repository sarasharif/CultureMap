var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/userConstants');

var Store = require('flux/utils').Store;
var UserStore = window.UserStore = new Store(AppDispatcher);

var _currentUser;
var _authErrors = [];

UserStore.currentUser = function () {
  return _currentUser;
};

UserStore.errors = function () {
  return _authErrors;
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case UserConstants.LOGIN:
      _currentUser = payload.user;
      _authErrors = [];
      UserStore.__emitChange();
      break;
    case UserConstants.LOGOUT:
      _currentUser = null;
      _authErrors = [];
      UserStore.__emitChange();
      break;
    case UserConstants.ERROR:
      if (payload.errors.responseText) {
        _authErrors = JSON.parse(payload.errors.responseText).errors;
      }
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
