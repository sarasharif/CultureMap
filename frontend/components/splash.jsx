var React = require('react');
var ReactRouter = require('react-router');
var ClientActions = require('../actions/userClientActions');
var CurrentUserState = require("../mixins/currentUserState");
var Link = ReactRouter.Link;

var NavBar = require('./navBar');


var Splash = React.createClass({

  mixins: [CurrentUserState],

  content: function () {
    if ( this.state.currentUser ) {
      return (
        <div>
          <div className="second-pic">
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div id="splashimage">
            {this.props.children}
          </div>
        </div>
      );
    }
  },

  render: function () {
    return (
      <div>
        {this.content()}
      </div>
    );
  }
});

module.exports = Splash;
