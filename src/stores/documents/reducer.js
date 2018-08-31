import {DOCUMENTS_LIST, DOCUMENTS_ADD, DOCUMENTS_REMOVE, DOCUMENTS_UPDATE} from '../constants'

const initialState = []

export function documents(state = initialState, { type, data }) {
  switch(type) {
    case DOCUMENTS_LIST: {
      return data
    }

    case DOCUMENTS_ADD: {
      return [...state, data]
    }

    case DOCUMENTS_REMOVE: {
      return state.filter(doc => doc.id !== data.id)
    }

    case DOCUMENTS_UPDATE: {
      return []
    }

    default:
      return state
  }
}
