import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from './layout/Header'
import Upload from './features/Upload'
import SearchBox from '../components/SearchBox/SearchBox'

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
