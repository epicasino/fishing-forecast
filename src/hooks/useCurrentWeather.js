import { useEffect, useState } from "react";
import { getCurrentWeather } from "../services/getWeather";

export default function useCurrentWeather(query) {
  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentWeather(query)
      .then((data) => setWeather(data))
      .finally(() => setLoading(false));
  }, []);

  return { weather, loading };
}
