import React, { useEffect, useState } from 'react'
import CityCard from '../Card/CityCard'
import Grid from '@mui/material/Grid'
import './Cards.css'

interface Props {
  deleteCity: (city: string) => void
  addTempCity: () => void
}

function CityCards ({ deleteCity, addTempCity }: Props): JSX.Element {
  const [cities, setCities] = useState([] as string[])

  useEffect(() => {
    const localStorageKeys: string[] = Object.keys(localStorage)
    // TODO: move to consts
    const citiesNamesFromLocalStorage: string[] = localStorageKeys
      .filter((keys) => keys.startsWith('CITY_'))
      .map((cityWithPrefix) => cityWithPrefix.replace(/CITY_/, ''))

    setCities(citiesNamesFromLocalStorage)
  }, [])

  const addTempCityHandler = (): void => {
    addTempCity()
  }

  return (
    <div className="cards">
      <div className="container">
      <button className="btn" onClick={() => addTempCityHandler()}>
        Add template cities to list
      </button>
        <Grid container spacing={1} direction="row"
            justifyContent="center"
            alignItems="center" color="text.secondary">
            {
              cities.map((cityName: string, index: number): JSX.Element => {
                return (
                  <CityCard
                  cityName={cityName}
                  key={`${index}-${index}`}
                  deleteCityCard={deleteCity}
                  />
                )
              })
            }
        </Grid>
      </div>
    </div>
  )
}

export default CityCards
