import React from "react";
import useForecastWeather from "../../hooks/useForecastWeather";
import ForecastWeatherItem from "./ForecastWeatherItem";
import { useLocation } from "react-router-dom";

export default function ForeCastWeatherList() {
  const location = useLocation();
  const userInput = location.state;
  const { weather, loading } = useForecastWeather(userInput);

  const forecastStyles = {
    header: {
      textAlign: "center",
      margin: "3rem",
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  };

  if (loading) {
    return "Loading...";
  }

  // console.log(weather.weatherForecast);

  return (
    <div className="forecastContainer">
      <h1 style={forecastStyles.header}>Weather Forecast</h1>
      <div style={forecastStyles.wrapper}>
        {weather.weatherForecast.map((day) => (
          <ForecastWeatherItem key={day.time} props={day} />
        ))}
      </div>
    </div>
  );
}
