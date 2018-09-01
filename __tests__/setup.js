// import {JSDOM} from 'jsdom'
//import jest from 'jest'
import '../../core/polyfills'
import '../../core/globals'
//import '../../core/logger'

// const dom = new JSDOM('<!doctype html><html><body></body></html>')
//
// global.window = dom.window
// global.document = window.document
// global.window.HTMLCanvasElement.prototype.getContext = identity
// global.navigator = {
//   userAgent: 'node.js',
// }
// global.window.gl = global.gl = {
//   getExtension: identity,
// }
//jest.setTimeout(100000)

process.on('unhandledRejection', function (err) {
  console.error(err)
})
