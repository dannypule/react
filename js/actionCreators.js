import { SET_SEARCH_TERM, CLEAR_SEARCH_TERM } from './actions';

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}

export function clearSearchTerm() {
  return {
    type: CLEAR_SEARCH_TERM,
    payload: ''
  };
}
