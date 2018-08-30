const path = require('path')
const ExtractCSS = require('mini-css-extract-plugin')
const sources = path.resolve.bind(path, __dirname)

module.exports = {
  entry: {
    //polyfills: ['promise-polyfill', 'isomorphic-fetch'],
    bundle: sources('src/config/client.js')
  },
  node: {
    global: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          sources('src'),
          sources('core')
        ],
        query: {
          babelrc: false,
          cacheDirectory: false,
          presets: [
            ["@babel/preset-env", { "modules": false }],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-transform-runtime",
            '@babel/plugin-proposal-object-rest-spread',
            ["@babel/plugin-proposal-decorators", {legacy: true}],
            '@babel/plugin-proposal-class-properties'
          ]
        }
      },
      {
        test: /\.(jpg|png|svg|ttf|otf|eot|woff2?)$/,
        use: 'url-loader?limit=16384',
        include: [
          sources('src'),
        ]
      },
      {
        test: /\.(css|scss)?$/,
        use: [
          ExtractCSS.loader,
          'css-loader?sourceMap',
          'sass-loader?sourceMap',
        ],
        include: [
          sources('src'),
        ]
      }
    ]
  },

  output: {
    filename: '[name].js',
    path: sources('build'),
    chunkFilename: 'bundle.[name].js',
    sourcePrefix: '',
  },

  resolve: {
    alias: {
      'core': sources('core'),
      'proptypes': 'proptypes/disabled.js',
    },
  },

  plugins: [
    new ExtractCSS({
      filename: 'bundle.css',
      allChunks: false
    }),
  ]
};
