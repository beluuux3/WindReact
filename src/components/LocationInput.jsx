import React, { useState, useMemo } from "react";
import { useStays } from "../context/StaysContext";

export default function LocationInput({ value, onChange }) {
  const { uniqueCities, setActiveField } = useStays();
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredCities = useMemo(() => {
    if (!value) return uniqueCities;
    return uniqueCities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
  }, [value, uniqueCities]);

  const handleSelectCity = (city) => {
    onChange(city);
    setShowSuggestions(false);
    if (setActiveField) setActiveField(null);
  };
  return (
    <>
      <div
        id="locationInput"
        className="border-gray-200 px-3 sm:border-0 sm:border-r relative "
      >
        <label
          htmlFor="location"
          className="font-bold text-[10px] text-gray-800 dark:text-white"
        >
          LOCATION
        </label>
        <input
          type="text"
          placeholder="Write Location"
          id="location"
          className="w-full text-[12px] py-2 outline-none cursor-text dark:bg-gray-800 dark:text-white p-4"
          autoComplete="off"
          spellCheck="false"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => {
            setShowSuggestions(true);
            if (setActiveField) setActiveField("location");
          }}
        />

        {showSuggestions && filteredCities.length > 0 && (
          <div className="w-full mt-3 pt-3 flex flex-col gap-4 sm:gap-6 sm:absolute sm:top-full sm:left-0 sm:bg-white sm:shadow-lg sm:rounded-lg sm:mt-2 z-10 dark:bg-gray-800">
            {filteredCities.map((city) => (
              <div
                key={city}
                className="p-3 hover:bg-gray-50 cursor-pointer suggestion-item"
                onClick={() => handleSelectCity(city)}
              >
                <span className="font-medium text-gray-800 dark:text-white text-sm">
                  {city}, Finland
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
