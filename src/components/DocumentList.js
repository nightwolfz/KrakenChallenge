import React, {Component} from 'react'
import {connect} from 'react-redux'
import {range, isEmpty} from 'lodash'
import Document from './Document'
import {documentsList} from '../stores/documents/actions'

@connect(state => ({
  loading: state.documents.loading,
  documents: state.documents.items,
}))
class DocumentList extends Component {

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(documentsList())
  }

  render() {
    const {documents, loading} = this.props

    if (loading) {
      return (
        <div className="document-list">
          <h1>Documents</h1>
          <h4>Loading...</h4>
        </div>
      )
    }

    return (
      <div className="document-list">
        <h1>Documents</h1>

        {isEmpty(documents) ? (
          <h4>No documents found.</h4>
        ): null}

        {documents.map(item => (
          <Document key={item.id} data={item}/>
        ))}
      </div>
    )
  }
}

export default DocumentList
