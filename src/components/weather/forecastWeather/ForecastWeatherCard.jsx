import React from 'react'

export default function ForecastWeatherCard({ weatherData }) {

  // console.log(weatherData);

  return (
    <div className='forecastWeatherCard bg-slate-500 text-center p-4 grid grid-cols-2 gap-4'>
      <h3 className='text-2xl col-span-2'>{weatherData.day}</h3>
      <p className='text-lg'>Min: {weatherData.temp_min}</p>
      <p className='text-lg'>Max: {weatherData.temp_max}</p>
      <p className='text-lg'>Sunrise: {weatherData.sunrise}</p>
      <p className='text-lg'>Sunset: {weatherData.sunset}</p>
    </div>
  )
}

// Array(6) [
//   {
//     day: '2023-08-11',
//     temp_max: 75.2,
//     temp_min: 64,
//     sunrise: '06:09 AM',
//     sunset: '07:38 PM',
//     rain_chance: 0
//   }, {
//     day: '2023-08-12',
//     temp_max: 75.2,
//     temp_min: 65.8,
//     sunrise: '06:10 AM',
//     sunset: '07:37 PM',
//     rain_chance: 0
//   },
//   {
//     day: '2023-08-13',
//     temp_max: 75.7,
//     temp_min: 68.5,
//     sunrise: '06:10 AM',
//     sunset: '07:36 PM',
//     rain_chance: 0
//   }, {
//     day: '2023-08-14',
//     temp_max: 76.4,
//     temp_min: 68.6,
//     sunrise: '06:11 AM',
//     sunset: '07:35 PM',
//     rain_chance: 6
//   },
//   {
//     day: '2023-08-15',
//     temp_max: 81.6,
//     temp_min: 70.4,
//     sunrise: '06:12 AM',
//     sunset: '07:33 PM',
//     rain_chance: 26
//   }, {
//     day: '2023-08-16',
//     temp_max: 83.8,
//     temp_min: 72.1,
//     sunrise: '06:12 AM',
//     sunset: '07:32 PM',
//     rain_chance: 32
//   },
  
// ]
