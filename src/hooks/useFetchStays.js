import { useState, useEffect } from "react";

export function useFetchStays() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const DATA = "/public/data/stays.json";

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      const delay = 1500;

      setTimeout(async () => {
        try {
          const response = await fetch(DATA);

          if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} al cargar ${DATA}`);
          }

          const json = await response.json();

          setData(json);
        } catch (err) {
          console.error("Fallo al cargar los datos:", err);
          setError(err);
        } finally {
          setLoading(false);
        }
      }, delay);
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
