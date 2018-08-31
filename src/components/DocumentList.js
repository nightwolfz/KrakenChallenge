import React, {Component} from 'react'
import {connect} from 'react-redux'
import {range} from 'lodash'
import Document from './Document'

@connect()
class DocumentList extends Component {

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>DocumentList</h1>
        {range(0, 10).map(item => (
          <Document key={item}/>
        ))}
      </div>
    )
  }
}

export default DocumentList
