import React from 'react'

export default function TideItem({ pear }) {
  return (
    <>
    <ul>
      <li>{pear[0].t}</li>
      <li>{pear[0].v}</li>
      <li>{pear[0].type}</li>
    </ul>
    </>
  )
}
