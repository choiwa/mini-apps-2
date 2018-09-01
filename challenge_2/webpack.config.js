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
          presets: ["@babel/preset-react"]
        }
      }
    ]
  },
  resolve: {
  extensions: ['*', '.js', '.jsx']
},
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
}
