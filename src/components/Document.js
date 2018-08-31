import React, {Component} from 'react'
import {connect} from 'react-redux'

@connect()
class Document extends Component {

  componentDidMount() {
  }

  render() {
    const {data} = this.props
    return (
      <div className="document-item mr-2 mb-2">
        <SvgDocumentIcon/>
        <br/>
        <b>{data.name}</b>
      </div>
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
