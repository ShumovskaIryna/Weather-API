/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { RootState } from './store'

export const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReducer
