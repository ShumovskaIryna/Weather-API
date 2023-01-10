import { WeatherService } from '../../services/WeatherService'
import { forecastWeatherSlice } from '../slices/forecastWeatherSlice'
import { AppDispatch } from '../store'

export const fetchForecastWeather =
  (cityName: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(forecastWeatherSlice.actions.fetchForecastWeather())
      const resF = await WeatherService.getForecastWeather(cityName)
      if (resF.status === 200) {
        dispatch(forecastWeatherSlice.actions.fetchForecastWeatherSuccess(resF))
      } else {
        dispatch(forecastWeatherSlice.actions.fetchForecastWeatherError(resF))
      }
    } catch (error) {
      console.log(error)
    }
  }
