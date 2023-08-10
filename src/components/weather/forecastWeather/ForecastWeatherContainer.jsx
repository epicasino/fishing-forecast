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

  // console.log(formattedForecastWeather);

  return (
    <section className="forecastWeatherContainer py-6">
      <h1 className="text-6xl text-center pb-2">Weather Forecast</h1>

      <div className="forecastWeatherCards grid grid-cols-3 grid-rows-2 gap-2">
        {formattedForecastWeather.map(weather => (<ForecastWeatherCard key={weather.day} weatherData={weather}/>))}
      </div>
    </section>
  );
}

// {
//   time: Array(7) [ '2023-08-06', '2023-08-07', '2023-08-08', '2023-08-09', '2023-08-10', '2023-08-11', '2023-08-12' ],
//   temperature_2m_max: Array(7) [ 90.5, 86, 83.8, 85.7, 83.5, 83.9, 85.7 ],
//   temperature_2m_min: Array(7) [ 59.2, 58.3, 62.8, 72.5, 70.9, 69.6, 69.5 ],
//   sunrise: Array(7) [
//     '2023-08-06T06:05', '2023-08-07T06:05', '2023-08-08T06:06', '2023-08-09T06:07', '2023-08-10T06:07', '2023-08-11T06:08',
//     '2023-08-12T06:09'
//   ],
//   sunset: Array(7) [
//     '2023-08-06T19:42', '2023-08-07T19:41', '2023-08-08T19:41', '2023-08-09T19:40', '2023-08-10T19:39', '2023-08-11T19:38',
//     '2023-08-12T19:37'
//   ],
//   precipitation_probability_max: Array(7) [ 0, 0, 6, 0, 3, 0, 0 ]
// }
