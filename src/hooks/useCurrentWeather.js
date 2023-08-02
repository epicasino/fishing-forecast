import { useEffect, useState } from "react";
import { getCurrentWeather } from "../services/weather";

export default function useCurrentWeather(query) {
  const [currentWeather, setWeather] = useState(null);

  const [currentLoading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentWeather(query)
      .then((data) => setWeather(data))
      .finally(() => setLoading(false));
  }, [query]);

  return { currentWeather, currentLoading };
}
