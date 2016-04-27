var React = require('react'),
    ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var CurrentUserState = require('./mixins/currentUserState');

var LoginForm = require('./components/loginForm');

var userApiUtil = require('./util/userApiUtil.js');
var userStore = require('./stores/userStore.js');

var App = React.createClass({
  mixins: [CurrentUserState],
  render: function () {
    return (
      <div>
        <header><h1>play CultureMap here!</h1></header>
        <LoginForm/>
        {this.props.children}
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("content");
  ReactDOM.render(Router, root);
});
