import React from "react";

export default function WeatherItem({ props }) {
  return (
    <>
      <h5>Temp: {props.temp} °F</h5>
      <h5>Feels Like: {props.feelsLike} °F</h5>
      <h5>Min Temp: {props.tempMin} °F</h5>
      <h5>Max Temp: {props.tempMax} °F</h5>
      <h5>Humidity: {props.humidity} %</h5>
    </>
  );
}
