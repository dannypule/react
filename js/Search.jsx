// @flow

import React from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: Array<Show> // an array of type `Show`
}) => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(
          (show: Show) => `${show.title} ${show.title}`.toLowerCase().indexOf(props.searchTerm.toLowerCase()) >= 0
        )
        .map((show: Show) => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

// ===============================
// take a slice of state and map it to props
// ===
const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);
