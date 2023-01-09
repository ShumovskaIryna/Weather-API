import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { Weather } from '../types/types'

interface CurrentWeatherMap {
  weathersMap: Record<string, Weather>
  isLoading: boolean
  response: Response
}

interface Response {
  status: number
  message: string
}

const initialState: CurrentWeatherMap = {
  weathersMap: {
    Paris: {
      coord: {
        lon: 2.3488,
        lat: 48.8534
      },
      dt: 1672769358,
      id: 2988507,
      main: {
        temp: 9.38,
        feels_like: 6.24,
        temp_min: 8.07,
        temp_max: 10.34,
        pressure: 1027,
        humidity: 92
      },
      name: 'Paris',
      sys: {
        type: 2,
        id: 2041230,
        country: 'FR',
        sunrise: 1672731832,
        sunset: 1672761936
      },
      timezone: 3600,
      visibility: 10000,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      wind: {
        speed: 6.69,
        deg: 170
      }
    },
    Lviv: {
      coord: {
        lon: 2.3488,
        lat: 48.8534
      },
      dt: 1672769358,
      id: 2988507,
      main: {
        temp: 9.38,
        feels_like: 6.24,
        temp_min: 8.07,
        temp_max: 10.34,
        pressure: 1027,
        humidity: 92
      },
      name: 'Paris',
      sys: {
        type: 2,
        id: 2041230,
        country: 'FR',
        sunrise: 1672731832,
        sunset: 1672761936
      },
      timezone: 3600,
      visibility: 10000,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ],
      wind: {
        speed: 6.69,
        deg: 170
      }
    }
  },
  isLoading: false,
  response: {
    status: 0,
    message: ''
  }
}

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentWeather (state) {
      state.isLoading = true
    },
    fetchCurrentWeatherSuccess (
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false
      state.weathersMap = {
        ...state.weathersMap,
        [action.payload.data.name]: action.payload.data
      }
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText
      }
    },
    fetchCurrentWeatherError (
      state,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText
      }
    },
    deleteCurrentWeatherSuccess (
      state,
      action: PayloadAction<{ cityName: string }>
    ) {
      console.log(current(state), '333333')

      state.isLoading = false
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete state.weathersMap[action.payload.cityName]
    }
  }
})

export default currentWeatherSlice.reducer
