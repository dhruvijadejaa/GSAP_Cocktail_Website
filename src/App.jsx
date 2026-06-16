import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  return (
    <main className="w-full h-screen" >
      <div className='w-full h-full flex flex-col'>
        <NavBar />
        <Hero />
      </div>
    </main>
  );
}

export default App;

