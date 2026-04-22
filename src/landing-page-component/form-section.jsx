import { useState } from "react";
import formImg from "../assets/form_img.avif";
import FormVreificationPopup from "../landing-page-sub-component/form-section-verification-popup";

const FormSection = () => {
  const [showVerificationPopup, setShowVerificationPopup] = useState(false);
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 bg-[#142026]"
        id="formSection"
      >
        {/* ---------img div-------- */}
        <div
          className="min-h-[400px] md:min-h-full bg-fixed bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${formImg})` }}
        />

        {/* ----------form div---------- */}
        <div>
          <h1 className="text-[#fffcfc]  text-[30px] sm:text-[44px] font-serif font-bold text-center px-30 pt-35">
            Subscribe to Our Newsletter
          </h1>

          {/* ---------form--------- */}

          <form
            className="mx-4 md:mx-auto max-w-md mt-10 mb-25"
            onSubmit={(e) => {
              e.preventDefault(); // ✅ page refresh rokta hai
              setShowVerificationPopup(true);
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
              {/* --------first name---------- */}
              <div>
                <label className="block text-sm font-medium mb-1 text-[#fffcfc]">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 text-[#fffcfc]"
                />
              </div>

              {/* --------last name--------- */}
              <div>
                <label className="block text-sm font-medium mb-1 text-[#fffcfc]">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 text-[#fffcfc]"
                />
              </div>
            </div>

            {/* ---------input for email---------- */}

            <div className="mb-5">
              <label className="block text-sm font-medium mb-1 text-[#fffcfc]">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 text-[#fffcfc]"
              />
            </div>

            {/* -----------check input--------- */}
            <div className="flex items-center gap-2 mb-5">
              <input
                type="checkbox"
                className="w-4 h-4 bg-transparent border border-gray-400 appearance-none checked:bg-white"
              />
              <label className="text-sm text-[#fffcfc]">
                I agree to terms & conditions
              </label>
            </div>

            {/* -----------submit button--------- */}
            <button
              type="submit"
              className="w-full bg-[#a9977b] text-[#141414] py-2 rounded-md hover:bg-[#8c7a60] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* --------------show verification popup------------ */}
      {showVerificationPopup && (
        <FormVreificationPopup
          onClose={() => setShowVerificationPopup(false)}
        />
      )}
    </>
  );
};
export default FormSection;
