export const getWeather = async () => {
  const response = await fetch(`http://localhost:3001/api/weather/92128`).then(
    (data) => data.json()
  );
  const potato = response.currentWeather.main;
  return {
    temp: potato.temp,
    feelsLike: potato.feels_like,
    tempMin: potato["temp_min"],
    tempMax: potato["temp_max"],
    humidity: potato.humidity,
  };
};
