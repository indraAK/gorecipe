import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    setTimeout(() => {
      const fetchRecieps = async () => {
        try {
          setIsLoading(true);
          const response = await axios.get(url, {
            cancelToken: cancelToken.token,
          });
          const results = response.data.results;
          setData(results);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchRecieps();
    }, 1000);

    return () => {
      cancelToken.cancel();
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useAxios;
