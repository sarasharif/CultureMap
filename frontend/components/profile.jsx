var React = require('react');

var MyStats = require('./myStats');
var MyGames = require('./myGames');
var Leaderboard = require('./leaderboard');


var Profile = React.createClass({

  getInitialState: function() {
    return {
      contentType: "myStats"
    };
  },

  handleSwitch: function (e) {
    e.preventDefault();
    this.setState({contentType:e.currentTarget.value});
  },

  headerButtons: function () {
    return (
      <div className="btn-group profile-button-group">
        <button className="btn btn-secondary-outline profile-item"
                value="myStats"
                onClick={this.handleSwitch}>my stats</button>
        <button className="btn btn-info-outline profile-item"
                value="myGames"
                onClick={this.handleSwitch}>my scores</button>
        <button className="btn btn-secondary-outline profile-item"
                value="leaderboard" onClick={this.handleSwitch}>leaderboard</button>
      </div>
    );
  },

  render: function () {
    return (
      <div id="splashimage2">
        {this.headerButtons()}
        <br/>
        <MyStats contentType={this.state.contentType} />
        <MyGames contentType={this.state.contentType} />
        <Leaderboard contentType={this.state.contentType} />
      </div>
    );
  }

});



module.exports = Profile;
