import React from 'react'
import './Details.css'
import DetailCard1 from '../../components/DetailCards/DetailCard1'
import DetailCard2 from '../../components/DetailCards/DetailCard2'
import DetailCard3 from '../../components/DetailCards/DetailCard3'
import Grid from '@mui/material/Grid'

interface IAppProps {}

export const Details: React.FC<IAppProps> = (props) => {
  return (
    <div className="detail-card">
      <div className="container">
        <Grid container spacing={1} direction="row"
          justifyContent="center"
          alignItems="center" color="text.secondary">
          <Grid item xs={3}>
            <DetailCard1 />
          </Grid>
          <Grid item xs={7}>
            <DetailCard2 />
          </Grid>
        </Grid>
        <Grid container spacing={1} direction="row"
          justifyContent="center"
          alignItems="center" color="text.secondary">
          <Grid item xs={10}>
            <DetailCard3 />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
