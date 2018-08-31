import logger from 'debug'
import mongoose from 'mongoose'
import config from './config'

// Use native promises
mongoose.Promise = Promise

export function connect(callback) {
  // Initialize our connection
  return mongoose.connect(config.databases.mongo,  { useNewUrlParser: true })
    .then(callback)
    .catch((err) => logger('database:error')(err))
}

const db = mongoose.connection
db.on('error', (err) => logger('database:error')(err))
db.once('open', () => logger('database:info')(config.databases.mongo))

export default db
