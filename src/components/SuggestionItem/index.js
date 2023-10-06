// Write your code here
import './index.css'
import {Component} from 'react'

class SuggestionItem extends Component {
  render() {
    const {suggestionsList, onAutoFill} = this.props
    const {suggestion} = suggestionsList

    const autofill = () => {
      onAutoFill(suggestion)
    }

    return (
      <li className="list-item">
        <p className="suggestion-para">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
          onClick={autofill}
        />
      </li>
    )
  }
}

export default SuggestionItem
