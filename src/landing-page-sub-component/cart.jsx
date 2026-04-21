import { useContext } from "react";
import { AppContext } from "../storage/landing-page-storage";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdDelete } from "react-icons/md";

const Cart = ({ onClose }) => {
  const { cartItems } = useContext(AppContext);
  const totalAmount = cartItems
    .reduce((total, item) => total + item.price * item.qty, 0)
    .toFixed(2);

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
            <p className="font-light">({cartItems.length} items)</p>
          </div>

          <button onClick={onClose} className="cursor-pointer">
            ✖
          </button>
        </div>

        {/* ----------Content------------ */}
        <div className="p-5 h-[calc(100%-70px)] overflow-y-auto">
          {/* --------product here----------- */}
          {cartItems.map((item) => (
            <div key={item.id}>
              <div className=" flex mb-3 ">
                <div className=" w-1/5 aspect-square  cursor-pointer">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="flex-1 px-4">
                  <p className="text-sm font-light cursor-pointer">
                    {item.title}
                  </p>
                  <p className="text-sm font-light mt-2 ">₹ {item.price}</p>
                  <div className="flex items-center">
                    <p className="text-sm font-light mt-1">Qty: {item.qty}</p>
                    <p className="text-sm font-light ms-auto">
                      ₹ {item.price * item.qty}
                    </p>
                  </div>
                </div>
                <div>
                  <MdDelete size={"30px"} className="cursor-pointer" />
                </div>
              </div>
              <hr className="mb-3" />
            </div>
          ))}

          <hr />
          <div className="p-5 ">
            <div className="flex justify-between font-light text-xl mb-2">
              <h3>Estimated total</h3>
              <span>₹ {totalAmount}</span>
            </div>
            <span className="text-[14px] font-light">
              Taxes and shipping are calculated at checkout.
            </span>
            <button className="font-light rounded-lg bg-[#141414] text-[#fffcfc] w-full py-2 mt-5 hover:bg-gray-400 hover:underline  transition duration-400 ">
              Checkout
            </button>
            <br />
            <button className="font-light hover:underline rounded-lg border text-[#141414] w-full py-2 mt-5 hover:bg-gray-200  transition duration-400 ">
              View Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
