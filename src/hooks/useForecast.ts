/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useState, ChangeEvent } from 'react'
import { optionType } from './../store/types/types'
import { Credential } from '../env-values'

const BASE_URL = 'http://api.openweathermap.org'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useForecast = () => {
  const [city, setCity] = useState<optionType | null>(null)
  const [term, setTerm] = useState<string>('')
  const [options, setOptions] = useState<[]>([])

  const getSearchOptions = (term: string): void => {
    fetch(
      `${BASE_URL}/geo/1.0/direct?q=${term.trim()}&limit=5&lang=en&appid=${
        Credential.API_KEY
      }`
    )
      .then(async (res) => await res.json())
      .then((data) => setOptions(data))
      .catch((e) => console.log({ e }))
  }

  const onOptionSelect = (option: optionType): void => {
    setCity(option)
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.trim()
    setTerm(e.target.value)

    if (value !== '') {
      getSearchOptions(value)
    }
  }

  return {
    options,
    term,
    city,
    onOptionSelect,
    onInputChange
  }
}

export default useForecast
