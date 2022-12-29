import React from 'react'

import s from './Home.module.scss'

interface IAppProps {}

export const Home: React.FC<IAppProps> = (props) => {
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        Home
      </div>
    </div>
  )
}
