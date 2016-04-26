import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

var React = require('react'),
    ReactDOM = require('react-dom');

var App = React.createClass({
  render: funciton () {
    return (
      <div>
        <h1>play CultureMap here!</h1>
        {this.props.children}
      </div>
    );
  }
});

var routes (
  <Route path="/" component={App}>
    // <IndexRoute component={GameIndex} />
    // <Route path=":catname" component={GameIndex} />
  </Route>
)


document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("content");
  ReactDOM.render(<Router history={hashHistory} routes={routes} />, root);
});

window.routes = routes;
// testing only
