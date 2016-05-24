var React = require('react');
var StatStore = require("../stores/statStore");
var ClientActions = require('../actions/clientActions');
var CurrentUserState = require("../mixins/currentUserState");

var leaderboard = React.createClass({

  mixins: [CurrentUserState],

  getInitialState: function () {
    return({
      bestGames: StatStore.grabBestGames()
    });
  },

  componentDidMount: function() {
    this.listener = StatStore.addListener(this.addBestGames);
    ClientActions.fetchBestGames();
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  addBestGames: function () {
    this.setState({
      bestGames: StatStore.grabBestGames()
    });
  },

  makeTable: function (tuples) {
    return (
      <ul className="list-group leaderboard-group">
        {
          tuples.reverse().slice(0,5).map(function (tuple, idx) {
            return (
              <li className="list-group-item leaderboard-item">
                <div className="leaderboard-place">#{idx+1}</div>
                <div className="leaderboard-name">{tuple[0]}</div>
                <div className="leaderboard-score">{tuple[1]} points</div>
              </li>
            );
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
        <div className='bodycontent'>
          <h1 className="profile-header">the best of the best</h1>
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
