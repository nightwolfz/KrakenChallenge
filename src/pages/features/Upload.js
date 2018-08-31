import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import classnames from 'classnames'

@connect()
class Upload extends Component {

  state = {
    active: false
  }

  onClick = () => {
    this.setState(state => {
      return {
        active: !state.active
      }
    })
  }

  render() {
    const classModel = classnames('modal', {
      active: this.state.active,
    })

    return (
      <div>
        <button onClick={this.onClick} aria-label="Upload">Upload</button>
        <div className={classModel}>
          <a onClick={this.onClick} className="modal-overlay" aria-label="Close"/>
          <div className="modal-container">
            <div className="modal-header">
              <a onClick={this.onClick} className="btn btn-clear float-right" aria-label="Close"/>
              <div className="modal-title h5">Upload</div>
            </div>
            <div className="modal-body">
              <div className="content">
                Select button here
              </div>
            </div>
            <div className="modal-footer">
              ...
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Upload
