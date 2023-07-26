import React from "react";
import WeatherItem from "./WeatherItem";
import useWeather from "../hooks/useWeather";

export default function WeatherList() {
  const { weather, loading } = useWeather();

  if (loading) {
    return "Loading...";
  }

  return (
    <>
      <h1>Current Weather</h1>
      <WeatherItem mango={weather} />
    </>
  );
}
