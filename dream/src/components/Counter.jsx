import React from "react";
import { useState } from "react";

export default function Counter({ total, onClick }) {
  const [number, setNumber] = useState(0);
  return (
    <div className="counter">
      <p className="number">
        {number} <span className="total">/{total}</span>
      </p>
      <button
        className="button"
        onClick={() => {
          setNumber((prev) => prev + 1);
          onClick();
        }}
      >
        Add +
      </button>
    </div>
  );
}
