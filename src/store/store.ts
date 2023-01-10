import { combineReducers, configureStore } from '@reduxjs/toolkit'
import currentWeatherSliceReducer from './slices/currentWeatherSlice'
import forecastWeatherSliceReducer from './slices/forecastWeatherSlice'

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
  forecastWeatherSliceReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
