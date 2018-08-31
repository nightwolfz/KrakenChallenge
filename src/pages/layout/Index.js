import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import App from '../App'
import Home from '../Home'

class Index extends Component {
  render() {
    // We don't actually need a router here, let's say it's "future proofed" hehe
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

