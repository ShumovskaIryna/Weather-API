import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { forecastType, listType, cityType } from '../../store/types/types'
import './DetailCardForecast.css'
import HourForecast from '../HourForecast/HourForecast'

interface Props {
  forecastMap: Record<string, forecastType>
  cityName: string
}

function DetailCardForecast ({ forecastMap, cityName }: Props): JSX.Element {
  const listItems = forecastMap[cityName]?.list
  const cityItems: cityType = forecastMap[cityName]?.city

  return (
    <div className="card_third">
      <Card sx={{ mt: 1, mb: 5 }}>
        <CardContent sx={{ ml: 1 }}>
          <Grid container spacing={1} direction="row"
              justifyContent="center"
              alignItems="center" color="text.secondary">
              <Typography sx={{ mt: 1, mb: 2, fontSize: 20 }}>
                  Hourly forecast
              </Typography>
          </Grid>
          <Grid container spacing={1} direction="row"
              justifyContent="center"
              alignItems="center" color="text.secondary">
            {
              listItems?.map((listItem: listType, index: number): JSX.Element => {
                return (
                  <HourForecast listItem={listItem} cityItems={cityItems} key={index}/>
                )
              })
            }
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default DetailCardForecast
