const path = require('path');

module.exports = {
  entry: './client/index.js',

  output: {
    path: path.resolve('public'),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
