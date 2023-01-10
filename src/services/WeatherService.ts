/* eslint-disable @typescript-eslint/no-extraneous-class */
import { AxiosResponse } from 'axios'
import api from '../axios'
import { Weather, forecastType } from '../store/types/types'

export class WeatherService {
  static async getCurrentWeather (city: string): Promise<AxiosResponse<Weather>> {
    return await api.get<Weather>(`/weather?q=${city}`)
  }

  static async getForecastWeather (city: string): Promise<AxiosResponse<forecastType>> {
    return await api.get<forecastType>(`/forecast?q=${city}`)
  }
}
