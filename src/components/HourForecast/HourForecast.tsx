import React from 'react'
import Card from '@mui/material/Card'
import { indigo, grey } from '@mui/material/colors'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'
import { Hour } from '../DetailCardForecast/DetailCardForecast'
import '../HourForecast/HourForecast.css'

interface Props {
  hour: Hour
}

function HourForecast ({ hour }: Props): JSX.Element {
  return (
    <div className="day_card">
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
  )
}

export default HourForecast
