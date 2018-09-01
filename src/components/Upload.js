import React, {Component} from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import eachOfSeries from 'async/eachOfSeries'
import asyncMap from 'async/map'
import IconUpload from './icons/IconUpload'
import {documentsUpload} from '../stores/documents/actions'

@connect()
class Upload extends Component {

  state = {
    active: false,
    dragging: false,
    files: [],
    uploads: [],
  }

  componentDidMount() {
    document.addEventListener('drop', this.handleDrop, true)
    document.addEventListener('dragover', this.handleDragOver, true)
    document.addEventListener('dragleave', this.handleDragEnd, true)
  }

  componentWillUnmount() {
    document.removeEventListener('drop', this.handleDrop, true)
    document.removeEventListener('dragover', this.handleDragOver, true)
    document.removeEventListener('dragleave', this.handleDragEnd, true)
  }

  handleSelect = async(e) => {
    e.preventDefault()
    await this.onUpload(e.target.files)
  }

  handleDrop = async(e) => {
    e.preventDefault()
    await this.onUpload(e.dataTransfer.files)
  }

  handleDragOver = (e) => {
    e.preventDefault()
    if (!this.state.dragging) {
      this.setState({ dragging: true })
    }
  }

  handleDragEnd = (e) => {
    e.preventDefault()
    this.setState({ dragging: false })
  }

  onUpload = async(files) => {
    const {dispatch} = this.props
    const {files: uploaded} = this.state

    // Support multiple file uploads
    asyncMap(files, (file, next) => {
      dispatch(documentsUpload(file, () => {
        next(null, file.name)
      }))
    }, (err, results) => {
      if (err) {
        // Needs proper error handling, eventually...
        console.warn('Something went wrong while uploading:', err)
      }
      this.setState({
        files: [...uploaded, ...results],
      })
    })
  }

  handleClose = () => {
    this.setState(state => {
      return {
        active: !state.active,
        uploads: [],
        files: [],
      }
    })
  }

  render() {
    const classModel = classnames('modal', {
      active: this.state.active,
    })
    return (
      <>
        <button onClick={this.handleClose} aria-label="Upload">Upload</button>
        <div className={classModel}>
          <a onClick={this.handleClose} className="modal-overlay" aria-label="Close"/>
          <div className="modal-container">
            <div className="modal-header">
              <a onClick={this.handleClose} className="btn btn-clear float-right" aria-label="Close"/>
              <div className="modal-title h2">Upload Document</div>
              <p>
                You can also <b>drag & drop</b> the documents onto the box below.<br/>
                Also supports <b>multiple</b> uploads, just drop a bunch of them here.
              </p>
            </div>
            <div className="modal-body">
              <div className="content">
                <div className={classnames('dropzone', !this.state.dragging ? 'dropzone-dragging' : '')}>
                  <IconUpload className="no-events"/>

                  {this.state.files.map(name => (
                    <div className="uploaded" key={name}>
                      <span><b>{name}</b> uploaded</span>
                    </div>
                  ))}

                  {/* @TODO: Add realtime progress if there's time */}
                  {this.state.uploads.map(item => (
                    <div key={item.name}>
                      <span>{item.progress} uploading ...</span>
                    </div>
                  ))}
                  <br/> {/* don't judge me, time is of the essence */}
                  <br/>
                  <div className="mt-3">
                    <label className="button">
                      <input type="file" className="hidden" onChange={this.handleSelect}/>
                      Select File
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Upload
