import React, { useEffect } from 'react'
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
    city,
    term,
    onOptionSelect,
    onSubmit,
    onInputChange
  } = useForecast()
  const dispatch = useCustomDispatch()
  const { weather } = useCustomSelector(selectCurrentWeatherData)

  useEffect(() => {
    if (city != null) {
      void dispatch(fetchCurrentWeather(city.name))
    }
  }, [city])

  return (
    <div className="detailContainer">
      <div className="wrapper">
        <Header
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
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
  )
}
