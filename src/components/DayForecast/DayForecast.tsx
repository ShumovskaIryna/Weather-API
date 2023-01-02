import React from 'react'
import Card from '@mui/material/Card'
import { indigo, grey } from '@mui/material/colors'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'
import { Day } from '../DetailCardForecast/DetailCardForecast'
import '../DayForecast/DayForecast.css'

interface Props {
  day: Day
}

function DayForecast ({ day }: Props): JSX.Element {
  return (
    <div className="day_card">
        <Card sx={{ bgcolor: indigo[50] }}>
            <CardContent>
                <Grid container spacing={1} direction="row">
                    <Typography sx={{ mb: 1, fontSize: 12 }}>
                        {day.day}
                    </Typography>
                </Grid>
                <Grid container spacing={1} direction="row">
                    <Typography sx={{ mt: 1, fontSize: 10 }}>
                        {day.day_info}
                    </Typography>
                </Grid>
                <Grid container spacing={2} direction="row">
                    <Grid item xs={5}>
                        <Typography sx={{ mt: 1, fontSize: 16, color: grey[600] }}>
                            {day.temp_day}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <GlobalSvgSelector id={day.icon_id} />
                    </Grid>
                </Grid>
                <Grid container spacing={1} direction="row">
                    <Typography sx={{ mt: 2, fontSize: 10 }}>
                        {day.info}
                    </Typography>
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}

export default DayForecast
