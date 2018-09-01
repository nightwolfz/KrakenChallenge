// If I had a few more hours, I could get this finished...
import React from 'react'
import fetchMock from 'fetch-mock'
import { renderIntoDocument } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import configureStore from './mocks/reduxStore'

const store = configureStore()

function render(component) {
  return renderIntoDocument(
    <Provider store={store}>
      <BrowserRouter>
        <Route render={() => (
          <Switch>
            {component}
          </Switch>
        )}/>
      </BrowserRouter>
    </Provider>
  )
}

function mockApi(endpoint, body) {
  fetchMock.mock('glob:' + endpoint + '*', {
    headers: { 'content-type': 'application/json' },
    body
  })
}

mockApi('documents/list', [{
  id: "5b8a6cda30aed6001a2c19f0",
  name: "something.png",
  type: "image/png",
  uploadedAt: "2018-09-01T10:41:24.115Z"
}, {
  id: "1cca6sdd39aed7771f5d22c3",
  name: "something2.png",
  type: "image/png",
  uploadedAt: "2018-09-02T04:11:02.000Z"
}])

export { React, render, mockApi, store }
