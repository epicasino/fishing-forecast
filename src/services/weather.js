const weatherKey = import.meta.env.VITE_WEATHER_KEY;

export const geoCode = async (input) => {
  const userInput = input.split(' ').join('%20');
  const zipCode = /^[\d{4,5}]+$/;
  let response;

  if (zipCode.test(userInput)) {
    response = await fetch(
      `https://api.openweathermap.org/geo/1.0/zip?zip=${userInput},US&appid=${weatherKey}`
    ).then((data) => data.json());
  } else {
    response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${userInput},US&limit=1&appid=${weatherKey}`
    )
      .then((data) => data.json())
      .then((json) => json[0]);
  }

  return response;
};

// geoCode("Carlsbad");

export const weatherForecast = async (lat, lon) => {
  // 7 day forecast, min & max weather, rain chance, sunrise & sunset
  const forecast = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`
  ).then((data) => data.json());

  return forecast;
};

export const currentWeather = async (lat, lon) => {
  const today = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherKey}`
  ).then((data) => data.json());

  return today;
};

export const getCurrentWeather = async (input) => {
  const userLocation = await geoCode(input);
  const { lat, lon } = userLocation;

  return {
    currentWeather: await currentWeather(lat, lon),
  };
};

export const getWeatherForecast = async (input) => {
  const userLocation = await geoCode(input);
  const { lat, lon } = userLocation;

  return {
    weatherForecast: await weatherForecast(lat, lon),
  };
};

// https://api.open-meteo.com/v1/forecast?latitude=32.7157&longitude=-117.1647&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=imperial&appid={API key}
