var React = require('react');

var myGames = React.createClass({

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
