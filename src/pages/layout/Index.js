import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import App from '../App'
import Home from '../Home'

class Index extends Component {
  render() {
    return (
      <div style={{ marginTop: '0.4rem' }}>
        <App>
          <Switch>
            <Route path="/" component={ Home } exact/>
          </Switch>
        </App>
      </div>
    )
  }
}

export default Index

