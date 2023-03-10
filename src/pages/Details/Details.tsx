/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { red } from '@mui/material/colors'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { fetchCurrentWeather, deleteCityByName } from '../../store/thunks/fetchCurrentWeather'
import { fetchForecastWeather } from '../../store/thunks/fetchForecastWeather'
import { selectCurrentWeatherData, selectForecastWeatherData } from '../../store/selectors'
import DetailCardMain from '../../components/DetailCardMain/DetailCardMain'
import DetailCardCondition from '../../components/DetailCardCondition/DetailCardCondition'
import DetailCardForecast from '../../components/DetailCardForecast/DetailCardForecast'
import './Details.css'

interface Props {}

export const Details: React.FC<Props> = (props) => {
  const { cityName = '' } = useParams<{ cityName: string }>()
  const navigate = useNavigate()
  const dispatch = useCustomDispatch()
  const { weathersMap } = useCustomSelector(selectCurrentWeatherData)
  const { forecastMap } = useCustomSelector(selectForecastWeatherData)

  if (cityName != null) {
    localStorage.setItem(`CITY_${cityName}`, JSON.stringify(weathersMap))
  }

  const [, setCity] = useState('')
  const addCityHandler = (city: string): void => {
    setCity((): string => {
      return city
    })
  }

  useEffect(() => {
    if (cityName != null) {
      void dispatch(fetchCurrentWeather(cityName))
      void dispatch(fetchForecastWeather(cityName))
      window.history.replaceState(null, 'New Page Title', `/details/${cityName}`)
    }
  }, [cityName])

  const getRefreshCard = (cityName: string): void => {
    void dispatch(fetchCurrentWeather(cityName))
    void dispatch(fetchForecastWeather(cityName))
  }
  const deleteCard = (cityName: string): void => {
    setCity((): string => {
      return cityName
    })
    if (cityName != null) {
      localStorage.removeItem(`CITY_${cityName}`)
    }
    void dispatch(deleteCityByName(cityName))
    navigate('/')
  }

  return (
    (weathersMap != null)
      ? <div className="detailContainer">
        <div className="wrapper">
          <Header
            addCity={addCityHandler}
            isDisabledInput={true}/>
        </div>
        <Grid container spacing={3} direction="row"
          justifyContent="center"
          alignItems="center">
          <Grid item xs={2}>
            <Button sx={{ mr: 8.5 }} size="small"
              onClick={() => getRefreshCard(cityName)} >Refresh</Button>
          </Grid>
          <Grid item xs={1}>
            <IconButton aria-label="settings"
              onClick={() => deleteCard(cityName)}>
              <DeleteSweepIcon sx={{ color: red[400], fontSize: 24 }}/>
            </IconButton>
          </Grid>
        </Grid>
        <Grid container spacing={1} direction="row"
          justifyContent="center"
          alignItems="center" color="text.secondary">
            <DetailCardMain weathersMap={weathersMap} cityName={cityName}/>
            <DetailCardCondition weathersMap={weathersMap} cityName={cityName}/>
            <DetailCardForecast forecastMap={forecastMap} cityName={cityName}/>
        </Grid>
      </div>
      : <></>
  )
}
