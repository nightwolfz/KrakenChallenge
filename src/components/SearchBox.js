import React, {Component} from 'react'
import {connect} from 'react-redux'
import {debounce} from 'lodash'
import {documentsSearch} from '../stores/documents/actions'

@connect()
class SearchBox extends Component {

  state = {
    searchText: ''
  }

  debouncedSearch = debounce(e => {
    const {searchText} = this.state
    const {dispatch} = this.props
    dispatch(documentsSearch(searchText))
  }, 800)

  onChange = (e) => {
    const { searchText } = this.state

    if (searchText !== e.target.value) {
      this.setState({
        searchText: e.target.value
      }, this.debouncedSearch)
    }
  }

  onSubmit = () => {
    this.debouncedSearch()
  }

  render() {
    const { searchText } = this.state

    return (
      <form className="searchbox" onSubmit={this.onSubmit}>
        <input
          type="search"
          ref={ref => this.search = ref}
          placeholder="Search documents..."
          tabIndex="0"
          value={searchText}
          onChange={this.onChange}
        />
        <i className="icon icon-search" aria-hidden="true"/>
      </form>
    )
  }
}

export default SearchBox
