import React, { useState } from "react";
import { useStays } from "../context/StaysContext";
import LocationInput from "./LocationInput";
import GuestInput from "./GuestInput";
import "../css/style.css";

export default function SearchForm() {
  const { location, adults, children, applyFilters } = useStays();

  const [localLocation, setLocalLocation] = useState(location || "");
  const [localAdults, setLocalAdults] = useState(
    typeof adults === "number" ? adults : 0
  );
  const [localChildren, setLocalChildren] = useState(
    typeof children === "number" ? children : 0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    applyFilters(localLocation, localAdults, localChildren);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-5 rounded-2xl grid grid-cols-1 sm:grid-cols-3 sm:w-[90%] sm:items-start"
      >
        <LocationInput value={localLocation} onChange={setLocalLocation} />

        <GuestInput
          adults={localAdults}
          setAdults={setLocalAdults}
          children={localChildren}
          setChildren={setLocalChildren}
        />

        <div className="hidden sm:flex sm:items-center sm:justify-center sm:h-full sm:pl-3">
          <button
            type="submit"
            className="w-full mx-auto rounded-xl h-10 px-2 py-1 gap-2 flex items-center justify-center bg-red-400"
          >
            <img src="/img/search.svg" alt="" className="white h-3" />
            <span className="text-white text-[12px]">Search</span>
          </button>
        </div>
        <button
          type="submit"
          className="w-[30%] mx-auto mt-8 rounded-xl px-2 py-1 flex gap-2 items-center justify-center bg-red-400 sm:hidden"
        >
          <img src="/img/search.svg" alt="" className="red white h-3" />
          <span className="text-white text-[12px]">Search</span>
        </button>
      </form>
    </>
  );
}
