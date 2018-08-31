import React, {Component} from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import IconUpload from './icons/IconUpload'
import {documentsUpload} from '../stores/documents/actions'

@connect()
class Upload extends Component {

  state = {
    active: false,
    uploads: [],
    dragging: false,
    file: null,
    showSuccess: false,
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

    // Maybe we should support multiple file uploads but seems overkill at this point
    for (let i = 0; i < files.length; i++) {
      console.warn('Uploaded', files[i].type)
      dispatch(documentsUpload(files[i], () => {
        this.setState({ showSuccess: true })
        setTimeout(() => {
          // this.setState({
          //   active: false,
          //   showSuccess: false,
          // })
        }, 1500)
      }))
    }
  }

  onClick = () => {
    this.setState(state => {
      return {
        active: !state.active
      }
    })
  }

  render() {
    const {showSuccess} = this.state
    const classModel = classnames('modal', {
      active: this.state.active,
    })

    return (
      <>
        <button onClick={this.onClick} aria-label="Upload">Upload</button>
        <div className={classModel}>
          <a onClick={this.onClick} className="modal-overlay" aria-label="Close"/>
          <div className="modal-container">
            <div className="modal-header">
              <a onClick={this.onClick} className="btn btn-clear float-right" aria-label="Close"/>
              {showSuccess ? (
                <>
                  <div className="modal-title h5">Document was successfully uploaded!</div>
                  <p>Congrats, you did it! You should be proud.</p>
                </>
              ) : (
                <>
                  <div className="modal-title h5">Upload Document</div>
                  You can also drag & drop the document onto the box below
                </>
              )}
            </div>
            <div className="modal-body">
              <div className="content">
                {showSuccess ? null : (
                  <div className={classnames('dropzone', !this.state.dragging ? 'dropzone-dragging' : '')}>
                    <IconUpload className="no-events"/>

                    {this.state.uploads.map(item => (
                      <div>
                        <span>{item.progress} Uploading ...</span>
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
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Upload
