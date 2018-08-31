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

export function documentsUpload() {
  return async(dispatch) => {
    const response = await request.post(`documents/upload`)
    dispatch({
      type: DOCUMENTS_ADD,
      data: response,
    })
  }
}
