import { useEffect, useState } from "react";
import { getTides } from "../services/water";

export default function useTide() {
  const [loading, setLoading] = useState(true);

  const [tides, setTides] = useState(null);

  useEffect(() => {
    getTides()
      .then((data) => setTides(data))
      .finally(() => setLoading(false));
  }, []);

  return { tides, loading };
}
