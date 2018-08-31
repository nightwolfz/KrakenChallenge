//import request from 'core/request'
import fs from 'fs'
import path from 'path'
import config from '../../core/config'
import Document from '../models/Document'

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

  const documentURI = path.join(config.http.uploads, id)
  await Document.remove(id)

  fs.unlink(image, function(err) {
    if (err) return console.error('Error deleting', image)
    console.info('Deleted', image)
  })

  ctx.body = { success: true }
}

export async function upload(ctx) {
  const docs = []

  for (const file of ctx.request.files) {
    const docURI = await resize(file.path)
    const doc = new Document({ docURI })
    await doc.save()
    docs.push(doc.toJSON())
  }
  ctx.status = 201
  ctx.body = docs
}
