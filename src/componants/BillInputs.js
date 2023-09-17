import React from "react";

export default function BillInputs({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
        type="text"
        placeholder="bill value"
      />
    </div>
  );
}
