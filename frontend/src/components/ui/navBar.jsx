import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import React from "react";
import {
  FiHome,
  FiSettings,
  FiAward,
  FiPlayCircle,
  FiShoppingBag,
} from "react-icons/fi";

const navItems = [
  { label: "Home", icon: <FiHome />, href: "/" },
  { label: "Play", icon: <FiPlayCircle />, href: "/play" },
  { label: "Marketplace", icon: <FiShoppingBag />, href: "/marketplace" },
  { label: "Settings", icon: <FiSettings />, href: "/settings" },
  { label: "Leaderboard", icon: <FiAward />, href: "/leaderboard" },
];

// Initial rotation values
const title = [
  { char: "D", rotate: -6 },
  { char: "o", rotate: 8 },
  { char: "t", rotate: -7 },
  { char: "s", rotate: 6 },
  { char: " ", rotate: 0 },
  { char: "&", rotate: 5, color: "#FFD700" },
  { char: " ", rotate: 0 },
  { char: "B", rotate: -8 },
  { char: "o", rotate: 6 },
  { char: "x", rotate: 9 },
  { char: "e", rotate: -1 },
  { char: "s", rotate: 12 },
];

export default function NavbarDemo() {
  return (
    <nav className="w-full relative bg-black/100 backdrop-blur-md text-white py-5 px-6 shadow-[0_0_30px_#FFFF33] fixed top-0 z-50 h-[80px]">
      {/* Left: Title */}

      {/* Left: Logo + Title */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center space-x-4 cursor-pointer">
        {/* Logo Image */}
        <img
          src={logo}
          // <- Replace this with your actual path
          alt="Dots and Boxes Logo"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain  hover:scale-110 transition-transform duration-300"
        />

        {/* Title */}
        <div className="flex space-x-1">
          {title.map((t, index) => (
            <span
              key={index}
              className={`text-4xl font-bold uppercase tracking-widest ${
                t.color
                  ? "text-[#FFD700] drop-shadow-[0_0_10px_#FFD700]"
                  : "text-[#FFFF33] drop-shadow-[0_0_8px_#FFFF33]"
              }`}
            >
              <span
                style={{
                  display: "inline-block",
                  transform: `rotate(${t.rotate}deg) scale(1)`,
                  transition: "transform 0.4s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = `rotate(${
                    t.rotate + 10
                  }deg) scale(1.4)`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = `rotate(${t.rotate}deg) scale(1)`)
                }
              >
                {t.char}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Center: Navigation */}
      <ul className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-12">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.href} // ✅ changed from href to to
              className="group flex flex-col items-center gap-y-1 transition duration-300"
            >
              <div className="text-3xl text-[#FFFF33] group-hover:text-[#FFD700] transition-transform duration-500 ease-out transform group-hover:scale-125 group-hover:-translate-y-1 group-hover:rotate-6 drop-shadow-[0_0_10px_#f59e0b]">
                {item.icon}
              </div>
              <span className="relative text-sm font-medium tracking-wide text-[#FFFF33] group-hover:text-[#FFD700] transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#f59e0b] after:transition-all after:duration-500 group-hover:after:w-full group-hover:after:left-0">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Right: Avatar & Login */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-4">
        <img
          src="https://www.bing.com/th/id/OIP.d14ED9H9QeOn7Uka5EpxVwHaHa?w=150&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt="User Avatar"
          className="w-14 h-14 rounded-full border-2 border-[#FFD700] hover:scale-110 transition-transform duration-300 shadow-lg bg-white p-1"
        />
        <button className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 text-black font-semibold px-6 py-2 rounded-xl shadow-[0_4px_15px_rgba(255,255,0,0.3)] hover:scale-105 transition-all duration-300 group">
          <span className="relative z-10">Login</span>
          <span className="absolute inset-0 bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
          <span className="absolute inset-0 border border-yellow-300 rounded-xl animate-pulse opacity-20 group-hover:opacity-50"></span>
        </button>
      </div>
    </nav>
  );
}
