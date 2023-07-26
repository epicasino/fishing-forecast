export const getCurrentWeather = async (query) => {
  const response = await fetch(
    `http://localhost:3001/api/weather/today/${query}`
  ).then((data) => data.json());
  const potato = response.currentWeather.main;
  const placeName = response.currentWeather.name;
  const currentDate = new Date(
    response.currentWeather.dt * 1000
  ).toLocaleString();

  return {
    temp: potato.temp,
    feelsLike: potato.feels_like,
    tempMin: potato["temp_min"],
    tempMax: potato["temp_max"],
    humidity: potato.humidity,
    name: placeName,
    date: currentDate,
  };
};

export const getForecastWeather = async (query) => {
  const response = await fetch(
    `http://localhost:3001/api/weather/forecast/${query}`
  ).then((data) => data.json());

  const weatherForecast = [];

  const structureForecast = () => {
    for (let i = 1; i < response.weatherForecast.daily.time.length; i++) {
      const forecastDay = {
        time: response.weatherForecast.daily.time[i],
        maxTemp: response.weatherForecast.daily.temperature_2m_max[i],
        minTemp: response.weatherForecast.daily.temperature_2m_min[i],
        sunrise: response.weatherForecast.daily.sunrise[i],
        sunset: response.weatherForecast.daily.sunset[i],
        rainChance:
          response.weatherForecast.daily.precipitation_probability_max[i],
      };

      weatherForecast.push(forecastDay);
    }
  };
  structureForecast();

  return {
    weatherForecast,
  };
};
