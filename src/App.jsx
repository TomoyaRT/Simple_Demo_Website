import { useState } from "react";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import { useSwitchMode } from "./store/index";

function App() {
  const mode = useSwitchMode((state) => state.mode);

  return (
    <>
      <div className="w-full min-h-screen bg-gray-300">
        <Navbar />
        <div
          className={`flex items-center justify-center flex-col ${
            mode === "light" ? "" : "dark"
          }`}
        >
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
