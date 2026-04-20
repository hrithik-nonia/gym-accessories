import { useContext } from "react";
import { AppContext } from "../storage/landing-page-storage";

const Cart = ({ onClose }) => {
  const { cartItems } = useContext(AppContext);
  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        onClick={onClose}
      ></div>

      {/* Right Popup */}
      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-[#fffcfc] shadow-lg z-50 
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex gap-3 items-center text-[#141414]">
            <h2 className="text-lg font-bold ">Cart</h2>
            <p className="font-light">(0 items)</p>
          </div>

          <button onClick={onClose} className="cursor-pointer">
            ✖
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="p-4 space-y-4">
            {/* ----------cart product here----------- */}
            <p className="font-light">({cartItems.length} items)</p>
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-3 border-b pb-2">
                <img src={item.image} className="w-12 h-12 object-cover" />
                <div>
                  <p className="text-sm">{item.title}</p>
                  <p className="text-sm">Qty: {item.qty}</p>
                  <p className="text-sm">₹ {item.price * item.qty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
