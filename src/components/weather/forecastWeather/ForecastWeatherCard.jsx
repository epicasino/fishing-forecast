import React from 'react'

export default function ForecastWeatherCard({ weatherData }) {

  // console.log(weatherData);

  return (
    <div className='forecastWeatherCard bg-slate-500 text-center p-4'>
      <h1 className='text-base'>{weatherData.day}</h1>
    </div>
  )
}
