// @flow

import { setSearchTerm, addAPIData } from '../actionCreators';

const strangerThings = {
  title: 'The Americans',
  year: '2013–',
  description: 'Two Soviet intelligence agents pose as a married couple to spy on the American government.',
  poster: 'ta.jpg',
  imdbID: 'tt2149175',
  trailer: 'HjuUkbhsI24',
  rating: '8.6'
};

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot(); // leverage snapshot ability
});

test('addAPIData', () => {
  // tests addAPIData before we test the thunk below
  // we need to make sure this is iron clad before testing the thunk
  expect(addAPIData(strangerThings)).toMatchSnapshot(); // leverage snapshot ability
});
