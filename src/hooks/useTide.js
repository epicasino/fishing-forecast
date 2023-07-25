import { useEffect, useState } from "react";
import { getTides } from "../services/getTides";

export default function useTide() {
  const [tides, setTides] = useState(null);

  useEffect(() => {
    getTides().then((data) => setTides(data));
  }, []);

  return tides;
}
