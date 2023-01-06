/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React from 'react'
import { optionType } from '../../store/types/types'
import './Suggestion.css'

interface componentProps {
  options: []
  onSelect: (option: optionType) => void
}

const Suggestions = ({ options, onSelect }: componentProps): JSX.Element => (
  <ul className="suggestion_bar">
    {options.map((option: optionType, index: number) => (
      <li key={option.name + '-' + index}>
        <button
          className="suggestion_list"
          onClick={() => onSelect(option)}
        >
          {option.name}, {option.country}
        </button>
      </li>
    ))}
  </ul>
)

export default Suggestions
