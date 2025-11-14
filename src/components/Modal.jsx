import React from "react";
import { useStays } from "../context/StaysContext";
import SearchForm from "./SearchForm";

export default function Modal() {
  const { closeModal } = useStays();

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
      <div
        className="modal h-full fixed top-0 left-0 right-0 z-50 bg-blue-800/25 dark:bg-black/50"
        onClick={handleOverlayClick}
      >
        <nav
          id="modal"
          className="w-full h-[80%] lg:h-[60%] mx-auto bg-white flex flex-col p-6 items-start shadow-lg sm:pb-10 dark:bg-slate-900"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full m-5">
            <div className="w-full grid grid-cols-2 h-5 ">
              <h1 className="font-bold text-[12px] flex items-center">
                Edit your search
              </h1>
              <p
                className="flex justify-end font-bold text-[17px] items-center cursor-pointer"
                onClick={closeModal}
              >
                X
              </p>
            </div>

            <SearchForm />
          </div>
        </nav>
      </div>
    </>
  );
}
