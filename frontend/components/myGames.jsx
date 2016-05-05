var React = require('react');
var StatStore = require("../stores/statStore");
var ClientActions = require('../actions/clientActions');
var CurrentUserState = require("../mixins/currentUserState");

var myGames = React.createClass({

  mixins: [CurrentUserState],

  getInitialState: function () {
    return({
      games: []
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
    if (this.props.contentType ===  "myGames") {

      var gamesData = this.state.games.map( function(game) {
        return [game.created_at.slice(5,10), game.score];
      });

      return (
        <div>
          <h1>games</h1>
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
