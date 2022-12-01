import React from "react";
import PhotoContainer from "./components/PhotoContainer.js";
import Search from "./components/Search.js";
import Style from "./components/Style.js";
import { useGlobalContext } from "./context/useGlobalContext.js";

function App() {
  const { theme } = useGlobalContext();
  return (
    <main className={`root ${theme}`}>
      <div
        className="main md:p-10 px-4 py-8 min-w-full min-h-screen relative bg-slate-50 dark:bg-[#152652]   
      w-full bg-pattern bg-dpattern"
      >
        {theme === "dark" && <Style />}
        <Search />
        <PhotoContainer />
      </div>
    </main>
  );
}

export default App;

//  bg-gradient-to-r from-blue-400 via-blue-800 to-gray-700
