/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { ChangeEvent } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import './Header.css'
import { NavLink } from 'react-router-dom'
import Suggestions from '../Suggestions/Suggestions'
import { optionType } from './../../store/types/types'

interface Props {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
}

function Header ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit
}: Props): JSX.Element {
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <NavLink to="/" className="logo">Weather</NavLink>
      </div>
      <div className="headerCenter">
        <div className="searchbar">
          <SearchIcon sx={{ mr: 1, ml: 2, fontSize: 28 }} />
          <input
            type="text"
            value={term}
            className="searchInput"
            onChange={onInputChange}
            placeholder="Search for city"
          />
          <Suggestions options={options} onSelect={onOptionSelect} />
          <button
            className="search_btn"
            onClick={onSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
export default Header
