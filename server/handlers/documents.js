//import request from 'core/request'
import fs from 'fs-extra-promise'
import path from 'path'
import {omit} from 'lodash'
import config from '../../core/config'
import Document from '../models/Document'

export async function list(ctx) {
  const { id } = ctx.request.query
  try {
    const documents = await Document.find({})
    ctx.body = documents
  } catch(err) {
    console.error(err)
    ctx.body = []
  }
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
  const document = await Document.findOne({ _id: id })

  if (!document) {
    console.warn('Document', id, 'not found')
    ctx.body = { success: false }
    return
  }

  const documentURI = document.docURI //path.join(config.http.uploads, id)

  try {
    await Document.remove({ _id: document._id })
    await fs.unlink(documentURI)
    ctx.body = { success: true, id }
  } catch(err) {
    console.error('Error deleting', err)
    ctx.body = { success: false }
  }
}

export async function upload(ctx) {
  // Making sure that the file is safe is a whole other can of worms
  // That alone could take 48 hours, so we're going to skip it
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
