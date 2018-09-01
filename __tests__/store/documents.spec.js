import { DOCUMENTS_ADD, DOCUMENTS_REMOVE } from '../../src/stores/constants'
import { documents } from '../../src/stores/documents/reducer'

test('Adds a new document', () => {
  const action = {
    type: DOCUMENTS_ADD,
    data: {
      id: "5b8a6cda30aed6001a2c19f0",
      name: "something.png",
      type: "image/png",
      uploadedAt: "2018-09-01T10:41:24.115Z"
    }
  }
  const reducedState = documents(undefined, action)

  expect(reducedState.items).toHaveLength(1)
  expect(reducedState.items[0]).toEqual({
    id: action.data.id,
    name: action.data.name,
    type: action.data.type,
    uploadedAt: action.data.uploadedAt,
  })
})

test('Removes a new document', () => {
  const action = {
    type: DOCUMENTS_REMOVE,
    data: {
      id: "5b8a6cda30aed6001a2c19f0",
    }
  }
  const reducedState = documents({
    loading: false,
    items: [{
      id: "5b8a6cda30aed6001a2c19f0",
      name: "something.png",
      type: "image/png",
      uploadedAt: "2018-09-01T10:41:24.115Z"
    }]
  }, action)

  expect(reducedState.items).toHaveLength(0)
})
