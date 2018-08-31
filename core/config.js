import {resolve} from 'path'

const isProduction = process.env.NODE_ENV === 'production'
const root = (dir) => resolve(__dirname, '..', dir)

export default {
  http: {
    port: 3000,
    indexHTML: root('src/assets/index.html'),
    favicon: root('src/assets/favicon.ico'),
    uploads: root('uploads'),
    static: {
      '/uploads': root('uploads'),
      '/build': root('build'),
      '/assets': root('src/assets')
    }
  },
  server: {
    bundleURL: !isProduction ? `//localhost:3001` : '',
  },
  session: {
    secret: 's#/m!t7ft~r7het#uf~my7y3zl14~ghorse',
    expires: 31 * 24 * 3600 // 1 month
  },
  databases: {
    mongo: 'mongodb://127.0.0.1:27017/krakenChallenge'
  },
}
