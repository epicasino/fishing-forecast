import CurrentWeatherList from "./CurrentWeatherList";

export default function CurrentWeatherCard({ props }) {
  return (
    <div className="currentWeatherCard">
      <h1>Current Weather in {props.name}</h1>
      <CurrentWeatherList props={props}/>
    </div>
  )
}
