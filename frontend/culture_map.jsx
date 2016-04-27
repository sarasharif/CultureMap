var React = require('react'),
    ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var LoginForm = require('./components/loginForm');

var userApiUtil = require('./util/userApiUtil.js');
var userStore = require('./stores/userStore.js');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>play CultureMap here!</h1>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
  </Route>
)


document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("content");
  ReactDOM.render(<Router history={hashHistory} routes={routes} />, root);
});
