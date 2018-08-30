import React, {Component} from 'react'
import {connect} from 'react-redux'

@connect(state => {
  return {}
})
class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <main className="container">
        {this.props.children}
      </main>
    )
  }
}

export default App
