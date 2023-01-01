import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import HourlyForecast from './HourlyForecast'
import DailyForecast from './DailyForecast'

function DetailCardForecast (): JSX.Element {
  return (
    <div>
        <Card sx={{ mt: 1, mb: 5 }}>
            <CardContent sx={{ ml: 1 }}>
                <Grid container spacing={1} direction="row"
                    justifyContent="center"
                    alignItems="center" color="text.secondary">
                    <Typography sx={{ mt: 1, mb: 2, fontSize: 20 }} color="text.secondary">
                       Hourly forecast
                    </Typography>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                        <HourlyForecast />
                    </Grid>
                    <Grid item xs={2}>
                        <HourlyForecast/>
                    </Grid>
                    <Grid item xs={2}>
                        <HourlyForecast/>
                    </Grid>
                    <Grid item xs={2}>
                        <HourlyForecast/>
                    </Grid>
                    <Grid item xs={2}>
                        <HourlyForecast/>
                    </Grid>
                    <Grid item xs={2}>
                        <HourlyForecast/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} direction="row"
                    justifyContent="center"
                    alignItems="center" color="text.secondary">
                    <Typography sx={{ mt: 3, mb: 2, fontSize: 20 }} color="text.secondary">
                        Daily forecast
                    </Typography>
                </Grid>
                <Grid container spacing={1} >
                    <Grid item xs={2}>
                        <DailyForecast/>
                    </Grid>
                    <Grid item xs={2}>
                        <DailyForecast/>
                    </Grid>
                    <Grid item xs={2}>
                        <DailyForecast/>
                    </Grid>
                    <Grid item xs={2}>
                        <DailyForecast/>
                    </Grid>
                    <Grid item xs={2}>
                        <DailyForecast/>
                    </Grid>
                    <Grid item xs={2}>
                        <DailyForecast/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}

export default DetailCardForecast
