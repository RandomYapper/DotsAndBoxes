import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homePage";
import GamePage from "./Pages/gamePage";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen w-full text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/play" element={<GamePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
