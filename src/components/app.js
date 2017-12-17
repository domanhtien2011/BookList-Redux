import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import VideoList from '../containers/video-list';
import VideoDetail from '../containers/video-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <BookList />
          </div>
          <div className="col col-md-2">
            <BookDetail />
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <VideoList />
          </div>
          <div className="col col-md-2">
            <VideoDetail />
          </div>
        </div>
      </div>
    );
  }
}
