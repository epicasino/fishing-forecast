import { useEffect, useState } from "react";
import { getForecastWeather } from "../services/getWeather";

export default function useCurrentWeather(query) {
  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getForecastWeather(query)
      .then((data) => setWeather(data))
      .finally(() => setLoading(false));
  }, []);

  return { weather, loading };
}
