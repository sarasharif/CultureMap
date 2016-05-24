var React = require('react');
var StatStore = require("../stores/statStore");
var ClientActions = require('../actions/clientActions');
var CurrentUserState = require("../mixins/currentUserState");

var myStats = React.createClass({

  mixins: [CurrentUserState],

  getInitialState: function () {
    return({
      stats: StatStore.grabStats()
    });
  },

  componentDidMount: function() {
    ClientActions.fetchGames(this.state.currentUser.id);
    this.listener = StatStore.addListener(this.addStats);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  addStats: function () {
    this.setState({stats: StatStore.grabStats()});
  },

  bodyContent: function () {
    if (this.props.contentType ===  "myStats") {
      return (
        <div className="bodycontent">
          <h1 className="profile-header">statistics</h1>
            <ul className="list-group leaderboard-group">
              <li className="list-group-item leaderboard-item"><div>my best score</div><div>{this.state.stats[0]} points</div></li>
              <li className="list-group-item leaderboard-item"><div>my average</div><div>{this.state.stats[1]} points</div></li>
            </ul>
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


module.exports = myStats;
