/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { indigo, grey } from '@mui/material/colors'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'
import { listType, cityType } from '../../store/types/types'
import './HourForecast.css'

interface Props {
  listItem: listType
  cityItems: cityType
}

const ONE_SECOND_IN_MILLISECOND = 1000

function HourForecast ({ listItem, cityItems }: Props): JSX.Element {
  return (
    <div className="day_card">
        <Card sx={{ bgcolor: indigo[50] }}>
            <CardContent>
                <Grid container spacing={1} direction="row">
                    <Typography sx={{ mb: 1, fontSize: 12 }}>
                        {new Date(listItem?.dt * ONE_SECOND_IN_MILLISECOND +
                        (cityItems?.timezone * ONE_SECOND_IN_MILLISECOND)).toLocaleTimeString('en-US',
                          {
                            month: 'short',
                            day: 'numeric',
                            hour12: false,
                            hour: '2-digit',
                            minute: '2-digit',
                            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
                          })}
                    </Typography>
                </Grid>
                <Grid container spacing={1} mb={-7} mt={-5} direction="row">
                    <GlobalSvgSelector id={listItem?.weather[0].icon}/>
                </Grid>
                <Grid container spacing={2} direction="row">
                    <Grid item xs={5}>
                        <Typography sx={{ mt: 1, fontSize: 16, color: grey[800] }}>
                            {Math.floor(listItem?.main?.temp)}°C
                        </Typography>
                        <Typography sx={{ mt: 1, fontSize: 12, color: grey[600] }}>
                            {Math.floor(listItem?.main?.feels_like)}°C
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}

export default HourForecast
