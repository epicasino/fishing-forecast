import CurrentWeatherCard from "./weather/CurrentWeatherCard";
import { Route, Routes } from "react-router-dom";
import TideList from "./tides/TideList";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<CurrentWeatherCard />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/tides" element={<TideList />}></Route>
      </Routes>
    </>
  );
}

export default App;
