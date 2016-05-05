var React = require('react');
var StatStore = require("../stores/statStore");
var ClientActions = require('../actions/clientActions');
var CurrentUserState = require("../mixins/currentUserState");

var myStats = React.createClass({

  mixins: [CurrentUserState],

  componentWillMount: function() {
    this.listener = StatStore.addListener(this.addStats);
    ClientActions.grabStats(this.state.currentUser.id);
  },

  bodyContent: function () {
    if (this.props.contentType ===  "myStats") {
      return (
        <div>
          <h1>statistics</h1>
        </div>
      );
    } else {
      return <div></div>;
    }
  },

  render: function () {
    console.log(StatStore.grabStats());
    return(
      this.bodyContent()
    );

  }

});


module.exports = myStats;
