import React from "react";

export default function TideItem({ tide }) {
  const date = new Date(tide.t).toLocaleString();

  const cardStyles = {
    card: {
      width: "20rem",
      margin: "2rem",
    },
  };

  return (
    <>
      <div className="card text-center" style={cardStyles.card}>
        <div className="card-header">{date}</div>
        <div className="card-body">
          <h5 className="card-title">Tide: {tide.type}</h5>
          <p className="card-text">{tide.v}</p>
        </div>
      </div>
    </>
  );
}
