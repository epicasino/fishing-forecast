import React from "react";
import useForecastWeather from "../hooks/useForecastWeather";
import ForecastWeatherItem from "./ForecastWeatherItem";

export default function ForeCastWeatherList() {
  const { weather, loading } = useForecastWeather();

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
          <ForecastWeatherItem key={day.time} props={day}/>
        ))}
      </div>
    </div>
  );
}
