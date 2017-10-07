const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname, // set the context using __dirname
  entry: [
    'react-hot-loader/patch', // normally used locally but we're commenting it out since we're server-side rendering locally
    'webpack-dev-server/client?http://localhost:8080', // normally used locally but we're commenting it out since we're server-side rendering locally
    'webpack/hot/only-dev-server', // normally used locally but we're commenting it out since we're server-side rendering locally
    // 'webpack-hot-middleware/client?path=__webpack_hmr&timeout=2000', // orient webpack to read from the normal server we wrote instead of the webpack dev server (used if server-side rendering locally)
    './js/ClientApp.jsx' // entry point of app's code
  ],
  devtool: 'check-eval-source-map', // sourcemap tool
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true, // hot reload is true
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader', // apply eslint load for js and jsx files
        exclude: '/node_modules' // exclude node modules folder
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader' // apply babel-loader to js and jsx files
      }
    ]
  }
};
