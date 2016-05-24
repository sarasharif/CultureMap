var React = require('react');
var StatStore = require("../stores/statStore");
var ClientActions = require('../actions/clientActions');
var CurrentUserState = require("../mixins/currentUserState");

var myGames = React.createClass({

  mixins: [CurrentUserState],

  getInitialState: function () {
    return({
      games: StatStore.grabGames()
    });
  },

  componentDidMount: function() {
    ClientActions.fetchGames(this.state.currentUser.id);
    this.listener = StatStore.addListener(this.addGames);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  addGames: function () {
    this.setState({games: StatStore.grabGames()});
  },

  makeTable: function (tuples) {
    return (
      <ul className="list-group leaderboard-group">
        {
          tuples.reverse().map(function (tuple) {
            return (<li className="list-group-item leaderboard-item"><div>{tuple[0]}</div><div>{tuple[1]} points</div></li>);
          })
        }
      </ul>
    );
  },

  bodyContent: function () {
    if (this.props.contentType ===  "myGames") {

      var gamesData = this.state.games.slice(-5,-1).map( function(game) {
        return [game.created_at.slice(5,7) + "/" + game.created_at.slice(8,10), game.score];
      });

      return (
        <div className="bodycontent">
          <h1 className="profile-header">my latest scores</h1>
          {this.makeTable(gamesData)}
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


module.exports = myGames;
