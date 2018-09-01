const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          // "plugins": ["@babel/plugin-proposal-class-properties"]
        }
      }
    ]
  },
  resolve: {
  extensions: ['*', '.js', '.jsx']
},
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
}
