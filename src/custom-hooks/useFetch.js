import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, dataName) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();

    (async () => {
      try {
        const { data, status } = await axios.get(url, { signal: abortCont });
        if (status === 200) {
          setData(data[dataName]); //data[videos]
          setLoader(false);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setLoader(false);
          setError(error);
        }
      }
    })();

    return () => abortCont.abort();
  }, [url]);
  return { data, error, loader };
};

export {useFetch}
