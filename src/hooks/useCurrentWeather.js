import { useEffect, useState } from "react";
import { getCurrentWeather } from "../services/weather";

export default function useCurrentWeather(query) {
  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentWeather(query)
      .then((data) => setWeather(data))
      .finally(() => setLoading(false));
  }, [query]);

  return { weather, loading };
}
