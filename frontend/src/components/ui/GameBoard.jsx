import React, { useState } from "react";

const Dot = ({ size = 16 }) => (
  <div
    className="rounded-full bg-[#FFFF33]"
    style={{ width: size, height: size }}
  ></div>
);

const Line = ({ orientation = "horizontal", length = 48, onClick, isActive }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer transition-colors duration-200 ${
      orientation === "horizontal" ? "h-1" : "w-1"
    } ${
      isActive ? "bg-[#FFD700]" : "bg-gray-900 hover:bg-yellow-300"
    }`}
    style={{
      width: orientation === "horizontal" ? length : 8,
      height: orientation === "vertical" ? length : 8,
      margin: orientation === "vertical" ? "0 4px" : undefined
    }}
  ></div>
);

const DotsAndBoxes = ({ rows = 3, cols = 3 }) => {
  const [activeLines, setActiveLines] = useState(new Set());

  const handleLineClick = (lineKey) => {
    setActiveLines((prev) => new Set(prev).add(lineKey));
  };

  return (
    <div className="inline-block p-4 rounded-xl bg-black">
      {Array.from({ length: rows * 2 - 1 }).map((_, rowIdx) => (
        <div key={rowIdx} className="flex justify-center items-center">
          {Array.from({ length: cols * 2 - 1 }).map((_, colIdx) => {
            const key = `${rowIdx}-${colIdx}`;
            if (rowIdx % 2 === 0 && colIdx % 2 === 0) {
              return <Dot key={key} />;
            } else if (rowIdx % 2 === 0 && colIdx % 2 !== 0) {
              return (
                <Line
                  key={key}
                  orientation="horizontal"
                  onClick={() => handleLineClick(key)}
                  isActive={activeLines.has(key)}
                />
              );
            } else if (rowIdx % 2 !== 0 && colIdx % 2 === 0) {
              return (
                <Line
                  key={key}
                  orientation="vertical"
                  onClick={() => handleLineClick(key)}
                  isActive={activeLines.has(key)}
                />
              );
            } else {
              return <div key={key} style={{ width: 48, height: 48 }} />;
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default DotsAndBoxes;