var React = require('react');
var ReactRouter = require('react-router');
var UserClientActions = require('../actions/userClientActions');
var ClientActions = require('../actions/clientActions');
var hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

var NavBar = React.createClass({

  navlink1: function () {
    if (this.props.currentUser) {
      return (<Link to='/login' onClick={this.logout}>LOGOUT</Link>);
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
    UserClientActions.logout();
  },

  render: function () {
    return (
        <div className="nav">
          <div className="btn btn-info-outline" id="navL"><Link to="/">cultureMap</Link></div>
          <div className="btn btn-info-outline" id="navR1">{this.navlink1()}</div>
          <div className="btn btn-info-outline" id="navR2">{this.navlink2()}</div>
        </div>
    );
  }
});

module.exports = NavBar;
