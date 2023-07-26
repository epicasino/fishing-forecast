import React from "react";
import WeatherItem from "./WeatherItem";
import useCurrentWeather from "../hooks/useCurrentWeather";

export default function CurrentWeatherList() {
  const weatherStyles = {
    header: {
      margin: "2rem",
    },
    wrapper: {
      textAlign: "center",
      margin: "1rem",
      marginBottom: "3rem",
    },
  };

  const { weather, loading } = useCurrentWeather();

  if (loading) {
    return "Loading...";
  }

  return (
    <div style={weatherStyles.wrapper}>
      <h1 style={weatherStyles.header}>Current Weather in {weather.name}</h1>
      <h5>{weather.date}</h5>
      <WeatherItem mango={weather} />
    </div>
  );
}
