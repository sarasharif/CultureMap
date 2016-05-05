var React = require('react');
var StatStore = require("../stores/statStore");
var ClientActions = require('../actions/clientActions');
var CurrentUserState = require("../mixins/currentUserState");

var myStats = React.createClass({

  mixins: [CurrentUserState],

  getInitialState: function () {
    return({
      stats: []
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
        <div>
          <h1>statistics</h1>
            <ul className="list-group">
              <li className="list-group-item">best: {this.state.stats[0]} points</li>
              <li className="list-group-item">average: {this.state.stats[1]} points</li>
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
