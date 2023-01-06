import React from 'react'
import Cards from '../../components/Cards/Cards'
import Header from '../../components/Header/Header'
import useForecast from './../../hooks/useForecast'
import './Home.css'

interface Props {}

export const Home: React.FC<Props> = (props) => {
  const {
    options,
    term,
    onOptionSelect,
    onSubmit,
    onInputChange
  } = useForecast()

  return (
    <div className="homeContainer">
      <div className="wrapper">
        <Header
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}/>
      </div>
      <div className="wrapper">
        <Cards/>
      </div>
    </div>
  )
}
