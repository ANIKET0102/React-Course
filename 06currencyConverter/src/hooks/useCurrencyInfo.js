import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.currencyapi.com/v3/latest/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

// https://api.currencyapi.com/v3/latest?apikey=cur_live_Tx1zCLbzsyJSrVUB36cKyz2CynFSytKZKqQvgQr9
