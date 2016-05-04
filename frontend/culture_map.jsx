var React = require('react'),
    ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var CurrentUserState = require('./mixins/currentUserState');

var App = require('./components/application');
var Game = require('./components/game');
var Login = require('./components/login');
var Signup = require('./components/signup');
var Profile = require('./components/profile');
var Splash = require('./components/splash');
var Categories = require('./components/categories');
var Default = require('./components/default');

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route component={Splash}>
        <IndexRoute component={Default} />
        <Route path="login" component={Login}></Route>
        <Route path="signup" component={Signup}></Route>
      </Route>
      <Route path="play" component={Game}></Route>
      <Route path="me" component={Profile}></Route>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("content");
  ReactDOM.render(Router, root);
});
