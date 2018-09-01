import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../../store/reducers'

export default function(preloadedState) {
  const thunk = applyMiddleware(thunkMiddleware)
  return createStore(
    rootReducer,
    preloadedState,
    thunk
  )
}
