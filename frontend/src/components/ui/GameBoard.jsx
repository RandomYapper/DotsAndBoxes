import React, { useState } from "react";

export default function GameBoard({ rows = 4, cols = 4 }) {
  const [lines, setLines] = useState({});

  const toggleLine = (id) => {
    setLines((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-6 bg-black flex flex-col items-center">
      {/* Full Grid Loop */}
      {Array.from({ length: rows }).map((_, row) => (
        <div key={`row-${row}`} className="flex flex-col items-center">
          {/* Dot Row + Horizontal Lines */}
          <div className="flex items-center">
            {Array.from({ length: cols }).map((_, col) => (
              <React.Fragment key={`dot-${row}-${col}`}>
                {/* Dot */}
                <div className="w-4 h-4 rounded-full bg-yellow-400 shadow-md z-10" />

                {/* Horizontal Line (after every dot, including last) */}
                <div
                  onClick={() => toggleLine(`h-${row}-${col}`)}
                  className={`h-1 w-10 mx-1 rounded transition-all cursor-pointer ${
                    lines[`h-${row}-${col}`]
                      ? "bg-yellow-400 shadow-md"
                      : "bg-gray-800"
                  }`}
                  data-coord={`h-${row}-${col}`}
                />
              </React.Fragment>
            ))}

            {/* Extra Dot at end of row */}
            <div className="w-4 h-4 rounded-full bg-yellow-400 shadow-md z-10" />
          </div>

          {/* Vertical Line Row */}
          <div className="flex items-center">
            {Array.from({ length: cols + 1 }).map((_, col) => (
              <React.Fragment key={`vline-${row}-${col}`}>
                {/* Vertical Line (between rows) */}
                {row < rows - 1 && (
                  <div
                    onClick={() => toggleLine(`v-${row}-${col}`)}
                    className={`w-1 h-10 my-1 transition-all rounded cursor-pointer ${
                      lines[`v-${row}-${col}`]
                        ? "bg-yellow-400 shadow-md"
                        : "bg-gray-800"
                    }`}
                    data-coord={`v-${row}-${col}`}
                  />
                )}

                {/* Spacer (except after last vertical line) */}
                {col < cols && <div className="w-10 h-1" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
