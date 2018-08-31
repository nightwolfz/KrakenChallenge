//import request from 'core/request'

export async function list(ctx) {
  const { id } = ctx.request.query
  ctx.body = [{
    id: Math.random()*1000|0,
    name: 'DocName',
    timestamp: new Date()
  }, {
    id: Math.random()*1000|0,
    name: 'DocName2',
    timestamp: new Date()
  }]
}

export async function search(ctx) {
  const { searchText } = ctx.request.query
  ctx.body = [{
    id: Math.random()*1000|0,
    name: searchText,
    timestamp: new Date()
  }]
}

export async function remove(ctx) {
  const { id } = ctx.request.query
  ctx.body = { id }
}

export async function upload(ctx) {
  const { file } = ctx.request.body
  ctx.body = {}
}
