import { useEffect, useState } from "react";
import { getWeatherForecast } from '../services/weather';

export default function useForecastWeather(query) {
  const [forecastWeather, setWeather] = useState(null);

  const [forecastLoading, setLoading] = useState(true);

  useEffect(() => {
    getWeatherForecast(query)
      .then((data) => setWeather(data))
      .finally(() => setLoading(false));
  }, [query]);

  return { forecastWeather, forecastLoading };
}
