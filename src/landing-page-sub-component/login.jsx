const Login = ({ onClose }) => {
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

          <h2 className="text-xl font-bold mb-4">Login</h2>

          <input
            type="text"
            placeholder="Email"
            className="border p-2 w-full mb-2"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full mb-4"
          />

          <button className="bg-blue-500 text-white w-full py-2 rounded">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
export default Login;
