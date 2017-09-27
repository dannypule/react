// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { setSearchTerm, clearSearchTerm } from './actionCreators';

class Landing extends Component {
  props: {
    searchTerm: string,
    handleSearchTermChange: Function,
    clearSearchTerm: Function,
    history: RouterHistory
  };

  goToSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.history.push('/search'); // history is now injected into every route so no need to use context
  };

  browseAll = (event: SyntheticEvent) => {
    event.preventDefault();
    this.props.clearSearchTerm(event);
    this.props.history.push('/search'); // history is now injected into every route so no need to use context
  };

  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <input
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
            type="text"
            placeholder="search"
          />
        </form>
        <button onClick={this.browseAll}>or Browse All</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm }); // subscribe to a slice of state

// insert some dispatch-ability into the component via props
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange: event => {
    dispatch(setSearchTerm(event.target.value));
  },
  clearSearchTerm: () => {
    dispatch(clearSearchTerm());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
