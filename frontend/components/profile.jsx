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
      <div class="btn-group">
        <button className="btn btn-secondary-outline" value="myStats" onClick={this.handleSwitch}>my stats</button>
        <button className="btn btn-info-outline" value="myGames" onClick={this.handleSwitch}>my games</button>
        <button className="btn btn-secondary-outline" value="leaderboard" onClick={this.handleSwitch}>leaderboard</button>
      </div>
    );
  },

  bodyContent: function (contentType) {
    return (<div>contentType</div>);
  },

  render: function () {
    return (
      <div id="splashimage2">
        {this.headerButtons()} <br/><br/><br/>
        <MyStats contentType={this.state.contentType} />
        <MyGames contentType={this.state.contentType} />
        <Leaderboard contentType={this.state.contentType} />
      </div>
    );
  }

});



module.exports = Profile;
