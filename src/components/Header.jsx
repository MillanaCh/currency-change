import React from "react";
import logoEur from "../images/eurlogo.png";
import logoUah from "../images/uahlogo.png";
import logoUsd from "../images/usalogo.png";

export default function Header({ data, rates, input1, select2, select1 }) {
  // const { data } = data;
  console.log(data);
  let result = ((1 * rates.UAH) / rates.EUR).toFixed(2);
  let result2 = ((1 * rates.UAH) / rates.USD).toFixed(2);
  return (
    <>
      <div className="header">
        <div className="logo-name">
          <h1>Currency Converter</h1>
        </div>
        <p> Today: {data.date}</p>
        <div className="currency-container">
          <div className="logo">
            <img src={logoEur} width="60px" height="30px" />
            <p>1 EUR = {result} UAH</p>
          </div>
          <div className="logo">
            <img src={logoUsd} width="42px" height="34px" />
            <p> 1 USD = {result2} UAH</p>
          </div>
        </div>
      </div>
    </>
  );
}

// (input1 * rates[select2]) / rates[select1].toFixed(2)
