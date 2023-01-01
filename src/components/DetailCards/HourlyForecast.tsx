import React from 'react'
import Card from '@mui/material/Card'
import { yellow, indigo, grey } from '@mui/material/colors'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import LightModeIcon from '@mui/icons-material/LightMode'
import Grid from '@mui/material/Grid'

function HourlyForecast (): JSX.Element {
  return (
    <div>
        <Card sx={{ bgcolor: indigo[50] }}>
            <CardContent sx={{ ml: 1 }}>
                <Grid container spacing={1} direction="row"
                    justifyContent="center"
                    alignItems="center" color="text.secondary">
                    <Typography sx={{ mt: 1, mb: 1, fontSize: 20 }} color="text.secondary">
                        10:00
                    </Typography>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Typography sx={{ fontSize: 16, color: grey[800] }}>
                            +20°
                        </Typography>
                        <Typography sx={{ fontSize: 10, color: grey[600] }}>
                            +18°
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <LightModeIcon sx={{ mr: 1.5, color: yellow[600], fontSize: 50 }}/>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography sx={{ fontSize: 12 }} color="text.secondary">
                            Sunny
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}

export default HourlyForecast
