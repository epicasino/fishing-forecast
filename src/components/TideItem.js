import React from 'react'

export default function TideItem({ tide }) {

  const date = new Date(tide.t).toLocaleString();

  return (
    <ul>
      <li>{date}</li>
      <li>{tide.v}</li>
      <li>{tide.type}</li>
    </ul>
  );
}
