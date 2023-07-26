import React from 'react'
import Navbar from '../Navbar'
import SearchBar from './SearchBar';

export default function Home() {
  return (
    <>
      <Navbar props={{ href: "/tides", text: "Tides" }} />
      <h1 className='text-center m-5'>Fishing Forecast</h1>
      <SearchBar />
    </>
  );
}
