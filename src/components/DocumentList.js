import React, {Component} from 'react'
import {connect} from 'react-redux'
import {range} from 'lodash'
import Document from './Document'
import {documentsList} from '../stores/documents/actions'

@connect(state => ({
  documents: state.documents
}))
class DocumentList extends Component {

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(documentsList())
  }

  render() {
    const {documents} = this.props

    return (
      <div className="document-list">
        <h1>DocumentList</h1>
        {documents.map(item => (
          <Document key={item.id} data={item}/>
        ))}
      </div>
    )
  }
}

export default DocumentList
