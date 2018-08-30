import {DOCUMENTS_ADD, DOCUMENTS_REMOVE, DOCUMENTS_UPDATE} from '../constants'

const initialState = {}

export function documents(state = initialState, { type, data }) {
  switch(type) {
    case DOCUMENTS_ADD: {
      return {}
    }

    case DOCUMENTS_REMOVE: {
      return {}
    }

    case DOCUMENTS_UPDATE: {
      return {}
    }

    default:
      return state
  }
}
