export default function CurrentWeatherList({ props }) {
  return (
    <div className="currentWeatherList">
      <p>Temp: {props.main.temp}</p>
      <p>Feels Like: {props.main.feels_like}</p>
      <hr />
      <p>Min Temp: {props.main.temp_min}</p>
      <p>Max Temp: {props.main.temp_max}</p>
    </div>
  );
}

// {
//   currentWeather: {
//     coord: { lon: -117.1552, lat: 32.7203 },
//     weather: [ { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' } ],
//     base: 'stations',
//     main: { temp: 71.31, feels_like: 72.05, temp_min: 68.83, temp_max: 75.54, pressure: 1016, humidity: 83 },
//     visibility: 10000,
//     wind: { speed: 10.36, deg: 340 },
//     clouds: { all: 75 },
//     dt: 1690951539,
//     sys: { type: 2, id: 2005032, country: 'US', sunrise: 1690894944, sunset: 1690944442 },
//     timezone: -25200,
//     id: 5391811,
//     name: 'San Diego',
//     cod: 200
//   }
// }
