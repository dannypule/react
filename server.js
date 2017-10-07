/* eslint no-console:0 */

require('babel-register'); // hooks into the 'require' and run it through babel - can also use 'babel-node' instead

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');
const compression = require('compression');
// const webpackDevMiddleware = require('webpack-dev-middleware'); // relevant to serverside rendering
// const webpackHotMiddleware = require('webpack-hot-middleware'); // relevant to serverside rendering
// const webpack = require('webpack');
const App = require('./js/App').default; // need to put default as 'export default' returns an object with default key on it
// const webpackConfig = require('./webpack.config'); // relevant to serverside rendering

const StaticRouter = ReactRouter.StaticRouter;
const port = 8080;
const baseTemplate = fs.readFileSync('./index.html'); // readFileSync is okay on this type of start up
const template = _.template(baseTemplate);

const server = express();

// =========== START - relevant to serverside rendering =================
// const compiler = webpack(webpackConfig);
// server.use(
//   // setup server to also use hot module replacement
//   // hmr is automatically disabled if node env is production
//   webpackDevMiddleware(compiler, {
//     publicPath: webpackConfig.output.publicPath
//   })
// );

// server.use(webpackHotMiddleware(compiler));
// =========== END =================

server.use(compression()); // does gzipping etc

server.use('/public', express.static('./public')); // says: statically serve everything that is in the public directory and add correct mime types for images and do other things

server.use((req, res) => {
  console.log(req.url);
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      {
        location: req.url,
        context
      },
      React.createElement(App)
    )
  );

  if (context.url) {
    res.redirec(context.url);
    return;
  }

  res.write(
    template({
      body
    })
  );

  res.end();
});

console.log(`Listening on ${port}`);
server.listen(port);
