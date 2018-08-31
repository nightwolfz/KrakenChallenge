import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../stores/reducers'

const logger = createLogger({
  collapsed: true,
  timestamp: false,
  logErrors: false,
})

let thunk = applyMiddleware(thunkMiddleware, logger)
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  thunk,
)

if (module.hot) {
  module.hot.accept('../stores/reducers', function() {
    let nextRootReducer = require('../stores/reducers')
    return store.replaceReducer(nextRootReducer)
  })
}

export {store}
