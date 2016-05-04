var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

var ClientActions = require('../actions/clientActions');

var Summary = React.createClass({

  handleSubmit: function () {
    ClientActions.cleanHouse();
    hashHistory.push('/');
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Your total score was {this.props.score} points</h3>
        <input className="btn btn-success" type="submit" value="LET'S EXPLORE SOME MORE!"></input>
      </form>
   );
  }
});

module.exports = Summary;
