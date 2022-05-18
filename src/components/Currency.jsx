import React, { useState } from "react";

export default function Currency(props) {
  const { data, input, rates, select, onChangeInput, onChangeSelect } = props;

  return (
    <div className="currency">
      <input
        type="number"
        onChange={(e) => onChangeInput(e.target.value)}
        value={input}
        className="input"
      />
      <select
        value={select}
        onChange={(e) => onChangeSelect(e.target.value)}
        className="select"
      >
        {rates.map((el) => (
          <option key={el}>{el}</option>
        ))}
      </select>
    </div>
  );
}
