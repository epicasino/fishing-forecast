import React from 'react'

export default function WeatherItem({ mango }) {

  return (
    <>
      <ul>
        <li>Temp: {mango.temp}</li>
        <li>Feels Like: {mango.feelsLike}</li>
        <li>Min Temp: {mango.tempMin}</li>
        <li>Max Temp: {mango.tempMax}</li>
        <li>Humidity: {mango.humidity}</li>
      </ul>
    </>
  );
}
