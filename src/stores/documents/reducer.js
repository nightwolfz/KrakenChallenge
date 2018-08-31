import {DOCUMENTS_LIST_RESPONSE, DOCUMENTS_ADD, DOCUMENTS_REMOVE, DOCUMENTS_UPDATE, DOCUMENTS_LIST_REQUEST} from '../constants'

const initialState = {
  loading: false,
  items: [],
}

export function documents(state = initialState, { type, data }) {
  switch(type) {
    case DOCUMENTS_LIST_REQUEST: {
      return {
        loading: true,
      }
    }

    case DOCUMENTS_LIST_RESPONSE: {
      return {
        loading: false,
        items: data,
      }
    }

    case DOCUMENTS_ADD: {
      return {
        loading: false,
        items: [...state.items, data]
      }
    }

    case DOCUMENTS_REMOVE: {
      return {
        loading: false,
        items: state.items.filter(doc => doc.id !== data.id)
      }
    }

    //@TODO: If I have time, it's weekend and I'm missing out on the fun
    case DOCUMENTS_UPDATE: {
      return []
    }

    default:
      return state
  }
}
