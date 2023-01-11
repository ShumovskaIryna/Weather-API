import React, { useState } from 'react'
import Cards from '../../components/Cards/Cards'
import Header from '../../components/Header/Header'
import './Home.css'

interface Props {}

export const Home: React.FC<Props> = () => {
  const [, setCity] = useState('')
  const [, setCities] = useState([] as string[])

  localStorage.setItem('CITY_Kyiv', '')
  localStorage.setItem('CITY_Lviv', '')
  localStorage.setItem('CITY_Mariupol', '')
  localStorage.setItem('CITY_Odesa', '')
  localStorage.setItem('CITY_Kharkiv', '')

  const addCityHandler = (cityName: string): void => {
    setCity((): string => {
      return cityName
    })
    if (cityName != null) {
      localStorage.setItem(`CITY_${cityName}`, '')
    }
  }
  const localStorageKeys: string[] = Object.keys(localStorage)
  const citiesNamesFromLocalStorage: string[] = localStorageKeys
    .filter((keys) => keys.startsWith('CITY_'))
    .map((cityWithPrefix) => cityWithPrefix.replace(/CITY_/, ''))

  const removeCityHandler = (cityName: string): void => {
    setCity((): string => {
      return cityName
    })

    if (cityName != null) {
      localStorage.removeItem(`CITY_${cityName}`)
      setCities(citiesNamesFromLocalStorage)
    }
  }

  return (
    <div className="homeContainer">
      <div className="wrapper">
        <Header
          addCity={addCityHandler}/>
      </div>
      <div className="wrapper">
        <Cards deleteCity={removeCityHandler}
        />
      </div>
    </div>
  )
}
