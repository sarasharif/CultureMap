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

  gameList: function (games) {
    return (
      <ul className="list-group leaderboard-group">
        {
          games.map(function (game, idx) {
            return (
              <li className="list-group-item leaderboard-item">
                <div className="leaderboard-place">#{idx+1}</div>
                <div className="leaderboard-name">{game.name}</div>
                <div className="leaderboard-score">{game.score} points</div>
              </li>
            );
          })
        }
      </ul>
    );
  },

  bodyContent: function () {
    if (this.props.contentType ===  "leaderboard") {
      return (
        <div className='bodycontent'>
          <h1 className="profile-header">the best of the best</h1>
          {this.gameList(this.state.bestGames)}
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
