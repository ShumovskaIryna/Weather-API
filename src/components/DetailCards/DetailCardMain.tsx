import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { yellow, grey } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import LightModeIcon from '@mui/icons-material/LightMode'

function DetailCardMain (): JSX.Element {
  return (
    <div>
        <Card>
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
                        <Typography sx={{ fontSize: 40, color: grey[800] }}>
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
                </Grid>
            </CardContent>
        </Card>
    </div>
  )
}

export default DetailCardMain
