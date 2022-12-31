import React from 'react'
import './Details.css'
import ShortInfo from '../../components/DetailCards/ShortInfo'
import DetailInfo from '../../components/DetailCards/DetailInfo'
import Forecasts from '../../components/DetailCards/Forecasts'
import Grid from '@mui/material/Grid'
import Header from '../../components/Header/Header'

interface IAppProps {}

export const Details: React.FC<IAppProps> = (props) => {
  return (
    <div className="detailContainer">
      <div className="wrapper">
          <Header/>
      </div>
        <div className="container">
          <Grid container spacing={1} direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item xs={3}>
              <ShortInfo />
            </Grid>
            <Grid item xs={7}>
              <DetailInfo />
            </Grid>
          </Grid>
          <Grid container spacing={1} direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item xs={10}>
              <Forecasts />
            </Grid>
          </Grid>
        </div>
    </div>
  )
}
