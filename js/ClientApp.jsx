// @flow

import React from 'react';
import { render } from 'react-dom';
// import Perf from 'react-addons-perf';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// window.Perf = Perf; // does not currently work with React fiber
// Perf.start();

// can also use:
// Perf.stop()
// Perf.printWasted()
// Perf.printInclusive() --- exclusive of lifecycle methods
// Perf.printExclusive() --- exclusive of lifecycle methods

const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
