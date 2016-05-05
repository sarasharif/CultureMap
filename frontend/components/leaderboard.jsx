var React = require('react');
var StatStore = require("../stores/statStore");
var ClientActions = require('../actions/clientActions');
var CurrentUserState = require("../mixins/currentUserState");

var leaderboard = React.createClass({

  mixins: [CurrentUserState],

  getInitialState: function () {
    return({
      bestGames: []
    });
  },

  componentDidMount: function() {
    ClientActions.fetchBestGames();
    this.listener = StatStore.addListener(this.addBestGames);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  addBestGames: function () {
    this.setState({bestGames: StatStore.grabBestGames()});
  },

  makeTable: function (tuples) {
    return (
      <ul className="list-group">
        {
          tuples.reverse().map(function (tuple) {
            if (tuple[1] === 0) {
              return;
            } else {
              return (<li className="list-group-item">{tuple[0]} - {tuple[1]} points</li>);
            }
          })
        }
      </ul>
    );
  },

  bodyContent: function () {
    if (this.props.contentType ===  "leaderboard") {
      var bestGamesData = this.state.bestGames.map( function (game) {
        return [game[0], game[1]];
      });

      return (
        <div>
          <h1>leaderboard</h1>
          {this.makeTable(bestGamesData)}
        </div>
      );
    } else {
      return <div></div>;
    }
  },

  render: function () {

    return(
      this.bodyContent()
    );

  }

});


module.exports = leaderboard;
