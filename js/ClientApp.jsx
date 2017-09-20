// @flow

import React from 'react';
import { render } from 'react-dom';
// import Perf from 'react-addons-perf';
import App from './App';

// window.Perf = Perf; // does not currently work with React fiber
// Perf.start();

// can also use:
// Perf.stop()
// Perf.printWasted()
// Perf.printInclusive() --- exclusive of lifecycle methods
// Perf.printExclusive() --- exclusive of lifecycle methods

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
