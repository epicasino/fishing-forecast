import Navbar from '../components/navbar/Navbar';
import useCurrentWeather from '../hooks/useCurrentWeather';
import useForecastWeather from '../hooks/useForecastWeather';
import CurrentWeatherCard from '../components/weather/currentWeather/CurrentWeatherCard';
import ForecastWeatherContainer from '../components/weather/forecastWeather/ForecastWeatherContainer';
import { useSelector } from 'react-redux';

export default function Weather() {

  const userQuery = useSelector((state) => state.weather.query);
  console.log(userQuery);

  const { currentWeather, currentLoading } = useCurrentWeather(userQuery);
  const { forecastWeather, forecastLoading } = useForecastWeather(userQuery);

  if (forecastLoading || currentLoading) {
    return <div>Loading...</div>;
  }

  console.log({ currentWeather, forecastWeather });

  return (
    <>
      <CurrentWeatherCard props={currentWeather} />
      <ForecastWeatherContainer forecastWeather={forecastWeather} />
    </>
  );
}
