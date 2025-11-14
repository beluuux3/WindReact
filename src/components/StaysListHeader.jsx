import React from "react";
import { useStays } from "../context/StaysContext";

export default function StaysListHeader() {
  const { filteredStays } = useStays();

  const staysCount = filteredStays.length;
  return (
    <div id="contain1" className="grid grid-cols-3 my-6 sm:mt-15">
      <h2
        id="title"
        className="text-xl font-bold col-span-2 text-gray-800 dark:text-white"
      >
        Stays in Finland
      </h2>
      <div
        id="containStays"
        className="flex justify-end items-center text-[14px]"
      >
        {staysCount}+ stays
      </div>
    </div>
  );
}
