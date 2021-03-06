import request from 'core/request'
import {DOCUMENTS_LIST_RESPONSE, DOCUMENTS_ADD, DOCUMENTS_REMOVE, DOCUMENTS_LIST_REQUEST} from '../constants'

export function documentsList() {
  return async(dispatch) => {
    dispatch({
      type: DOCUMENTS_LIST_REQUEST,
    })
    // Simulate latency so we can time to admire the loading indicator
    setTimeout(async() => {
      const response = await request.get(`documents/list`)
      dispatch({
        type: DOCUMENTS_LIST_RESPONSE,
        data: response,
      })
    }, 500)
  }
}

export function documentsSearch(searchText) {
  return async(dispatch) => {
    dispatch({
      type: DOCUMENTS_LIST_REQUEST,
    })

    // Simulate latency so we can time to admire the loading indicator
    setTimeout(async() => {
      const response = await request.get(`documents/search`, { searchText })
      dispatch({
        type: DOCUMENTS_LIST_RESPONSE,
        data: response,
      })
    }, 500)
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
