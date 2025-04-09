import React from "react";
import NavbarDemo from "./components/ui/navBar.jsx";
import GameBoard from "./components/ui/GameBoard.jsx";

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full text-white">
      <NavbarDemo />
      <GameBoard rows={4} cols={7} />
      {/* Your main content can go here */}
    </div>
  );
};

export default App;
