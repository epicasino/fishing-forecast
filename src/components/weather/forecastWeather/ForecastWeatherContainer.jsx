import React from 'react';
import ForecastWeatherCard from './ForecastWeatherCard';

export default function ForecastWeatherContainer({ forecastWeather }) {

  // console.log(forecastWeather);

  const formattedForecastWeather = [];

  for (let i = 1; i < 7; i++) {
    const temp = {
      day: forecastWeather.daily.time[i],
      temp_max: forecastWeather.daily.temperature_2m_max[i],
      temp_min: forecastWeather.daily.temperature_2m_min[i],
      sunrise: new Date(forecastWeather.daily.sunrise[i]).toLocaleTimeString(
        [],
        { hour: '2-digit', minute: '2-digit' }
      ),
      sunset: new Date(forecastWeather.daily.sunset[i]).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      rain_chance: forecastWeather.daily.precipitation_probability_max[i],
    };
    formattedForecastWeather.push(temp);
  }

  console.log(formattedForecastWeather);

  return (
    <section className="forecastWeatherContainer py-6">
      <h1 className="text-6xl text-center pb-2">Weather Forecast</h1>

      <div className="forecastWeatherCards grid grid-cols-3 grid-rows-2 gap-10 m-10">
        {formattedForecastWeather.map(weather => (<ForecastWeatherCard key={weather.day} weatherData={weather}/>))}
      </div>
    </section>
  );
}
