var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return <div>Hello there</div>;
  }
});

ReactDOM.render(<App />, document.querySelector('#root'));
