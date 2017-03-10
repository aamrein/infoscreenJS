const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: "./src/app/infoscreen.js",
  output: {
    path: "./dist",
    filename: "app/bundle.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([
        { from: 'server.js', to: 'server.js' },
        { from: 'src/app/index.html', to: 'app/index.html' },
        { from: 'src/app/styles.css', to: 'app/styles.css' },
        { from: 'src/resources', to: 'resources' }
    ])
  ],
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/,
          options: {
            presets: ['es2015']
          }
        }
      ]
    }
};