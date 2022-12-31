import React from 'react'
import CityCard from '../Card/Card'
import './Cards.css'
import Grid from '@mui/material/Grid'

function Cards (): JSX.Element {
  const cities = [
    {
      id: 1,
      title: 'London'
    },
    {
      id: 2,
      title: 'Sydney'
    },
    {
      id: 3,
      title: 'Tokyo'
    },
    {
      id: 4,
      title: 'Toronto'
    },
    {
      id: 5,
      title: 'Paris'
    }
  ]

  return (
    <div className="cards">
      <div className="container">
      <Grid container spacing={1} direction="row"
            justifyContent="center"
            alignItems="center" color="text.secondary">
        {cities.map((city) => (
          <CityCard key={city.id}/>
        ))}
        </Grid>
      </div>
    </div>
  )
}

export default Cards