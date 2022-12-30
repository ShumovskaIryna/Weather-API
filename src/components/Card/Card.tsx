import React from 'react'
import './Card.css'
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import { yellow, red, indigo, grey } from '@mui/material/colors'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import LightModeIcon from '@mui/icons-material/LightMode'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'
import Grid from '@mui/material/Grid'

function CityCard (): JSX.Element {
  return (
    <div className="card">
        <Card sx={{ bgcolor: indigo[50] }}>
            <CardContent sx={{ ml: 1 }}>
                <Grid container spacing={1} direction="row"
                    justifyContent="center"
                    alignItems="center" color="text.secondary">
                    <Typography sx={{ mt: 1, mb: 1, fontSize: 20 }} color="text.secondary">
                        Kyiv
                    </Typography>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Typography sx={{ fontSize: 44, color: grey[800] }}>
                            +20°
                        </Typography>
                        <Typography sx={{ fontSize: 32, color: grey[600] }}>
                            +18°
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <LightModeIcon sx={{ mr: 1.5, color: yellow[600], fontSize: 100 }}/>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography sx={{ mb: 1.5, fontSize: 20 }} color="text.secondary">
                            Today
                        </Typography>
                        <Typography sx={{ mb: 1.5, fontSize: 16 }} color="text.secondary">
                            Sunny
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ mb: 1.5, fontSize: 12 }} color="text.secondary">
                            Wind: 3m/s
                        </Typography>
                        <Typography sx={{ mb: 1.5, fontSize: 12 }} color="text.secondary">
                            Presure: 765mm
                        </Typography>
                        <Typography sx={{ mb: 1.5, fontSize: 12 }} color="text.secondary">
                            Rain/snow: NO
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{ ml: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <Button sx={{ mr: 8.5 }} size="small">Refresh</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton aria-label="settings">
                            <DeleteSweepIcon sx={{ color: red[400], fontSize: 24 }}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    </div>
  )
}

export default CityCard
