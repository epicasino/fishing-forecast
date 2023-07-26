import React from "react";
import CurrentWeatherList from "./CurrentWeatherList";
import Navbar from "../Navbar";
import ForecastWeatherList from "./ForecastWeatherList";

export default function WeatherCard() {
  return (
    <>
      <Navbar props={{ href: "/tides", text: "Tides" }} />
      <CurrentWeatherList />
      <ForecastWeatherList />
    </>
  );
}