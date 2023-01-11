/* eslint-disable */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Suggestions from '../../../components/Suggestions/Suggestions'
import { optionType } from '../../../store/types/types'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { Actions, ThunkDispatch } from '@reduxjs/toolkit'

const deleteCityCard = (onSelect: optionType): void => {
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



  it('Shows "Hello world!"', async () => {
    const store = mockStore(initialState)

    // await (store.dispatch as ThunkDispatch<any, unknown, any>)(asyncThunkWithRequest());
    
    const optionTypeCity =[ {
      name: 'Lviv',
      country: 'Ukraine',
      lat: 43,
      lon: 23,
      id: 232342
    }]
    const result = render(
      <Provider store={store}>

          <Suggestions
          placeHolder={'Lviv'}
          options={optionTypeCity}
          onSelect={deleteCityCard}
        />
      </Provider>
        )

        expect(result.container.firstChild).toBeEmpty()
    console.log(result)
    // expect(getByText('Hello World!')).not.toBeNull()
  })
})