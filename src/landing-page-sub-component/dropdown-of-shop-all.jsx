import { useState } from "react";

const sortOptions = [
  "Recommended",
  "Newest",
  "Price (low to high)",
  "Price (high to low)",
  "Name A-Z",
  "Name Z-A",
];

export default function Dropdown({ sortOption, setSortOption }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2   border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 font-light h-full"
      >
        Sort by: {sortOption}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute mt-1 w-48 bg-white border border-gray-100 rounded-lg overflow-hidden z-10 font-light">
          {sortOptions.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSortOption(option);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                sortOption === option
                  ? "text-gray-900 font-medium"
                  : "text-gray-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
