import database from '../../core/db'
import { Schema } from 'mongoose'

const schema = new Schema({
  docURI: { type: String, required: true },
  desc: { type: String, default: '' },
  type: { type: String, default: '' },
  uploadedAt: { type: Date, default: Date.now() }
}, {
  minimize: false,
  versionKey: false,
  autoIndex: true,
})

// Options
schema.set('toJSON', {
  transform(doc, ret) {
    ret.id = ret._id
    delete ret._id
  }
})

export default database.model('Document', schema)
