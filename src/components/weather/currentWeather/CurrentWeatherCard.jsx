import React from 'react';
import CurrentWeatherList from './CurrentWeatherList';

export default function CurrentWeatherCard({ props }) {
  return (
    <section className="currentWeatherCard flex flex-col items-center text-center bg-slate-700 py-6">
      <h1 className="text-6xl pb-2">Current Weather in {props.name}</h1>
      <CurrentWeatherList props={props} />
    </section>
  );
}
  