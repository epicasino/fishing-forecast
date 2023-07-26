import React from "react";

export default function ForecastWeatherItem({ props }) {
  const cardStyles = {
    card: {
      width: "40rem",
      margin: "1rem",
    },
  };

  return (
    <>
      <div className="card text-center" style={cardStyles.card}>
        <div className="card-header">{props.time}</div>
        <div className="card-body">
          <h5 className="card-text">High: {props.maxTemp} °F</h5>
          <h5 className="card-text">Low: {props.minTemp} °F</h5>
          <h5 className="card-text">
            Sunrise:{" "}
            {new Date(props.sunrise).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h5>
          <h5 className="card-text">
            Sunset:{" "}
            {new Date(props.sunset).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h5>
          <h5>Chance of Rain: {props.rainChance} %</h5>
        </div>
      </div>
    </>
  );
}
