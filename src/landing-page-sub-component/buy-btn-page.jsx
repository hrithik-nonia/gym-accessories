const OrderUnavailableModal = ({ onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Modal Box */}
        <div
          className="bg-white w-[90%] max-w-[580px] rounded-sm shadow-xl p-10 relative text-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
            aria-label="Close"
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

          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-900 leading-snug mb-4">
            We can't accept online <br /> orders right now
          </h2>

          {/* Subtext */}
          <p className="text-gray-500 text-sm mb-8">
            Please contact us to complete your purchase.
          </p>

          {/* Got It Button */}
          <button
            onClick={onClose}
            className="bg-gray-900 text-white text-sm font-medium px-16 py-3 rounded-sm hover:bg-gray-700 active:scale-95 transition-all cursor-pointer"
          >
            Got It
          </button>
        </div>
      </div>
    </>
  );
};
export default OrderUnavailableModal;
