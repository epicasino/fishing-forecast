import { useEffect, useState } from "react";
import { getWeather } from "../services/getWeather";

export default function useWeather() {
  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWeather()
      .then((data) => setWeather(data))
      .finally(() => setLoading(false));
  }, []);

  return { weather, loading };
}
