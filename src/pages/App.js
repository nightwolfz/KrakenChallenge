import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from './layout/Header'
import Upload from '../components/Upload'
import SearchBox from '../components/SearchBox'

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
      </main>
    )
  }
}

export default App
