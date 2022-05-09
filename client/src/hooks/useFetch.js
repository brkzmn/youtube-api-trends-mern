import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getFetchData = async (url) => {
    if (isLoading === false) {
      setIsLoading(true);
    }
    try {
      const response = await fetch(url);
      if (!response.ok) throw "HTTP Error";
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setData(null);
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFetchData(url);
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
