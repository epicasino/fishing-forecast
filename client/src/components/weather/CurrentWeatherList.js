import React, { useState } from "react";
import WeatherItem from "./WeatherItem";
import useCurrentWeather from "../../hooks/useCurrentWeather";
import { useLocation } from "react-router-dom";

export default function CurrentWeatherList() {
  
  const [time, setTime] = useState(null);
  const location = useLocation();
  const userInput = location.state;

  setInterval(() => {
    const currentDate = new Date().toLocaleString();
    return setTime(currentDate);
  }, 1000);

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

  const { weather, loading } = useCurrentWeather(userInput);

  if (loading) {
    return "Loading...";
  }

  return (
    <div style={weatherStyles.wrapper}>
      <h1 style={weatherStyles.header}>Current Weather in {weather.name}</h1>
      <h5>{time}</h5>
      <WeatherItem props={weather} />
    </div>
  );
}
