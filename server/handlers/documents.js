//import request from 'core/request'

export async function list(ctx) {
  const { id } = ctx.request.query
  ctx.body = { id }
}

export async function remove(ctx) {
  const { id } = ctx.request.query
  ctx.body = { id }
}

export async function upload(ctx) {
  const { file } = ctx.request.body
  ctx.body = {}
}
