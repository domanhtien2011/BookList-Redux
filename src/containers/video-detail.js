import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoDetail extends Component {
  render() {
    if (!this.props.video) {
      return <div>Select a video for more details.</div>
    }
    return (
      <div>
        <h3>Details for: </h3>
        <div>Title: {this.props.video.title}</div>
        <div>Studio: {this.props.video.studio}</div>
      </div>
    );
  }
}1

function mapStateToProps(state) {
  return {
    video: state.activeVideo
  }
}

export default connect(mapStateToProps)(VideoDetail);