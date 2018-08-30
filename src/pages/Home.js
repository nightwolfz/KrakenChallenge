import React, {Component} from 'react'
import {connect} from 'react-redux'

@connect(state => {
  return {}
})
class Home extends Component {
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column">
          </div>
          <div className="column">
          </div>
        </div>
      </div>
    )
  }
}

export default Home
