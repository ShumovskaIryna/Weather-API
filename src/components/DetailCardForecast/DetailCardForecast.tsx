import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { indigo, grey } from '@mui/material/colors'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'
import { Weather } from '../../store/types/types'
import './DetailCardForecast.css'

interface Props {
  weathersMap: Record<string, Weather>
  cityName: string
}

const ONE_SECOND_IN_MILLISECOND = 1000

function DetailCardForecast ({ weathersMap, cityName }: Props): JSX.Element {
  const weather = weathersMap[cityName]
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
            <div className="day_card">
              <Card sx={{ bgcolor: indigo[50] }}>
                <CardContent>
                    <Grid container spacing={1} direction="row">
                        <Typography sx={{ mb: 1, fontSize: 12 }}>
                          Today {new Date(weather.dt * ONE_SECOND_IN_MILLISECOND +
                          (weather.timezone * ONE_SECOND_IN_MILLISECOND)).toLocaleString('en-US',
                          {
                            month: 'long',
                            day: 'numeric',
                            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
                          })}
                        </Typography>
                    </Grid>
                    <Grid container spacing={2} direction="row">
                        <Grid item xs={5}>
                            <Typography sx={{ mt: 1, fontSize: 16, color: grey[800] }}>
                              {Math.floor(weather.main.temp)}°
                            </Typography>
                            <Typography sx={{ mt: 1, fontSize: 14, color: grey[600] }}>
                              {Math.floor(weather.main.feels_like)}°
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <GlobalSvgSelector id={weather.weather[0].icon}/>
                        </Grid>
                    </Grid>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default DetailCardForecast
