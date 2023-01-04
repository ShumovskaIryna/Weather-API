import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import './DetailCardForecast.css'
import { indigo, grey } from '@mui/material/colors'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'

interface Props {}

export interface Hour {
  hour: string
  icon_id: string
  temp_day: string
}

function DetailCardForecast (props: Props): JSX.Element {
  const hours: Hour[] = [
    {
      hour: '12:00',
      icon_id: 'sun',
      temp_day: '+19'
    },
    {
      hour: '13:00',
      icon_id: 'sun',
      temp_day: '+18'
    },
    {
      hour: '14:00',
      icon_id: 'mainly_cloudy',
      temp_day: '+15'
    },
    {
      hour: '15:00',
      icon_id: 'small_rain',
      temp_day: '+14'
    },
    {
      hour: '16:00',
      icon_id: 'rain',
      temp_day: '+14'
    },
    {
      hour: '17:00',
      icon_id: 'mainly_cloudy',
      temp_day: '+16'
    },
    {
      hour: '18:00',
      icon_id: 'sun',
      temp_day: '+18'
    }
  ]
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
                  {hours.map((hour: Hour) => (
                          <div className="day_card" key={hour.hour}>
                          <Card sx={{ bgcolor: indigo[50] }}>
                              <CardContent>
                                  <Grid container spacing={1} direction="row">
                                      <Typography sx={{ mb: 1, fontSize: 12 }}>
                                          {hour.hour}
                                      </Typography>
                                  </Grid>
                                  <Grid container spacing={2} direction="row">
                                      <Grid item xs={5}>
                                          <Typography sx={{ mt: 1, fontSize: 16, color: grey[600] }}>
                                              {hour.temp_day}
                                          </Typography>
                                      </Grid>
                                      <Grid item xs={2}>
                                          <GlobalSvgSelector id={hour.icon_id} />
                                      </Grid>
                                  </Grid>
                              </CardContent>
                          </Card>
                      </div>
                  ))}
              </Grid>
          </CardContent>
      </Card>
    </div>
  )
}

export default DetailCardForecast
