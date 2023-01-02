import React from 'react'
import CityCard from '../Card/CityCard'
import Grid from '@mui/material/Grid'
import { NavLink } from 'react-router-dom'
import './Cards.css'

export interface City {
  cityId: string
  title: string
}

function Cards (): JSX.Element {
  const cities = [
    {
      cityId: '1',
      title: 'London'
    },
    {
      cityId: '2',
      title: 'Sydney'
    },
    {
      cityId: '3',
      title: 'Tokyo'
    },
    {
      cityId: '4',
      title: 'Toronto'
    },
    {
      cityId: '5',
      title: 'Paris'
    }
  ]

  return (
    <div className="cards">
      <div className="container">
      <Grid container spacing={1} direction="row"
            justifyContent="center"
            alignItems="center" color="text.secondary">
        {cities.map((city: City) => (
          <NavLink to="/details" key={city.cityId}>
            <CityCard key={city.cityId} city={city}/>
          </NavLink>
        ))}
        </Grid>
      </div>
    </div>
  )
}

export default Cards
