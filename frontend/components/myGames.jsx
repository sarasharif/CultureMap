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

  bodyContent: function () {
    if (this.props.contentType ===  "myGames") {
      return (
        <div>
          <h1>games</h1>

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
