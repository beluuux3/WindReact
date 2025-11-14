import React from "react";
import { useStays } from "../context/StaysContext";

export default function SearchBar() {
  const { openModal, location, totalGuests } = useStays();

  const locationText = location || "Add Location";
  const guestsText =
    totalGuests > 0
      ? `${totalGuests} guest${totalGuests > 1 ? "s" : ""}`
      : "Add Guests";
  return (
    <div
      id="menuSearch"
      onClick={openModal}
      className="w-full mx-1 mt-5 h-[50px] shadow-md rounded-2xl grid grid-cols-6 border-collapse border-gray-200 border items-center transition ease-in-out text-gray-400 text-[13px] sm:w-[40%] sm:absolute sm:right-7 lg:w-[25%] lg:right-12 z-40 cursor-pointer"
    >
      <div className="h-full col-span-3 flex justify-center items-center">
        {locationText}
      </div>
      <div className="h-full col-span-2 flex justify-center items-center text-center border-x border-gray-200">
        {guestsText}
      </div>
      <div className="h-full flex justify-center text-center items-center">
        <img
          src="/img/search.svg"
          alt="icon search"
          className="red h-4 cursor-pointer"
        />
      </div>
    </div>
  );
}
