import Navbar from '../components/navbar/Navbar';
import { useLocation } from 'react-router-dom';
import useCurrentWeather from '../hooks/useCurrentWeather';
import useForecastWeather from '../hooks/useForecastWeather';
import CurrentWeatherCard from '../components/weather/CurrentWeatherCard';

export default function Weather() {
  const location = useLocation();

  const { currentWeather, currentLoading } = useCurrentWeather(
    location.state.query
  );
  const { forecastWeather, forecastLoading } = useForecastWeather(
    location.state.query
  );

  if (currentLoading && forecastLoading) {
    return <div>Loading</div>;
  }

  console.log(currentWeather);
  console.log(forecastWeather);

  return (
    <>
      <Navbar />
      <CurrentWeatherCard props={currentWeather.currentWeather} />
    </>
  );
}
