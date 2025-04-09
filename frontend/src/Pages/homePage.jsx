import React from "react";
import { motion } from "framer-motion";
import NavbarDemo from "../components/ui/navBar";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

// Animation variants for each letter
const letterVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 500, damping: 20 },
  },
  hover: { scale: 1.3, transition: { duration: 0.3 } },
};

// Container variant that staggers children animations
const containerVariants = {
  animate: {
    transition: { staggerChildren: 0.05 },
  },
};

const HomePage = () => {
  const handlePlay = () => {
    console.log("Play button clicked");
  };

  const titleText = "Dots & Boxes";

  return (
    <div className="relative bg-black min-h-screen w-full overflow-hidden">
      {/* === Background Animation Layer === */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeamsWithCollision />
      </div>

      {/* === Foreground Content Layer === */}
      <div className="relative z-10 text-white flex flex-col min-h-screen">
        <NavbarDemo />
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-8">
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="mb-8 flex flex-wrap justify-center drop-shadow-[0_0_20px_rgba(0, 0, 0, 1)]"
          >
            {titleText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={`inline-block text-[12rem] font-bold 
                  ${
                    char === "&"
                      ? "text-[#b8860b] drop-shadow-[0_0_12px_#fff6]"
                      : "text-[#FFD700] drop-shadow-[0_0_10px_#fff6]"
                  }`}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.button
            onClick={handlePlay}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Play
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
