import React, {Component} from 'react'
import {connect} from 'react-redux'
import Upload from '../features/Upload'
import SearchBox from '../../components/SearchBox/SearchBox'

@connect()
class Header extends Component {
  render() {
    return (
      <header className="navbar">
        <section className="navbar-section">
          <Upload/>
        </section>
        <section className="navbar-section">
          <SearchBox/>
        </section>
      </header>
    )
  }
}

export default Header
