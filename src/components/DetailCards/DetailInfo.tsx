import React from 'react'
import Card from '@mui/material/Card'
import { red, indigo } from '@mui/material/colors'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import AirIcon from '@mui/icons-material/Air'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import OpacityIcon from '@mui/icons-material/Opacity'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'

function CityCard (): JSX.Element {
  return (
    <div>
        <Card sx={{ bgcolor: indigo[50], p: 3 }}>
            <CardContent sx={{ ml: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                        <Typography sx={{ mb: 1.5, fontSize: 24 }} color="text.secondary">
                            <ThermostatIcon/>
                        </Typography>
                        <Typography sx={{ mb: 1.5, fontSize: 24 }} color="text.secondary">
                            <AirIcon />
                        </Typography>
                        <Typography sx={{ mb: 1.5, fontSize: 24 }} color="text.secondary">
                            <OpacityIcon/>
                        </Typography>
                        <Typography sx={{ mb: 1.5, fontSize: 24 }} color="text.secondary">
                            <AcUnitIcon/>
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography sx={{ mb: 1.5, fontSize: 24 }} color="text.secondary">
                            Real fell: +18°
                        </Typography>
                        <Typography sx={{ mb: 1.5, fontSize: 24 }} color="text.secondary">
                            Wind: 3m/s
                        </Typography>
                        <Typography sx={{ mb: 1.5, fontSize: 24 }} color="text.secondary">
                            Presure: 765mm
                        </Typography>
                        <Typography sx={{ mb: 1.5, fontSize: 24 }} color="text.secondary">
                            Rain/snow: NO
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Button size="small">Refresh</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton aria-label="settings">
                            <DeleteSweepIcon sx={{ color: red[400], fontSize: 24 }}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}

export default CityCard
