import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Upload from './features/Upload'

@connect(state => {
  return {}
})
class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <main className="container">
        <header className="navbar">
          <section className="navbar-section">
            <Upload/>
          </section>
          <section className="navbar-section">
            <div className="input-group input-inline">
              <input className="form-input" type="text" placeholder="Enter document name..."/>
              <button className="btn btn-primary input-group-btn">Search</button>
            </div>
          </section>
        </header>
        {this.props.children}
      </main>
    )
  }
}

export default App
