import React from 'react'
// import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
// import { selectCurrentWeatherData } from '../../store/selectors';
// import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
// import { Days } from './components/Days/Days';
// import { ThisDay } from './components/ThisDay/ThisDay';
// import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';

import s from './Home.module.scss'

interface IAppProps {}

export const Home: React.FC<IAppProps> = (props) => {
  //   const dispatch = useCustomDispatch();
  //   const { weather } = useCustomSelector(selectCurrentWeatherData);

  //   useEffect(() => {
  //     dispatch(fetchCurrentWeather('paris'));
  //   }, []);
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        {/* <ThisDay weather={weather} /> */}
        {/* <ThisDayInfo /> */}
        Home
      </div>
      {/* <Days /> */}
    </div>
  )
}
