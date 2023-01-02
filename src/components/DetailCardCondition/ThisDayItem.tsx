import React from 'react'
import { Item } from './DetailCardCondition'
import Typography from '@mui/material/Typography'
import IndicatorSvgSelector from '../../assets/icons/indicators/IndicatorSvgSelector'
import Grid from '@mui/material/Grid'
import '../../pages/Details/Details.css'

interface Props {
  item: Item
}

function ThisDayItem ({ item }: Props): JSX.Element {
  const { iconId, name, value } = item
  return (
        <div className="conditions">
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Typography sx={{ mb: 2, fontSize: 18 }} color="text.secondary">
                        <IndicatorSvgSelector id={iconId} />
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography sx={{ mb: 2, fontSize: 16 }} color="text.secondary">
                        {name} : {value}
                    </Typography>
                </Grid>
            </Grid>
        </div>
  )
}

export default ThisDayItem
