import React from 'react'

import s from './Details.module.scss'

interface IAppProps {}

export const Details: React.FC<IAppProps> = (props) => {
  return (
    <div className={s.detail}>
      <div className={s.wrapper}>
        Details
      </div>
    </div>
  )
}
