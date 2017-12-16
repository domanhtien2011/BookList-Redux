import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

  renderList() {
    return this
      .props
      .books
      .map((book, index) => {
        return (
          <li
            onClick={() => this.props.selectBook(book)}
            className="list-group-item"
            key={book.title}>{book.title}</li>
        )
      })
  }

  render() {
    // console.log(this.props.a);
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>

    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will be show up as props inside of BookList
  return {
    // a: '123'
    books: state.books
  }
}

// Any returned from this function will end up as props on the BookList
// container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our
  // reducers
  return bindActionCreators({
    selectBook: selectBook
  }, dispatch)
}

// Promote BookList from a component to a container - it needs to know about
// this dispatch method, selectBook. Make it available as a props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);