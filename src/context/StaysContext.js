import React, { createContext, useContext, useState } from "react";
import { useFetchStays } from "../hooks/useFetchStays";

const StaysContext = createContext();

export const StaysProvider = ({ children }) => {
  const { data: allStays, loading, error } = useFetchStays();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [location, setLocation] = useState("");
  const [adults, setAdults] = useState(0);
  const [numChildren, setNumChildren] = useState(0);

  const totalGuests = adults + numChildren;

  const uniqueCities = allStays.length
    ? [...new Set(allStays.map((stay) => stay.city))].sort()
    : [];

  const filteredStays = allStays.filter((stay) => {
    const matchesLocation =
      !location || stay.city.toLowerCase().includes(location.toLowerCase());
    const matchesGuests = totalGuests === 0 || stay.maxGuests >= totalGuests;
    return matchesLocation && matchesGuests;
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const applyFilters = (newLocation, newAdults, newChildren) => {
    setLocation(newLocation);
    setAdults(newAdults);
    setNumChildren(newChildren);
    closeModal();
  };

  const value = {
    allStays,
    loading,
    error,
    isModalOpen,
    openModal,
    closeModal,
    applyFilters,
    filteredStays,
    uniqueCities,
    location,
    adults,
    children: numChildren,
    setChildren: setNumChildren,
    totalGuests,
    activeField,
    setActiveField,
  };

  return React.createElement(StaysContext.Provider, { value }, children);
};

export const useStays = () => {
  const context = useContext(StaysContext);
  if (!context) throw new Error("useStays must be used inside StaysProvider");
  return context;
};
