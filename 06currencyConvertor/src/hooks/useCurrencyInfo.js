import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.7.24/v1/currencies/${currency}.json`)
      .then((res) => res.json()) // Ensure you return the result of res.json()
      .then((json) => {
        setData(json[currency]); // Update state with the correct currency data
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error); // Add error handling
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
