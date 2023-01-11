/* eslint-disable */
import React from 'react'
import { render, screen } from '@testing-library/react'
import CityCard from '../../../components/Card/CityCard'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { Actions, ThunkDispatch } from '@reduxjs/toolkit'

const deleteCityCard = (cityName: string): void => {
  console.log(3)
}


describe('With React Testing Library', () => {
  const initialState = { output: 10, 
    currentWeatherSliceReducer: {   weathersMap: {
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
    }},
      }
  const mockStore = configureStore()



//   it('Shows "Hello world!"', async () => {
//     store = mockStore(initialState)

//     await (store.dispatch as ThunkDispatch<any, unknown, any>)(asyncThunkWithRequest());

//     const result = render(
//       <Provider store={store}>

//           <CityCard
//           cityName='Kyiv'
//           deleteCityCard={deleteCityCard}
//         />
//       </Provider>
//         )
//     console.log(result)
//     // expect(getByText('Hello World!')).not.toBeNull()
//   })
})