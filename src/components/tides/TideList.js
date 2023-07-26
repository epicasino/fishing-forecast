import React from "react";
import useTide from "../../hooks/useTide";
import TideItem from "./TideItem";
import Navbar from "../Navbar";

export default function TideList() {
  const { tides, loading } = useTide();

  const tideStyles = {
    header: {
      textAlign: "center",
      margin: "3rem",
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  };

  if (loading) {
    return "Loading...";
  }

  return (
    <>
      <Navbar props={{ href: "/", text: "Weather" }} />
      <div className="tideContainer">
        <h1 style={tideStyles.header}>Current Tides</h1>
        <div style={tideStyles.wrapper}>
          {tides.map((tide) => (
            <TideItem tide={tide} key={tide.t} />
          ))}
        </div>
      </div>
    </>
  );
}
