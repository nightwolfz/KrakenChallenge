import Router from 'koa-router'
import * as documents from './handlers/documents'

const router = new Router()

router.get('/documents/list', documents.list)
router.get('/documents/search', documents.search)
router.get('/documents/remove', documents.remove)
router.post('/documents/upload', documents.upload)

export default router
