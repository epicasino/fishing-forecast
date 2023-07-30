import CurrentWeatherCard from "./weather/CurrentWeatherCard";
import { Route, Routes } from "react-router-dom";
import TideList from "./tides/TideList";
import Home from "./home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/tides" element={<TideList />}></Route>
        <Route exact path="/weather" element={<CurrentWeatherCard />}></Route>
      </Routes>
    </>
  );
}

export default App;
