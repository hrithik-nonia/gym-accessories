const FormVreificationPopup = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 max-w-sm w-[90%] text-center shadow-2xl">
          {/* ----checkmark icon---- */}
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#141414] mb-2">
            Subscribed!
          </h2>
          <p className="text-gray-500 font-light mb-6">
            Thank you for subscribing to our newsletter. We'll keep you updated!
          </p>
          <button
            className="bg-[#142026] text-white px-8 py-2 rounded-lg hover:bg-[#a9977b] hover:text-[#141414] transition duration-300 cursor-pointer"
            onClick={onClose}
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
};
export default FormVreificationPopup;
