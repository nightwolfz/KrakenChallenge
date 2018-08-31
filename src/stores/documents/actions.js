import request from 'core/request'
import {DOCUMENTS_LIST, DOCUMENTS_ADD, DOCUMENTS_REMOVE} from '../constants'

export function documentsList() {
  return async(dispatch) => {
    const response = await request.get(`documents/list`)
    dispatch({
      type: DOCUMENTS_LIST,
      data: response,
    })
  }
}

export function documentsSearch(searchText) {
  return async(dispatch) => {
    const response = await request.get(`documents/search`, { searchText })
    dispatch({
      type: DOCUMENTS_LIST,
      data: response,
    })
  }
}

export function documentsRemove(id) {
  return async(dispatch) => {
    const response = await request.get(`documents/remove`, { id })
    dispatch({
      type: DOCUMENTS_REMOVE,
      data: response,
    })
  }
}

export function documentsUpload(file, callback = function() {}) {
  return async(dispatch) => {
    try {
      const response = await request.upload(`documents/upload`, file)
      dispatch({
        type: DOCUMENTS_ADD,
        data: JSON.parse(response),
      })
      callback()
    } catch(err) {
      console.error(err)
    }
  }
}
