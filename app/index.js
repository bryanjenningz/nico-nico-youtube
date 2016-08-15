var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');

var commentStyle = {
  position: 'relative',
  left: '0',
  color: 'cyan',
  fontSize: 'large',
  fontFamily: 'cursive'
};

var App = React.createClass({
  componentDidMount: function() {
    axios.get('/api/videos/iwcC_6piJ3o/comments')
    .then((res) => {
      var comments = {};
      res.data.forEach(comment => {
        comments[comment.time] = comments[comment.time] || [];
        comments[comment.time].push(comment);
      });
      console.log(comments);
      this.setState({comments: comments});
      this.intervalId = setInterval(() => {
        this.setState({videoTime: this.state.videoTime + 1});
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
    });
  },
  componentWillUnmount: function() {
    clearInterval(this.intervalId);
  },
  getInitialState: function() {
    return {
      videoUrl: 'https://www.youtube.com/embed/iwcC_6piJ3o?autoplay=1',
      videoTime: 6,
      comments: []
    };
  },
  render: function() {
    return (
      <div>
        <div style={{position: 'absolute'}}>
          {this.state.comments[this.state.videoTime] &&
          this.state.comments[this.state.videoTime].map((comment, i) => {
            return (
              <div key={i} style={Object.assign({}, commentStyle, {top: ((i + 1) * 10) + '%'})}>{comment.text}</div>
            );
          })}
        </div>
        <iframe src={this.state.videoUrl} width="640" height="390" style={{border: 0}}></iframe>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.querySelector('#root'));
