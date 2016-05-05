var React = require('react');

var leaderboard = React.createClass({

  bodyContent: function () {
    if (this.props.contentType ===  "leaderboard") {
      return (
        <div>
          <h1>leaderboard</h1>
          
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


module.exports = leaderboard;
