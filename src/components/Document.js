import React, {Component} from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import dateformat from 'dateformat-light'
import {documentsRemove} from '../stores/documents/actions'

@connect()
class Document extends Component {

  state = {
    active: false,
  }

  onClick = () => {
    this.setState(state => {
      return { active: !state.active }
    })
  }

  onDelete = () => {
    const {dispatch, data} = this.props

    dispatch(documentsRemove(data.id))

    this.setState(state => {
      return { active: !state.active }
    })
  }

  render() {
    const {data} = this.props
    const {showSuccess} = this.state
    const classModel = classnames('modal modal-sm', {
      active: this.state.active,
    })

    return (
      <>
        <div className="document-item" onClick={this.onClick}>
          <SvgDocumentIcon/>
          <br/>
          <b>{data.name}</b>
        </div>
        <div className={classModel}>
          <a className="modal-overlay" aria-label="Close" onClick={this.onClick}/>
          <div className="modal-container">
            <div className="modal-header">
              <a onClick={this.onClick} className="btn btn-clear float-right" aria-label="Close"/>
              <div className="modal-title h5">Do you want to delete this document?</div>
            </div>
            <div className="modal-body">
              <p>Name: <b>{data.name}</b></p>
              <p>Type: <b>{data.type}</b></p>
              <p>Uploaded on <b>{dateformat(data.uploadedAt, 'dd/mm HH:MM')}</b></p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary button" onClick={this.onDelete}>Delete</button>
              <a className="btn btn-link" onClick={this.onClick}>Close</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Document

const SvgDocumentIcon = () => (
  <svg enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" style={{
    height: 128,
  }}>
    <rect width="32" height="32" fill="none"/>
    <path fill="#fff" d="m18.414 0h-18.414v32h24v-26.416l-5.586-5.584zm-0.416 2.413 3.588 3.587h-3.588v-3.587zm-15.998 27.587v-28.002h14v6.001h6v22.001h-20zm18-14v2h-16v-2zm0-4v2h-16v-2zm-4 8v2h-12v-2z"/>
  </svg>
)
