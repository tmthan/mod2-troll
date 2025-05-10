const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'mod2Troll',
      type: 'umd',
    },
    globalObject: 'this',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'production',
};
