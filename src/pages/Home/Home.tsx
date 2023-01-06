import React, { useState } from 'react'
import Cards from '../../components/Cards/Cards'
import Header from '../../components/Header/Header'
import useForecast from './../../hooks/useForecast'
import './Home.css'

interface Props {}

export const Home: React.FC<Props> = (props) => {
  const {
    options,
    term,
    onOptionSelect,
    onSubmit,
    onInputChange
  } = useForecast()

  const [city, setCity] = useState('')

  const addCityHandler = (cityName: string): void => {
    setCity((): string => {
      return cityName
    })

    if (cityName != null) {
      localStorage.setItem(`CITY_${cityName}`, '')
    }

    console.log(3333, city)
  }

  return (
    <div className="homeContainer">
      <div className="wrapper">
        <Header
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          addCity={addCityHandler}
          onSubmit={onSubmit}/>
      </div>
      <div className="wrapper">
        <Cards
          // city={city}
        />
      </div>
    </div>
  )
}
