var React = require('react');
var ReactRouter = require('react-router');
var ClientActions = require('../actions/clientActions');
var GameStore = require('../stores/gameStore.js');
var hashHistory = ReactRouter.hashHistory;


var Result = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();
    ClientActions.incrementRoundNum();
  },

  resultMap: function () {
    var guess_pos = GameStore.currentGuess().lat_guess.toString() + "," + GameStore.currentGuess().long_guess.toString();
    var true_pos = GameStore.currentGuess().lat_true.toString() + "," + GameStore.currentGuess().long_true.toString();
    var markers = 'markers=size:mid%7Ccolor:red%7C' + guess_pos + '%7C' + true_pos;
    var path = 'path=color:0xff0000ff|weight:5|' + guess_pos + '|' + true_pos;
    var url = 'https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=roadmap\&' + markers + '&' + path + '&key=AIzaSyD0uYEJt5myjVIWmTJICUK6vOP-nndsXw8';

    return (<div><img
      src={url}
    ></img></div>);
  },

  submitTextValue: function () {
    if (this.props.roundNum < 5) {
      return "PLAY NEXT ROUND";
    } else {
      return "VIEW SUMMARY";
    }
  },

  render: function () {
    console.log("render result for round:" + this.props.roundNum);
    return (
      <form id='guess-result' onSubmit={this.handleSubmit}>
        <div>{this.resultMap()}</div>
        <h3>You just earned {GameStore.currentGuess().points} points</h3>
        <input className="btn btn-success" type="submit" value={this.submitTextValue()}></input>
      </form>
    );
  }
});


module.exports = Result;
