/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { ChangeEvent, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import './Header.css'
import { NavLink } from 'react-router-dom'
import Suggestions from '../Suggestions/Suggestions'
import { optionType } from './../../store/types/types'
import { Credential } from '../../env-values'

interface Props {
  addCity: (city: string) => void
  isDisabledInput?: boolean
}

const BASE_URL = 'https://api.openweathermap.org'

function Header ({
  addCity,
  isDisabledInput
}: Props): JSX.Element {
  const [, setCityWithOptions] = useState<optionType | null>(null)
  const [term, setTerm] = useState<string>('')
  const [options, setOptions] = useState<[]>([])

  const getSearchOptions = (term: string): void => {
    fetch(
      `${BASE_URL}/geo/1.0/direct?q=${term.trim()}&limit=5&lang=en&appid=${
        Credential.API_KEY
      }`
    )
      .then(async (res) => await res.json())
      .then((data) => {
        setOptions(data)
      })
      .catch((e) => console.log({ e }))
  }

  const onOptionSelect = (option: optionType): void => {
    setCityWithOptions(option)
    setTerm(option.name)
    setOptions([])
  }

  const submitHandler = (event: React.SyntheticEvent): void => {
    const target = event.target as typeof event.target & {
      city: { value: string }
    }
    addCity(target.city.value)
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim()
    setTerm(e.target.value)

    if (value !== '') {
      getSearchOptions(value)
    }
  }

  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <NavLink to="/" className="logo">Weather</NavLink>
      </div>
      <div className="headerCenter">
        <form onSubmit={submitHandler}>
          <div className="searchbar">
            <SearchIcon sx={{ mr: 1, ml: 2, fontSize: 28 }} />
            <input
              type="text"
              value={term}
              name="city"
              className="searchInput"
              onChange={onInputChange}
              placeholder="Search for city"
              disabled={isDisabledInput}
            />
            <Suggestions
              placeHolder='Selected....'
              options={options}
              onSelect={onOptionSelect} />
            <button
              className="search_btn"
              type="submit"
              disabled={isDisabledInput}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Header
