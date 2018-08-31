import React, {Component} from 'react'
import {connect} from 'react-redux'
import DocumentList from '../components/DocumentList'

@connect(state => {
  return {}
})
class Home extends Component {
  render() {
    return (
      <div className="columns mt-2">
        <div className="column">
          <DocumentList/>
        </div>
      </div>
    )
  }
}

export default Home
