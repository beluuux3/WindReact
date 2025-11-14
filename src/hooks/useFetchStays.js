import { useState, useEffect } from "react";
import staysJson from "../data/stays.json";

export function useFetchStays() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = () => {
      const delay = 1500;

      setTimeout(() => {
        try {
          setData(staysJson);
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
