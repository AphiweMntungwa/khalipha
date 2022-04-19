import axios from "axios";
import React, { useEffect } from "react";

function CurrencyName({ currencyName, setCurrencyName, toCurrency }) {
  useEffect(() => {
    axios(`https://openexchangerates.org/api/currencies.json`).then((res) => {
      setCurrencyName(res.data[toCurrency]);
    });
  }, [toCurrency]);
  return (
    <div className="conversion-div">
      <i style={{ color: "orangered" }}>converting: </i>{" "}
      <span>{currencyName}</span>
      <span> EUR/{toCurrency} </span>
    </div>
  );
}

export default CurrencyName;
