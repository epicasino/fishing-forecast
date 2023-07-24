import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/api/weather/`)
      .then((data) => data.json())
      .then((data) => {
        setState(data);
      });
  }, []);

  return (
    <>
      <h1>Hi</h1>
      <p>{state}</p>
    </>
  );
}

export default App;
