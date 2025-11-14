import React from "react";

export default function Counter({ label, age, count, setCount }) {
  const increment = (e) => {
    e.preventDefault();
    setCount((prev) => (typeof prev === "number" ? prev + 1 : 1));
  };
  const decrement = (e) => {
    e.preventDefault();
    setCount((prev) => {
      const val = typeof prev === "number" ? prev : 0;
      return val > 0 ? val - 1 : 0;
    });
  };
  return (
    <div className="w-full flex flex-col gap-1">
      <h1 className="text-[13px] font-bold">{label}</h1>
      <p className="text-[12px] text-gray-400 ">{age}</p>
      <div className="flex gap-5 items-center">
        <button
          type="button"
          className="buttonCant bg-[#f4f3f4] dark:bg-gray-700 dark:text-white"
          onClick={decrement}
        >
          -
        </button>
        <span className="font-semibold text-[13px]">{count}</span>
        <button
          type="button"
          className="buttonCant bg-[#f4f3f4] dark:bg-gray-700 dark:text-white"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}
