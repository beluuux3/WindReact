import React from "react";
import { StaysProvider, useStays } from "./context/StaysContext.js";

import Header from "./components/Header.jsx";
import StaysListHeader from "./components/StaysListHeader.jsx";
import StayList from "./components/StayList.jsx";
import Modal from "./components/Modal.jsx";
import Loader from "./components/Loader.jsx";
import DarkMode from "./components/DarkMode.jsx";
export default function App() {
  const MainContent = () => {
    const { isModalOpen, loading, error } = useStays();

    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center p-10 text-red-500">
          Error not found data
        </div>
      );
    }
    return (
      <div className="h-full p-4 w-full font-[Montserrat] dark:bg-slate-900 dark:text-white">
        <div className="flex scale-60 items-end justify-center">
          <DarkMode></DarkMode>
        </div>
        <div className="max-w-7xl mx-auto p-4 sm:p-10 md:px-4">
          <Header></Header>
          <main>
            <StaysListHeader></StaysListHeader>
            <div className="">
              <StayList></StayList>
            </div>
          </main>
          {isModalOpen && <Modal></Modal>}
        </div>
      </div>
    );
  };

  return (
    <StaysProvider>
      <MainContent />
    </StaysProvider>
  );
}
