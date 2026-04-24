import { useState } from "react";

const Login = ({ onClose }) => {
  const [isSubmited, setIsSubmited] = useState(false);
  const [formValues, setFormValues] = useState({});

  const handleLoginForm = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());

    setFormValues(values);

    setIsSubmited(true); // ✅ yahan lagao
  };
  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        {/* Modal Box */}
        <div
          className="bg-white p-6 rounded-lg w-[300px] relative"
          onClick={(e) => e.stopPropagation()} // 👈 important
        >
          {/* Close Button */}
          <button className="absolute top-2 right-2" onClick={onClose}>
            ✖
          </button>

          {isSubmited ? (
            formValues.email ? (
              <h1 className="py-5 text-center font-light text-[#141414] text-[20px]">
                submited
              </h1>
            ) : (
              <h1 className="py-5 text-center font-light text-[#141414] text-[20px]">
                Fill The Form
              </h1>
            )
          ) : (
            <>
              <form onSubmit={(e) => handleLoginForm(e)}>
                <h2 className="text-xl font-bold mb-4">Login</h2>

                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="border p-2 w-full mb-2"
                />

                <input
                  type="password"
                  placeholder="Password"
                  name="Password"
                  className="border p-2 w-full mb-4"
                />

                <button
                  type="submit"
                  className="bg-blue-500 text-white w-full py-2 rounded"
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Login;
