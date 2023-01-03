import React, { useEffect } from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather'
import { selectCurrentWeatherData } from '../../store/selectors'
import CityCard from '../Card/CityCard'
import Grid from '@mui/material/Grid'
import { NavLink } from 'react-router-dom'
import './Cards.css'

interface Props {}
export const Cards: React.FC<Props> = (props) => {
  const dispatch = useCustomDispatch()
  const { weather } = useCustomSelector(selectCurrentWeatherData)

  useEffect(() => {
    void dispatch(fetchCurrentWeather('lviv'))
  }, [])
  return (
    <div className="cards">
      <div className="container">
      <Grid container spacing={1} direction="row"
            justifyContent="center"
            alignItems="center" color="text.secondary">
        {/* {cities.map((city: City) => ( */}
          <NavLink to="/details">
            <CityCard weather={weather}/>
          </NavLink>
        {/* ))} */}
        </Grid>
      </div>
    </div>
  )
}

export default Cards
