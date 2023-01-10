import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { forecastType } from '../types/types'

interface ForecastWeatherMap {
  forecastMap: Record<string, forecastType>
  isLoading: boolean
  response: Response
}

interface Response {
  status: number
  message: string
}

const initialState: ForecastWeatherMap = {
  forecastMap: {
    Paris: {
      city: {
        id: 702550,
        name: 'Paris',
        coord: {
          lat: 49.8383,
          lon: 24.0232
        },
        country: 'UA',
        population: 15000,
        timezone: 7200,
        sunrise: 1673331553,
        sunset: 1673361769
      },
      list: [
        {
          dt: 1647356400,
          main: {
            feels_like: 11,
            humidity: 34,
            pressure: 900,
            temp: 12,
            temp_max: 12,
            temp_min: 11
          },
          weather: [
            {
              main: '',
              icon: '04d',
              description: ''
            }
          ],
          wind: {
            speed: 6.69,
            gust: 4,
            deg: 170
          },
          clouds: {
            all: 23
          },
          pop: 33,
          visibility: 10000
        }
      ]
    }
  },
  isLoading: false,
  response: {
    status: 0,
    message: ''
  }
}

export const forecastWeatherSlice = createSlice({
  name: 'forecast_weather',
  initialState,
  reducers: {
    fetchForecastWeather (state) {
      state.isLoading = true
    },
    fetchForecastWeatherSuccess (
      state,
      action: PayloadAction<AxiosResponse<forecastType>>
    ) {
      state.isLoading = false
      state.forecastMap = {
        ...state.forecastMap,
        [action.payload.data.city.name]: action.payload.data
      }
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText
      }
    },
    fetchForecastWeatherError (
      state,
      action: PayloadAction<AxiosResponse<forecastType>>
    ) {
      state.isLoading = false
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText
      }
    }
  }
})

export default forecastWeatherSlice.reducer
