import request from 'core/request'
import {DOCUMENTS_LIST, DOCUMENTS_ADD} from '../constants'

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

export function documentsUpload(file) {
  return async(dispatch) => {
    try {
      const response = await request.upload(`documents/upload`, file)
      dispatch({
        type: DOCUMENTS_ADD,
        data: response,
      })
    } catch(err) {
      console.error(err)
    }
  }
}
