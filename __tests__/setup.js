import {JSDOM} from 'jsdom'
import '../core/polyfills'
import '../core/globals'

const dom = new JSDOM('<!doctype html><html><body></body></html>')

global.window = dom.window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}

process.on('unhandledRejection', function (err) {
  console.error(err)
})
