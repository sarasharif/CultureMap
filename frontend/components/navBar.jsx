var React = require('react');
var ReactRouter = require('react-router');
var ClientActions = require('../actions/userClientActions');
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
    ClientActions.logout();
  },

  render: function () {
    return (
      <nav className="navbar navbar-dark bg-inverse">
        <ul className="nav navbar-nav">
          <li className="btn btn-info-outline"><Link to="/">cultureMap</Link></li>
          <li className="btn btn-info-outline">{this.navlink1()}</li>
          <li className="btn btn-info-outline">{this.navlink2()}</li>
        </ul>
      </nav>
    );
  }
});

module.exports = NavBar;
