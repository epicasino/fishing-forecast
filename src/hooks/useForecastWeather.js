import { useEffect, useState } from "react";
import { getForecastWeather } from "../services/getWeather";

export default function useCurrentWeather() {
  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getForecastWeather()
      .then((data) => setWeather(data))
      .finally(() => setLoading(false));
  }, []);

  return { weather, loading };
}
