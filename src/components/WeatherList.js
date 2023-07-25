import React from "react";
import WeatherItem from "./WeatherItem";
import useWeather from "../hooks/useWeather";
import useTide from '../hooks/useTide';
import TideItem from "./TideItem";

export default function WeatherList() {
  const { weather, loading } = useWeather();
  const tides = useTide();

  if (loading) {
    return "Loading...";
  }

  return (
    <>
      <h1>Current Weather</h1>
      <WeatherItem mango={weather} />
      <h1>Current Tide</h1>
      <TideItem pear={tides} />
    </>
  );
}
