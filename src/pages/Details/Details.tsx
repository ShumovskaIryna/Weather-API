import React, { useEffect, useState } from 'react'
import {
  useParams
} from 'react-router-dom'
import { Weather } from '../../store/types/types'
import Header from '../../components/Header/Header'
import { red } from '@mui/material/colors'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather'
import { selectCurrentWeatherData } from '../../store/selectors'
import DetailCardMain from '../../components/DetailCardMain/DetailCardMain'
import DetailCardCondition from '../../components/DetailCardCondition/DetailCardCondition'
import DetailCardForecast from '../../components/DetailCardForecast/DetailCardForecast'
import useForecast from './../../hooks/useForecast'
import './Details.css'

interface Props {}

export const Details: React.FC<Props> = (props) => {
  const {
    options,
    term,
    onOptionSelect,
    onSubmit,
    onInputChange
  } = useForecast()

  const { cityName } = useParams<{ cityName: string }>()

  const dispatch = useCustomDispatch()
  const { weather: weathers }: { weather: Weather[] } = useCustomSelector(selectCurrentWeatherData)
  const weather: Weather | undefined = weathers.find((cityInfo: Weather) => cityInfo.name === cityName)

  if (cityName != null) {
    localStorage.setItem(`CITY_${cityName}`, JSON.stringify(weather))
  }

  const [city, setCity] = useState('')
  const addCityHandler = (city: string): void => {
    console.log(city)
    setCity((): string => {
      return city
    })
  }

  useEffect(() => {
    if (cityName != null) {
      void dispatch(fetchCurrentWeather(cityName))

      window.history.replaceState(null, 'New Page Title', `/details/${cityName}`)
    }
  }, [cityName])

  return (
    (weather != null)
      ? <div className="detailContainer">
        <div className="wrapper">
          <Header
            term={term}
            options={options}
            onInputChange={onInputChange}
            onOptionSelect={onOptionSelect}
            addCity={addCityHandler}
            onSubmit={onSubmit}/>
        </div>
        <Grid container spacing={3} direction="row"
          justifyContent="center"
          alignItems="center">
          <Grid item xs={2}>
              <Button size="small">Refresh</Button>
          </Grid>
          <Grid item xs={1}>
              <IconButton aria-label="settings">
                  <DeleteSweepIcon sx={{ color: red[400], fontSize: 24 }}/>
              </IconButton>
          </Grid>
        </Grid>
        <Grid container spacing={1} direction="row"
          justifyContent="center"
          alignItems="center" color="text.secondary">
            <DetailCardMain weather={weather}/>
            <DetailCardCondition weather={weather}/>
            <DetailCardForecast weather={weather}/>
        </Grid>
      </div>
      : <></>
  )
}
