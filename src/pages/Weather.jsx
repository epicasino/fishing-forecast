import Navbar from "../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import useCurrentWeather from "../hooks/useCurrentWeather";
import useForecastWeather from "../hooks/useForecastWeather";
import CurrentWeatherCard from "../components/weather/currentWeather/CurrentWeatherCard";
import ForecastWeatherContainer from "../components/weather/forecastWeather/ForecastWeatherContainer";

export default function Weather() {

  const { state } = useLocation();
  const { query } = state;
  // console.log(query);
  
  const {currentWeather, currentLoading} = useCurrentWeather(query);
  const {forecastWeather, forecastLoading} = useForecastWeather(query);

  if (forecastLoading && currentLoading) {
    return (
      <div>Loading...</div>
    )
  }

  console.log({currentWeather, forecastWeather});

  return (
    <>
      <Navbar />
      <CurrentWeatherCard props={currentWeather}/>
      <ForecastWeatherContainer props={forecastWeather} />
    </>
  );
}
