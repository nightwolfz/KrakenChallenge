const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

// Merge with base configuration
//-------------------------------
Object.assign(config, {
  mode: 'development',
  cache: true,
  devtool: 'source-map', // eval cheap-module-eval-source-map source-map
  entry: {
    bundle: [
      `webpack-dev-server/client?http://localhost:3001`,
      'webpack/hot/only-dev-server'
    ].concat(config.entry.bundle)
  },
  output: Object.assign(config.output, {
    publicPath: `http://localhost:3001/build/`,
    pathinfo: true
  })
})

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.WatchIgnorePlugin([
    path.join(__dirname, '.git'),
    path.join(__dirname, '.idea'),
    path.join(__dirname, 'build'),
    path.join(__dirname, 'node_modules'),
    path.join(__dirname, 'server'),
  ]),
  new webpack.EnvironmentPlugin({
    'BROWSER': true,
    'NODE_ENV': JSON.stringify('development'),
  })
])

// Run DEV server for hot-reloading
//---------------------------------
const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Expose-Headers': 'SourceMap,X-SourceMap'
  },
  //hot: true,
  compress: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: false,
    ignored: /node_modules/
  },
  stats: {
    colors: true,
    hash: false,
    version: false,
    chunks: false,
    modules: false,
    children: false,
    chunkModules: false
  }
})

server.listen(3001, function(err) {
  if (err) return console.error('webpack:error', err)

  console.info('[webpack] Running on port 3001')
})
