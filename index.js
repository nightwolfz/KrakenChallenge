const {spawn} = require('child_process')
const {debounce} = require('lodash')
const chokidar = require('chokidar')

let server
function spawnAndWait() {
  console.info('✓ SERVER SPAWN ')
  server = spawn('node', ['--require', '@babel/register', './server/server'], { stdio: 'inherit' })
  server.on('error', function(err) {
    console.error('spawnAndWait', err)
  })
  server.on('exit', function() {
    spawnAndWait()
  })
}

const options = { ignored: /(^|[/\\])\../, persistent: true }
const watcher = chokidar.watch([
  'server/**/*.js',
], options)

watcher.on('ready', () => {
  spawnAndWait()
  watcher.on('all', debounce(() => server.kill(), 100))
})

require('./webpack.dev')
