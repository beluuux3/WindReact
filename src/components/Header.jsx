import React from "react";
import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";

export default function Header() {
  return (
    <header className="relative flex flex-col gap-4 w-full sm:items-center sm:flex-row">
      <div id="logo">
        <img src="/img/logo-f7862584.svg" alt="WINDBNB LOGO" />
      </div>
      <div className="ml-auto flex items-center">
        <SearchBar />
      </div>
    </header>
  );
}
