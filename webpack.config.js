const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 1500,
  },
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
      controls: {
        import: './src/interfaces/controls.js',
        dependOn: 'index',
      },
    three: {
      import: './src/three.js',
      dependOn: 'shared',
    },
    shared: {
      import: [
        'lodash',
        './src/constants.js'
      ],
    },
  },
  plugins: [
    // https://medium.com/a-beginners-guide-for-webpack-2/index-html-using-html-webpack-plugin-85eabdb73474
    new HtmlWebpackPlugin({
      title: 'Output Management',
      myPageHeader: 'Hello World',
      template: './src/index.html',
      filename: 'index.html' //relative to root of the application
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    // libraryTarget: "umd" // exposes and know when to use module.exports or exports.
  },
  optimization: { 
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};