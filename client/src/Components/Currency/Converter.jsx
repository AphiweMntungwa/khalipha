import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Selectors from "./Selectors";
import "./selectors.css";
import CurrencyName from "./CurrencyName";
import MoreInfo from "./MoreInfo";

function Converter() {
  const largeWindow = useSelector((state) => state.screen.largeWindow);
  const toggleState = useSelector((state) => state.topbar.toggler);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountFrom, setAmountFrom] = useState(true);
  const [currencyName, setCurrencyName] = useState();

  let toAmount, fromAmount;
  if (amountFrom) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  const link = "http://khalipha.herokuapp.com/forex";
  useEffect(() => {
    if (!largeWindow) {
      const bar = document.querySelector(".cross-div");
      const nav = document.querySelector("nav");
      const navWrapper = document.querySelector(".nav-wrapper");
      bar.classList.remove("bar");
      nav.classList.remove("laynav");
      navWrapper.classList.remove("wrapperOn");
    }

    axios
      .post(link)
      .then(({ data }) => {
        const { base, rates } = data;
        const firstCur = Object.keys(rates)[0];
        setExchangeRate(rates[firstCur]);
        setFromCurrency(base);
        setToCurrency(firstCur);
        setCurrencyOptions([base, ...Object.keys(rates)]);
      })
      .catch((e) => console.log(e));
  }, []);
  const handleFromAmount = (e) => {
    setAmount(e.target.value);
    setAmountFrom(true);
  };
  const handleToAmount = (e) => {
    setAmount(e.target.value);
    setAmountFrom(false);
  };

  useEffect(() => {
    axios
      .post(link, { toCurrency })
      .then(({ data }) => {
        console.log(toCurrency, data);
        const { rates } = data;
        const firstCur = Object.keys(rates);
        setExchangeRate(rates[firstCur]);
      })
      .catch((e) => console.log("forexconfig", e));
  }, [toCurrency]);

  return (
    <div className="converter">
      <CurrencyName
        currencyName={currencyName}
        setCurrencyName={setCurrencyName}
        toCurrency={toCurrency}
      />
      <div className="input-carrier">
        <Selectors
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onCurrency={(e) => alert("API free plan only supports base EUR")}
          amount={fromAmount}
          amountChange={handleFromAmount}
        />
        <span className="arrow-span"> &#x021D4;</span>
        <Selectors
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onCurrency={(e) => setToCurrency(e.target.value)}
          amount={toAmount}
          amountChange={handleToAmount}
        />{" "}
      </div>
      {toggleState && <MoreInfo />}
    </div>
  );
}

export default Converter;
