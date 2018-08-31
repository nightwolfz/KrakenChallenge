import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from './layout/Header'
import Footer from './layout/Footer'

@connect(state => {
  return {}
})
class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <main className="container">
        <Header/>
        {this.props.children}
        <Footer/>
      </main>
    )
  }
}

export default App
