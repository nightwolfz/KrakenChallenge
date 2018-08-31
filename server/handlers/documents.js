//import request from 'core/request'
import fs from 'fs-extra-promise'
import path from 'path'
import {omit} from 'lodash'
import config from '../../core/config'
import Document from '../models/Document'

export async function list(ctx) {
  const { id } = ctx.request.query
  const documents = await Document.find({})

  ctx.body = documents
}

export async function search(ctx) {
  const { searchText, type } = ctx.request.query
  const query = {
    name: {
      // Allow partial matches
      $regex : new RegExp('^' + searchText + '.*', 'i') ,
    },
  }
  if (type) {
    Object.assign(query, {
      type,
    })
  }
  const documents = await Document.find(query, '-docURI')

  ctx.body = documents
}

export async function remove(ctx) {
  const { id } = ctx.request.query
  const documentURI = path.join(config.http.uploads, id)

  try {
    await Document.remove(id)
    await fs.unlink(documentURI)
    ctx.body = { success: true }
  } catch(err) {
    console.error('Error deleting', documentURI)
    ctx.body = { success: false }
  }
}

export async function upload(ctx) {
  const file = ctx.request.files[0]
  const newName = path.basename(file.path) + path.extname(file.name)
  const newURI = path.join(config.http.uploads, newName)

  try {
    await fs.copy(file.path, newURI)
    const doc = new Document({
      docURI: newURI,
      name: file.name,
      type: file.type,
    })
    await doc.save()
    ctx.status = 201
    ctx.body = omit(doc.toJSON(), 'docURI')
  } catch(err) {
    console.error('Error moving file', documentURI)
    ctx.body = { success: false }
  }
}
