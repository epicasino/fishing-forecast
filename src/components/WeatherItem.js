import React from "react";

export default function WeatherItem({ mango }) {
  return (
    <>
      <h5>Temp: {mango.temp} °F</h5>
      <h5>Feels Like: {mango.feelsLike} °F</h5>
      <h5>Min Temp: {mango.tempMin} °F</h5>
      <h5>Max Temp: {mango.tempMax} °F</h5>
      <h5>Humidity: {mango.humidity} %</h5>
    </>
  );
}
