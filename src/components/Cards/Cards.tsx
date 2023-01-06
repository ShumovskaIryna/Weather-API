import React, { useEffect, useState } from 'react'
import CityCard from '../Card/CityCard'
import Grid from '@mui/material/Grid'
import { NavLink } from 'react-router-dom'
import './Cards.css'

interface Props {
  // city: string
}
export const CityCards: React.FC<Props> = (props) => {
  const [cities, setCities] = useState([] as string[])

  useEffect(() => {
    const localStorageKeys: string[] = Object.keys(localStorage)
    // TODO: move to consts
    const citiesNamesFromLocalStorage: string[] = localStorageKeys
      .filter((keys) => keys.startsWith('CITY_'))
      .map((cityWithPrefix) => cityWithPrefix.replace(/CITY_/, ''))

    setCities(citiesNamesFromLocalStorage)
  }, [])

  console.log('I AM FROM CARDS', cities)

  return (
    <div className="cards">
      <div className="container">
      <Grid container spacing={1} direction="row"
            justifyContent="center"
            alignItems="center" color="text.secondary">
            {
              cities.map((cityName: string): JSX.Element => {
                return (
                  <NavLink to={`details/${cityName}`}
                  key={cityName}
                  >
                    <CityCard
                    key={cityName}
                    cityName={cityName}
                    />
                  </NavLink>
                )
              })
            }
        </Grid>
      </div>
    </div>
  )
}

export default CityCards
