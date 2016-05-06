var React = require('react');
var ReactRouter = require('react-router');
var UserClientActions = require('../actions/userClientActions');
var ClientActions = require('../actions/clientActions');
var hashHistory = ReactRouter.hashHistory;

var Link = ReactRouter.Link;

var NavBar = React.createClass({

  navlink1: function () {
    if (this.props.currentUser) {
      return (<a className="btn btn-info-outline" type="submit" onClick={this.logout}>LOGOUT</a>);
    } else {
      return (<Link to="/login">LOGIN</Link>);
    }
  },

  navlink2: function () {
    if (this.props.currentUser) {
      return (<Link to="/me">{this.props.currentUser.username.toUpperCase()}</Link>);
    } else {
      return (<Link to="/signup">SIGNUP</Link>);
    }
  },

  logout: function(event) {
    event.preventDefault();
    UserClientActions.logout();
    hashHistory.push("/login");
  },

  render: function () {
    return (
      <nav className="navbar navbar-dark bg-inverse" id="navbar">
        <ul className="nav navbar-nav">
          <li className="btn btn-info-outline" id="navL"><Link to="/">cultureMap</Link></li>
          <li className="btn btn-info-outline" id="navR1">{this.navlink1()}</li>
          <li className="btn btn-info-outline" id="navR2">{this.navlink2()}</li>
        </ul>
      </nav>
    );
  }
});

module.exports = NavBar;
