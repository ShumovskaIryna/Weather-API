import React from 'react'
import Header from '../../components/Header/Header'
import { red } from '@mui/material/colors'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'
import DetailCardMain from '../../components/DetailCards/DetailCardMain'
import DetailCardCondition from '../../components/DetailCards/DetailCardCondition'
import DetailCardForecast from '../../components/DetailCards/DetailCardForecast'
import './Details.css'

interface IAppProps {}

export const Details: React.FC<IAppProps> = (props) => {
  return (
    <div className="detailContainer">
      <div className="wrapper">
          <Header/>
      </div>
        <div className="container">
        <Grid container spacing={2} direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item xs={2}>
                <Button size="small">Refresh</Button>
            </Grid>
            <Grid item xs={1}>
                <IconButton aria-label="settings">
                    <DeleteSweepIcon sx={{ color: red[400], fontSize: 24 }}/>
                </IconButton>
            </Grid>
          </Grid>
          <Grid container spacing={1} direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item xs={3}>
              <DetailCardMain />
            </Grid>
            <Grid item xs={5}>
              <DetailCardCondition />
            </Grid>
          </Grid>
          <Grid container spacing={1} direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item xs={8}>
              <DetailCardForecast />
            </Grid>
          </Grid>
        </div>
    </div>
  )
}
