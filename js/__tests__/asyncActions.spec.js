// @flow

import moxios from 'moxios';
import { addAPIData } from '../actionCreators';
import getAPIDetails from '../asyncActions';

const strangerThings = {
  title: 'The Americans',
  year: '2013–',
  description: 'Two Soviet intelligence agents pose as a married couple to spy on the American government.',
  poster: 'ta.jpg',
  imdbID: 'tt2149175',
  trailer: 'HjuUkbhsI24',
  rating: '8.6'
};

test('getApiDetails', (done: Function) => {
  const dispatchMock = jest.fn(); // pass this in as the dispatch fn and test later if it was called with the correct params
  moxios.withMock(() => {
    getAPIDetails(strangerThings.imdbID)(dispatchMock); // we're testing to see if it's called with the correct params
    moxios.wait(() => {
      // tell moxios to wait
      const request = moxios.requests.mostRecent(); // check if it was called with the right url
      // console.log('**********************');
      // console.log(request);
      request
        .respondWith({
          // instructs moxios what to response with
          status: 200, // respond with a 200 - can also test if it was a 404 etc..
          response: strangerThings // respond with strangerThings data - can also test if it had an erorr etc...
        })
        .then(() => {
          expect(request.url).toEqual(`http://localhost:3000/${strangerThings.imdbID}`); // testing that the correct api is being called
          expect(dispatchMock).toBeCalledWith(addAPIData(strangerThings)); // testing that correct action is being dispatched
          done();
        });
    });
  });
});
