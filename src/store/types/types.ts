export interface optionType {
  name: string
  country: string
  lat: number
  lon: number
  id?: number
}

export interface Weather {
  coord: {
    lon: number
    lat: number
  }
  dt: number
  id: number
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  name: string
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  visibility: number
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    }
  ]
  wind: {
    speed: number
    deg: number
  }
}

export interface forecastType {
  city: {
    id: number
    name: string
    coord: {
      lat: number
      lon: number
    }
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
  }
  list: [
    {
      dt: number
      main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
      }
      weather: [
        {
          main: string
          icon: string
          description: string
        }
      ]
      wind: {
        speed: number
        gust: number
        deg: number
      }
      clouds: {
        all: number
      }
      pop: number
      visibility: number
    }
  ]
}
