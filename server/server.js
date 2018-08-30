import config from '../core/config'
import http from 'http'
import Koa from 'koa'
import mount from 'koa-mount'
import serve from 'koa-static'
import favicon from 'koa-favicon'
import convert from 'koa-convert'
import bodyParser from 'koa-better-body'
import {readFileSync} from 'fs'

// Initialize server
const app = new Koa()
const server = http.createServer(app.callback())

// Serve static files
for(const [k, v] of Object.entries(config.http.static)) {
  app.use(mount(k, serve(v, {index: false})))
}

// Middleware
app.use(favicon(config.http.favicon))
app.use(convert(bodyParser({
  formLimit: '200kb',
  jsonLimit: '200kb',
  bufferLimit: '4mb'
})))

const indexHTML = readFileSync(config.http.indexHTML, 'utf8')

// Routes
app.use(async(ctx) => {
  ctx.body = indexHTML.replace(/{bundleURL}/g, config.server.bundleURL)
})

server.listen(config.http.port, () => {
  console.info('[server] listening to', config.http.port)
})
