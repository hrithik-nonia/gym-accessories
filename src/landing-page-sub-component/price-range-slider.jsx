import { useState, useCallback } from "react";

const MIN = 0;
const MAX = 500;
const STEP = 5;
const GAP = 10;

export default function PriceRangeSlider() {
  const [minVal, setMinVal] = useState(20);
  const [maxVal, setMaxVal] = useState(120);

  const handleMin = useCallback(
    (e) => {
      const val = Math.min(Number(e.target.value), maxVal - GAP);
      setMinVal(val);
    },
    [maxVal],
  );

  const handleMax = useCallback(
    (e) => {
      const val = Math.max(Number(e.target.value), minVal + GAP);
      setMaxVal(val);
    },
    [minVal],
  );

  const reset = () => {
    setMinVal(20);
    setMaxVal(120);
  };

  const leftPct = ((minVal - MIN) / (MAX - MIN)) * 100;
  const rightPct = 100 - ((maxVal - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="mt-3">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <span className="text-sm text-[#141414] font-light">Price</span>
        <button
          onClick={reset}
          className="text-xs text-[#141414] underline underline-offset-2 hover:text-gray-600 transition-colors cursor-pointer"
        >
          reset
        </button>
      </div>

      {/* Price display */}
      <div className="flex justify-between items-baseline mb-6">
        <span className="text-[15px] font-light text-gray-900">${minVal}</span>
        <span className="text-sm text-[#141414]">—</span>
        <span className="text-[15px] font-light text-gray-900">${maxVal}</span>
      </div>

      {/* Slider track */}
      <div className="relative h-5 flex items-center mb-2">
        {/* Base track */}
        <div className="absolute w-full h-0.5 bg-gray-200 rounded-full" />

        {/* Filled range */}
        <div
          className="absolute h-0.5 bg-gray-900 rounded-full"
          style={{ left: `${leftPct}%`, right: `${rightPct}%` }}
        />

        {/* Min thumb */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
          value={minVal}
          onChange={handleMin}
          className="absolute w-full appearance-none bg-transparent pointer-events-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-gray-900
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:border-0
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-gray-900
            [&::-moz-range-thumb]:cursor-pointer
            [&::-moz-range-thumb]:border-0"
          style={{ zIndex: minVal > MAX - 20 ? 5 : 3 }}
        />

        {/* Max thumb */}
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
          value={maxVal}
          onChange={handleMax}
          className="absolute w-full appearance-none bg-transparent pointer-events-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-gray-900
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:border-0
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-gray-900
            [&::-moz-range-thumb]:cursor-pointer
            [&::-moz-range-thumb]:border-0"
          style={{ zIndex: 4 }}
        />
      </div>

      {/* Tick labels */}
      <div className="flex justify-between mt-1">
        <span className="text-xs text-[#141414]">${MIN}</span>
        <span className="text-xs text-[#141414]">${MAX}</span>
      </div>
    </div>
  );
}
