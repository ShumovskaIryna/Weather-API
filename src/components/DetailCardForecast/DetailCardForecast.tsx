import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import HourForecast from '../HourForecast/HourForecast'
import DayForecast from '../DayForecast/DayForecast'

interface Props {}

export interface Day {
  day: string
  day_info: string
  icon_id: string
  temp_day: string
  temp_night: string
  info: string
}

export interface Hour {
  hour: string
  icon_id: string
  temp_day: string
}

function DetailCardForecast (props: Props): JSX.Element {
  const days: Day[] = [
    {
      day: 'Сегодня',
      day_info: '28 авг',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Солнечно'
    },
    {
      day: 'Завтра',
      day_info: '29 авг',
      icon_id: 'small_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Небольшой дождь, солнце'
    },
    {
      day: 'Ср',
      day_info: '30 авг',
      icon_id: 'small_rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Небольшой дождь'
    },
    {
      day: 'Чт',
      day_info: '28 авг',
      icon_id: 'mainly_cloudy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно'
    },
    {
      day: 'Пт',
      day_info: '28 авг',
      icon_id: 'rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Дождь'
    },
    {
      day: 'Сб',
      day_info: '28 авг',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Солнечно'
    },
    {
      day: 'Вс',
      day_info: '28 авг',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Солнечно'
    }
  ]
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
    <div>
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
                        <HourForecast hour={hour} key={hour.hour} />
                    ))}
                </Grid>
                <Grid container spacing={1} direction="row"
                    justifyContent="center"
                    alignItems="center" color="text.secondary">
                    <Typography sx={{ mt: 3, mb: 2, fontSize: 20 }}>
                        Daily forecast
                    </Typography>
                </Grid>
                <Grid container spacing={1} direction="row"
                    justifyContent="center"
                    alignItems="center" color="text.secondary">
                    {days.map((day: Day) => (
                        <DayForecast day={day} key={day.day} />
                    ))}
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}

export default DetailCardForecast
