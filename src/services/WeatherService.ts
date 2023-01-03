import { AxiosResponse } from 'axios'
import api from '../axios'
import { Weather } from '../store/types/types'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class WeatherService {
  static async getCurrentWeather (coord: string): Promise<AxiosResponse<Weather>> {
    return await api.get<Weather>(
      `/weather?lat=${56}&lon=${42}`
    )
  }
}
