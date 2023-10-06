// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'
import './index.css'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    this.state = {updatedSuggestionItem: props.suggestionsList, searchInput: ''}
  }

  searchChanged = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onAutoFill = suggested => {
    this.setState({
      searchInput: suggested,
    })
  }

  render() {
    const {updatedSuggestionItem, searchInput} = this.state
    const filteredSuggestionItem = updatedSuggestionItem.filter(eachLetter =>
      eachLetter.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-logo"
          alt="google logo"
        />
        <div className="search-container">
          <div className="search-bar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-logo"
              alt="search icon"
            />
            <input
              className="search-input"
              placeholder="Search Google"
              onChange={this.searchChanged}
              type="search"
              value={searchInput}
            />
          </div>
          <ul className="suggestion-container">
            {filteredSuggestionItem.map(suggestion => (
              <SuggestionItem
                suggestionsList={suggestion}
                key={suggestion.id}
                onAutoFill={this.onAutoFill}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
