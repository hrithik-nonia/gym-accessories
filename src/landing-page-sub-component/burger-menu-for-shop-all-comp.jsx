import { useState } from "react";
import Dropdown from "./dropdown-of-shop-all";
import PriceRangeSlider from "./price-range-slider";

const MobileFilterMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ---------- top bar (visible on mobile only) ---------- */}
      <div className="flex md:hidden rounded-lg border-gray-200 shadow-md px-3 block ">
        <div className="py-3 font-light text-[#141414] me-auto">
          18 products
        </div>

        {/* burger icon */}
        <button onClick={() => setOpen(true)} className="py-3">
          <svg
            className="w-6 h-6 text-[#141414]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* ---------- desktop bar ---------- */}
      <div className="hidden md:flex rounded-lg border-gray-200 shadow-md px-0">
        <div className="py-3 font-light text-[#141414] me-auto">
          18 products
        </div>
        <Dropdown />
      </div>

      {/* ---------- overlay ---------- */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ---------- slide-in drawer ---------- */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-white z-50 
          transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* drawer header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
          <span className="text-[#141414] font-medium text-lg">Filters</span>
          <button onClick={() => setOpen(false)}>
            <svg
              className="w-5 h-5 text-[#141414]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* drawer content */}
        <div className="p-4">
          {/* sort dropdown */}
          <div className="mb-6">
            <span className="text-[#141414] font-medium block mb-3">
              Sort by
            </span>
            <hr className="mb-3" />
            <Dropdown />
          </div>

          {/* browse by */}
          <div className="mb-8 text-[#141414]">
            <span className="text-[20px] block mb-3">Browse by</span>
            <hr />
            <ul className="text-[15px] pt-3 font-light">
              <li className="mb-3">
                <span>All Products</span>
              </li>
              <li className="mb-3">
                <span>Best Sellers</span>
              </li>
              <li className="mb-3">
                <span>Fitness Accessories</span>
              </li>
              <li className="mb-3">
                <span>Sale</span>
              </li>
              <li className="mb-3">
                <span>Weight Training</span>
              </li>
              <li className="mb-3">
                <span>Yoga & Pilates</span>
              </li>
            </ul>
          </div>

          {/* filter by price */}
          <div className="text-[#141414] font-light text-[20px] pb-3">
            <h2>Filter by</h2>
          </div>
          <hr />
          <PriceRangeSlider />
        </div>
      </div>
    </>
  );
};

export default MobileFilterMenu;
