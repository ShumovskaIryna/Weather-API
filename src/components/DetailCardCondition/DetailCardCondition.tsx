import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import './DetailCardCondition.css'
import Typography from '@mui/material/Typography'
import IndicatorSvgSelector from '../../assets/icons/indicators/IndicatorSvgSelector'
import '../../pages/Details/Details.css'

export interface Item {
  iconId: string
  name: string
  value: string
}

function DetailCardCondition (): JSX.Element {
  const items = [
    {
      iconId: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°'
    },
    {
      iconId: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное'
    },
    {
      iconId: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков'
    },
    {
      iconId: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер'
    }
  ]

  return (
    <div className="card_second">
      <Card sx={{ pt: 3, pb: 2 }}>
        <CardContent sx={{ ml: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              {items.map((item: Item) => (
                <div className="conditions" key={item.iconId}>
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                        <Typography sx={{ mb: 2, fontSize: 18 }} color="text.secondary">
                            <IndicatorSvgSelector id={item.iconId} />
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography sx={{ mb: 2, fontSize: 16 }} color="text.secondary">
                            {item.name} : {item.value}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
              ))}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default DetailCardCondition
