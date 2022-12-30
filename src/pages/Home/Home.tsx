import React from 'react'
import Cards from '../../components/Cards/Cards'
import Header from '../../components/Header/Header'

import './Home.css'

interface IAppProps {}

export const Home: React.FC<IAppProps> = (props) => {
  return (
    <div className="homeContainer">
      <div className="wrapper">
        <Header/>
      </div>
      <div className="wrapper">
        <Cards/>
      </div>
    </div>
  )
}
