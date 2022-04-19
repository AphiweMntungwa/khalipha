import React from "react";
import "./selectors.css";

function Selectors(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onCurrency,
    amount,
    amountChange,
  } = props;

  return (
    <div className="selector-div">
      <input
        type="number"
        className=""
        value={amount}
        onChange={amountChange}
      />
      <select
        name="currencies"
        value={selectedCurrency}
        className=""
        onChange={(e) => onCurrency(e)}
      >
        {currencyOptions.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selectors;
