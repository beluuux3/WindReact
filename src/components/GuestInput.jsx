import React, { useState } from "react";
import { useStays } from "../context/StaysContext";
import Counter from "./Counter";

export default function GuestInput({
  adults,
  setAdults,
  children,
  setChildren,
}) {
  const totalGuests = adults + children;

  const [showCounters, setShowCounters] = useState(false);
  const { setActiveField } = useStays();

  return (
    <>
      <div id="guestInput" className="px-3">
        <label
          htmlFor="guests"
          className="font-bold text-[10px] text-gray-800 dark:text-white"
        >
          GUESTS
        </label>
        <input
          type="text"
          placeholder="Add Guests"
          id="guests"
          className="w-full text-[12px] py-2 outline-none cursor-text dark:bg-gray-800 dark:text-white p-2"
          autoComplete="off"
          readOnly
          value={totalGuests > 0 ? `${totalGuests} guests` : ""}
          onFocus={() => setShowCounters(true)}
          onClick={() => setShowCounters(true)}
          onFocusCapture={() => {
            if (setActiveField) setActiveField("guests");
          }}
        />

        <div
          id="contGuest"
          className={`w-full mt-3 pt-3 flex flex-col gap-4 sm:gap-6 ${
            showCounters ? "" : "hidden"
          }`}
        >
          <Counter
            label="Adults"
            age="Ages 13 or above"
            count={adults}
            setCount={setAdults}
          />
          <Counter
            label="Children"
            age="Ages 12 or below"
            count={children}
            setCount={setChildren}
          />
        </div>
      </div>
    </>
  );
}
