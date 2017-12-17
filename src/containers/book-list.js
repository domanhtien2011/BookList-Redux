import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';


// A container(smart component) is just a react component(a dump component). However, which (dump)component should be promoted to a container?
// In general, only the most parent component that cares about a particular state should be promoted to a container. No matter how many childrens it has and its own children can have their own states, but only the parent should be connected to redux.
// BookList cares bout a list of books
class BookList extends Component {
  renderList() {
    return (
      this
        .props
        .books
        .map(book => (
          <li
            onClick={() => this.props.selectBook(book)}
            className="list-group-item"
            key={book.title}
          >{book.title}
          </li>
        ))
    )
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

// Whatever is returned will be shown up as props inside of BookList
function mapStateToProps(state) {
  return {
    // a: '123'
    // The state here is returned by our reducers(which are just functions that return pieces of values(state))
    books: state.books
  };
}

// Any returned from this function will end up as props on the BookList
// container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our
  // reducers
  return bindActionCreators({
    selectBook,
  }, dispatch);
}

// Promote BookList from a component to a container - it needs to know about
// this dispatch method, selectBook. Make it available as a props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
