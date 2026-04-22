import { useRef, useContext } from "react";
import { AppContext } from "../storage/landing-page-storage";

// const cards = [
//   {
//     id: 1,
//     title: "Mountain Escape",
//     tag: "Nature",
//     color: "bg-emerald-100",
//     text: "text-emerald-700",
//     desc: "Explore serene mountain trails and breathtaking views.",
//   },
//   {
//     id: 2,
//     title: "City Lights",
//     tag: "Urban",
//     color: "bg-violet-100",
//     text: "text-violet-700",
//     desc: "Discover the buzz of city nightlife and culture.",
//   },
//   {
//     id: 3,
//     title: "Ocean Breeze",
//     tag: "Beach",
//     color: "bg-sky-100",
//     text: "text-sky-700",
//     desc: "Relax on white sandy beaches with gentle waves.",
//   },
//   {
//     id: 4,
//     title: "Desert Sun",
//     tag: "Adventure",
//     color: "bg-amber-100",
//     text: "text-amber-700",
//     desc: "Journey through vast golden dunes at sunrise.",
//   },
//   {
//     id: 5,
//     title: "Forest Walk",
//     tag: "Nature",
//     color: "bg-lime-100",
//     text: "text-lime-700",
//     desc: "Wander through ancient forests full of life.",
//   },
//   {
//     id: 6,
//     title: "Snow Peak",
//     tag: "Winter",
//     color: "bg-blue-100",
//     text: "text-blue-700",
//     desc: "Experience the magic of snow-capped mountain tops.",
//   },
//   {
//     id: 7,
//     title: "Sunset Valley",
//     tag: "Scenic",
//     color: "bg-rose-100",
//     text: "text-rose-700",
//     desc: "Watch stunning sunsets over rolling green valleys.",
//   },
// ];

export default function HorizontalScroll() {
  const { cards } = useContext(AppContext);

  // ----------for horizontal scroll effect---------
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className=" bg-gray-50 flex flex-col justify-center px-6 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-5 max-w-4xl mx-auto w-full">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Related Products
            </h1>
            <p className="text-sm text-gray-400 mt-0.5">Scroll to explore</p>
          </div>
          {/* Arrow buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-100 active:scale-95 transition-all"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-600"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-100 active:scale-95 transition-all"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-600"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll Container */}
        <div className="max-w-4xl mx-auto w-full relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-3 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* -----------product cards------------- */}
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-60 bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow duration-200 cursor-pointer"
              >
                <div className="aspect-square w-full overflow-hidden rounded-xl">
                  <img
                    src={card.image}
                    alt="product images"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-3 font-light text-[16px]">
                  <h4 className="text-[#141414]">{card.title}</h4>
                  <p className="text-[#646464]">{card.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-gray-50 to-transparent" />
        </div>
      </div>
    </>
  );
}
