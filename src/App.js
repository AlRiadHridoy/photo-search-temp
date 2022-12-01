import React from "react";
import Search from "./components/Search.js";
import PhotoContainer from "./components/PhotoContainer.js";
import Style from "./components/Style.js";


function App() {
  return (
    <>
      <main
        className="main md:p-10 px-5 py-8 min-w-full min-h-screen relative bg-[#152652]   
      w-full bg-pattern bg-dpattern"
      >
       <Style/>
        <Search />
        <PhotoContainer />
      </main>
    </>
  );
}

export default App;


//  bg-gradient-to-r from-blue-400 via-blue-800 to-gray-700