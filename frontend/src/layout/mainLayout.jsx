import React from "react";
import NavbarDemo from "../components/ui/navBar.jsx";
import GameBoard from "../components/ui/GameBoard.jsx";

const Layout = () => {
  return (
    <div className="bg-black min-h-screen w-full text-white">
      {/* Top Navigation Bar */}
      <NavbarDemo />

      {/* Centered GameBoard */}
      <main className="pt-[80px] flex justify-center items-center min-h-[calc(100vh-80px)]">
      <div className="scale-180 sm:scale-150">
  <GameBoard rows={5} cols={5} />
</div>

      </main>
    </div>
  );
};

export default Layout;
