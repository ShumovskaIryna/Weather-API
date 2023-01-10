/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IndicatorSvgSelector from '../../assets/icons/indicators/IndicatorSvgSelector'
import { Weather } from '../../store/types/types'
import './DetailCardCondition.css'

interface Props {
  weathersMap: Record<string, Weather>
  cityName: string
}

const ONE_SECOND_IN_MILLISECOND = 1000

function DetailCardCondition ({ weathersMap, cityName }: Props): JSX.Element {
  const weather = weathersMap[cityName]

  return (
    <div className="card_second">
      <Card sx={{ pt: 1, pb: 1 }}>
        <CardContent sx={{ ml: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <div className="conditions">
                        <Grid container spacing={1}>
                            <Grid item xs={2}>
                                <Typography sx={{ mb: 2, fontSize: 18 }} color="text.secondary">
                                    <IndicatorSvgSelector id='temp' />
                                </Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography sx={{ mb: 2, fontSize: 14 }} color="text.secondary">
                                    Temperature : {Math.floor(weather?.main.temp)}°C,
                                    real fell {Math.floor(weather?.main.feels_like)}°C
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={2}>
                                <Typography sx={{ mb: 2, fontSize: 18 }} color="text.secondary">
                                    <IndicatorSvgSelector id='pressure' />
                                </Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography sx={{ mb: 2, fontSize: 14 }} color="text.secondary">
                                    Pressure : {Math.floor(weather?.main.pressure)} mm
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={2}>
                                <Typography sx={{ mb: 2, fontSize: 18 }} color="text.secondary">
                                    <IndicatorSvgSelector id='humidity' />
                                </Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography sx={{ mb: 2, fontSize: 14 }} color="text.secondary">
                                    Humidity : {Math.floor(weather?.main.humidity)} %
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={2}>
                                <Typography sx={{ mb: 2, fontSize: 18 }} color="text.secondary">
                                    <IndicatorSvgSelector id='wind' />
                                </Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography sx={{ mb: 2, fontSize: 14 }} color="text.secondary">
                                    Wind speed : {Math.floor(weather?.wind.speed)} km/h
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={2}>
                                <Typography sx={{ mb: 2, fontSize: 18 }} color="text.secondary">
                                    <IndicatorSvgSelector id='sun'/>
                                </Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography sx={{ mb: 2, fontSize: 14 }} color="text.secondary">
                                    Sunrise : {new Date(weather?.sys.sunrise * ONE_SECOND_IN_MILLISECOND +
                                            (weather?.timezone * ONE_SECOND_IN_MILLISECOND)).toLocaleTimeString('en-US')},
                                    Sunset : {new Date(weather?.sys.sunset * ONE_SECOND_IN_MILLISECOND +
                                            (weather?.timezone * ONE_SECOND_IN_MILLISECOND)).toLocaleTimeString('en-US')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default DetailCardCondition
