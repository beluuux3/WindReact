import React from "react";
import { useStays } from "../context/StaysContext";
import StayCard from "./StayCard";
import "../css/style.css";

export default function StayList() {
  const { filteredStays } = useStays();

  if (filteredStays.length === 0) {
    return <p className="text-center text-gray-600 mt-10">Not foun stays</p>;
  }
  return (
    <div
      id="containCards"
      className="responsive-grid grid grid-cols-1 justify-items-center-safe sm:grid-cols-2 sm:gap-15 lg:grid-cols-3 lg:gap-8"
    >
      {filteredStays.map((stay) => (
        <StayCard key={stay.photo} stay={stay} />
      ))}
    </div>
  );
}
