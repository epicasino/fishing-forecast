import React from 'react';

export default function CurrentWeatherList({ props }) {
  const sunrise = new Date(props.sys.sunrise * 1000);
  const sunset = new Date(props.sys.sunset * 1000);

  return (
    <div>
      <h3 className="text-3xl">{props.main.temp} F</h3>
      <h5 className="text-lg">Feels Like: {props.main.feels_like} F</h5>
      <h4 className="text-xl">Max: {props.main.temp_max} F</h4>
      <h4 className="text-xl">Min: {props.main.temp_min} F</h4>
      <h4 className="text-xl">Sunrise: {sunrise.toLocaleTimeString()}</h4>
      <h4 className="text-xl">Sunset: {sunset.toLocaleTimeString()}</h4>
    </div>
  );
}
