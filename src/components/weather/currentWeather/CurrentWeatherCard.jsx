import React from 'react';
import CurrentWeatherList from './CurrentWeatherList';

export default function CurrentWeatherCard({ props }) {
  return (
    <div className="currentWeatherCard flex flex-col items-center text-center bg-slate-700 py-6">
      <h1 className="text-4xl">Current weather in {props.name}</h1>
      <CurrentWeatherList props={props} />
    </div>
  );
}
  