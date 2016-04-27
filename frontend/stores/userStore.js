var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var UserStore = new Store(AppDispatcher);

var _currentUser;
var _authErrors = [];

UserStore.current_user = function () {
  return _currentUser;
};

UserStore.errors = function () {
  return _authErrors;
};

UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "LOGIN":
      _currentUser = payload.user;
      _authErrors = [];
      break;
    case "LOGOUT":
      _currentUser = null;
      _authErrors = [];
      break;
    case "ERROR":
      _authErrors = JSON.parse(payload.errors.responseText).errors;
      break;
  }
  UserStore.__emitChange();
};

module.exports = UserStore;
