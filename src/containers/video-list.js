import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectVideo } from '../actions/index';

class VideoList extends Component {
  renderList() {
    console.log(this.props.videos.map);
    return (
      this
        .props
        .videos
        .map(video => (
          <li
            onClick={() => {
              let a = this.props.selectVideo
              console.log(typeof a, 'type', a)
              this.props.selectVideo(video)
            }}
            className="list-group-item"
            key={video.title}
          >{video.title}
          </li>
        ))

    )
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// Whatever is returned will be shown up as props inside of VideoList
function mapStateToProps(state) {
  return {
    // a: '123'
    videos: state.videos
  };
}

function mapDispatchToProps(dispatch) {
  // Whenever selectVideo is called, the result should be passed to all of our
  // reducers
  return bindActionCreators({
    selectVideo
  }, dispatch);
}


// 1. Whenever our Application's state changes, our containers will be re-rendered
// 2. Whenever our Application's state changes, the object in the state will be re-assigned to props of the container. (videos: state.videos)
export default connect(mapStateToProps, mapDispatchToProps)(VideoList);