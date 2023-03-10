import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { grey } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import { Weather } from '../../store/types/types'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'
import './DetailCardMain.css'

interface Props {
  weathersMap: Record<string, Weather>
  cityName: string
}

const ONE_SECOND_IN_MILLISECOND = 1000

function DetailCardMain ({ weathersMap, cityName }: Props): JSX.Element {
  const weather = weathersMap[cityName]

  return (
    <div className="card_first">
        <Card>
            <CardContent sx={{ ml: 2 }}>
                <Grid container spacing={1} direction="row"
                    justifyContent="center"
                    alignItems="center" color="text.secondary">
                    <Typography sx={{ mt: 1, fontSize: 20 }}>
                        {cityName}, {weather?.sys.country}
                    </Typography>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={5}>
                        <Typography sx={{ fontSize: 50, color: grey[800] }}>
                            {Math.floor(weather?.main.temp)}°C
                        </Typography>
                        <Typography sx={{ fontSize: 40, color: grey[600] }}>
                            {Math.floor(weather?.main.feels_like)}°C
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <GlobalSvgSelector id={weather?.weather[0].icon}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ mb: 1, fontSize: 18, color: grey[600] }}>
                            Today {new Date(weather?.dt * ONE_SECOND_IN_MILLISECOND +
                            (weather?.timezone * ONE_SECOND_IN_MILLISECOND)).toLocaleString('en-US',
                          {
                            month: 'long',
                            day: 'numeric',
                            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
                          })}
                        </Typography>
                        </Grid>
                        <Grid item xs={12}>
                        <Typography sx={{ mb: 1, fontSize: 14, color: grey[600] }}>
                            {weather?.weather[0].description}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}

export default DetailCardMain
