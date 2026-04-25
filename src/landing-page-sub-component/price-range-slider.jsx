import { useRef, useCallback } from "react";

export default function PriceRangeSlider({
  minVal,
  maxVal,
  setMinVal,
  setMaxVal,
  maxLimit,
}) {
  const MIN = 0;
  const MAX = maxLimit;
  const GAP = 5;
  const trackRef = useRef(null);
  const dragging = useRef(null); // "min" | "max" | null

  const getValueFromPosition = useCallback(
    (clientX) => {
      const rect = trackRef.current.getBoundingClientRect();
      const pct = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
      return Math.round(pct * (MAX - MIN) + MIN);
    },
    [MAX, MIN],
  );

  const onMouseMove = useCallback(
    (e) => {
      if (!dragging.current) return;
      const val = getValueFromPosition(e.clientX);
      if (dragging.current === "min") {
        setMinVal(Math.min(val, maxVal - GAP));
      } else {
        setMaxVal(Math.max(val, minVal + GAP));
      }
    },
    [getValueFromPosition, minVal, maxVal, setMinVal, setMaxVal],
  );

  const onMouseUp = useCallback(() => {
    dragging.current = null;
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  }, [onMouseMove]);

  const startDrag = useCallback(
    (thumb) => (e) => {
      e.preventDefault();
      dragging.current = thumb;
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    },
    [onMouseMove, onMouseUp],
  );

  // Touch support
  const onTouchMove = useCallback(
    (e) => {
      if (!dragging.current) return;
      const val = getValueFromPosition(e.touches[0].clientX);
      if (dragging.current === "min") {
        setMinVal(Math.min(val, maxVal - GAP));
      } else {
        setMaxVal(Math.max(val, minVal + GAP));
      }
    },
    [getValueFromPosition, minVal, maxVal, setMinVal, setMaxVal],
  );

  const onTouchEnd = useCallback(() => {
    dragging.current = null;
  }, []);

  const startTouchDrag = useCallback(
    (thumb) => (e) => {
      dragging.current = thumb;
    },
    [],
  );

  const reset = () => {
    setMinVal(0);
    setMaxVal(MAX);
  };

  const leftPct = ((minVal - MIN) / (MAX - MIN)) * 100;
  const rightPct = 100 - ((maxVal - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="mt-3 select-none px-3">
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

      {/* Track */}
      <div
        ref={trackRef}
        className="relative h-5 flex items-center mb-2"
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Base track */}
        <div className="absolute w-full h-0.5 bg-gray-200 rounded-full" />

        {/* Filled range */}
        <div
          className="absolute h-0.5 bg-gray-900 rounded-full"
          style={{ left: `${leftPct}%`, right: `${rightPct}%` }}
        />

        {/* Min thumb */}
        <div
          className="absolute w-5 h-5 bg-gray-900 rounded-full cursor-grab active:cursor-grabbing"
          style={{ left: `calc(${leftPct}% - 10px)`, zIndex: 3 }}
          onMouseDown={startDrag("min")}
          onTouchStart={startTouchDrag("min")}
        />

        {/* Max thumb */}
        <div
          className="absolute w-5 h-5 bg-gray-900 rounded-full cursor-grab active:cursor-grabbing"
          style={{ left: `calc(${100 - rightPct}% - 10px)`, zIndex: 4 }}
          onMouseDown={startDrag("max")}
          onTouchStart={startTouchDrag("max")}
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
