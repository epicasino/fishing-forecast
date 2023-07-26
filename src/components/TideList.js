import React from "react";
import useTide from "../hooks/useTide";
import TideItem from "./TideItem";

export default function TideList() {
  const { tides, loading } = useTide();

  if (loading) {
    return "Loading...";
  }

  return (
    <>
      <h1>Current Tides</h1>
      {tides.map((tide) => (
        <TideItem tide={tide} key={tide.t}/>
      ))}
    </>
  );
}
