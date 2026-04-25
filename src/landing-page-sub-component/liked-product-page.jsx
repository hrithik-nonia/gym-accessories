export default function LikedProductPage({ onClose }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Modal Overlay */}
      {open && (
        <div className="fixed inset-0 bg-gray-100 flex items-center justify-center">
          {/* Close Button */}
          <button
            className="absolute top-5 right-6 text-gray-600 hover:text-gray-900 transition-colors p-1"
            aria-label="Close"
            onClick={onClose}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="flex flex-col items-center text-center px-6 max-w-xl w-full">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Demo Mode
            </h1>
            <p className="text-gray-500 text-base mb-10">
              To make this template yours, start editing it.
            </p>
            <button
              className="bg-gray-900 text-white text-sm font-medium px-20 py-4 rounded hover:bg-gray-700 active:scale-95 transition-all tracking-wide"
              onClick={onClose}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
