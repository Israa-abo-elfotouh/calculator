import React, { useState } from "react";
import BillInputs from "./BillInputs";
import OutPut from "./OutPut";
import Reset from "./Reset";
import SelectPercentage from "./SelectPercentage";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [precentage1, setPrecentage1] = useState(0);
  const [precentage2, setPrecentage2] = useState(0);

  function handlReset() {
    setBill("");
    setPrecentage1(0);
    setPrecentage2(0);
  }

  const tip = bill * ((precentage1 + precentage2) / 2 / 100);
  return (
    <div>
      <BillInputs bill={bill} onSetBill={setBill} />
      <SelectPercentage precentage={precentage1} onSelect={setPrecentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage precentage={precentage2} onSelect={setPrecentage2}>
        How did your friend the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <OutPut bill={bill} tip={tip} />
          <Reset onReset={handlReset} />
        </>
      )}
    </div>
  );
}
