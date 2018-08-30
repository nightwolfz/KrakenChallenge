import React, {Component} from 'react'
import {Switch} from 'react-router-dom'
import App from '../App'

//@TODO
//import Header from './Header'
//import Footer from './Footer'
//import Home from '../Home'

class Index extends Component {
  render() {
    return (
      <div style={{ marginTop: '0.4rem' }}>
        <App>
          <Switch>
            <p>Home test</p>
            {/*<Route path="/" component={ Home } exact/>*/}
          </Switch>
        </App>
      </div>
    )
  }
}

export default Index

