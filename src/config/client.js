// This is the entry point for our client-side logic
import 'core/polyfills'
import '../assets/css/index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './redux'
import Index from '../pages/layout/Index'

// Render our component according to our routes
function renderApp() {
  ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <Index/>
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'))
}

renderApp()

// Enable hot reloading if available
if (module.hot) {
  module.hot.accept(renderApp)
}
