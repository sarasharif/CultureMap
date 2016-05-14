var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var GameStore = window.GameStore = require('../stores/gameStore.js');
var ClientActions = require('../actions/clientActions');

var Summary = React.createClass({

  guess_list: function () {
    var guesses = GameStore.grabAllGuesses();
    return (
      <ul className="list-group">
        {
          [1,2,3,4,5].map(function (round) {
            var url = "http://whc.unesco.org/en/list/" + guesses[round].site_no;
            return (
              <li className="list-group-item">
                <a target="_blank" href={url}> {guesses[round].title_en}
                </a>
              </li>
            );
          })
        }
      </ul>
    );
  },

  handleSubmit: function () {
    ClientActions.cleanHouse();
    hashHistory.push('/');
  },

  render: function () {
    return (
      <form className='bodycontent' onSubmit={this.handleSubmit}>
        <h1>Your total score was {this.props.score} points</h1>
        <h3>Click the links below for more information</h3>
        {this.guess_list()}
        <input className="btn btn-success" type="submit" value="LET'S EXPLORE SOME MORE!"></input>
      </form>
   );
  }
});

module.exports = Summary;
