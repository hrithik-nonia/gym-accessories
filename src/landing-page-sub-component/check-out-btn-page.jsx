import { MdOutlineDangerous } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { useState } from "react";
import { FaTag } from "react-icons/fa";

const CheckOutPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <div className=" w-[60%] mx-auto py-4 flex">
          <span className="text-[#141414] text-[25px] font-semibold cursor-pointer ">
            GYM
            <span className="text-red-500 ml-1">X.</span>
          </span>
          <h1 className="text-[20px] font-light ps-3 my-auto text-[#141414]">
            CHECKOUT
          </h1>
          <span className="font-light ms-auto text-md my-auto text-[#141414] hover:underline transition duration-500 cursor-pointer">
            Continue Browsing
          </span>
        </div>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 w-[60%] mx-auto">
          <div className=" border-r ">
            <div className="pt-20 w-[80%] mx-auto text-center">
              <span className="flex items-center justify-center pb-5">
                <MdOutlineDangerous size={"25px"} />
              </span>
              <p className="text-3xl font-semibold text-[#141414]">
                We can’t accept online payments
              </p>

              <p className="text-[#141414] font-light text-[16px] pt-5">
                Contact us for help with your order.
              </p>
            </div>
          </div>
          <div className=" p-6">
            <div className="flex text-[#141414]">
              <span className="text-[18px] font-semibold">Order summary</span>
              <span className="text-[16px] font-light items-center flex ms-2">
                (14 items)
              </span>
              <span className="ms-auto items-center flex">
                <GoPencil size={"20px"} />
              </span>
            </div>

            {/* -----------products--------------- */}
            <div className="flex mt-8 ">
              <div className="w-20 aspect-square me-4">
                <img
                  src="gym_model.jpg"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-full ">
                <div className="flex w-full">
                  <div className="me-auto">I'm a product</div>
                  <div>$260.00</div>
                </div>
                <div>SKU: 0004</div>
              </div>
            </div>

            {/* ------------for promo code----------- */}
            <div className="border border-gray-300 rounded-lg p-4 w-full max-w-md mt-8">
              {/* Top clickable bar */}
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <FaTag />
                <span className="underline">Enter a promo code</span>
              </div>

              {/* Hidden section */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="e.g., SAVE50"
                    className="border border-gray-300 px-3 py-2 w-full rounded"
                  />
                  <button className="bg-gray-400 text-white px-4 py-2 rounded">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* -----------total price section------------- */}
            <div className="w-full flex mt-8 font-light text-[16px]">
              <span>Subtotal</span>
              <span className="ms-auto">$280.00</span>
            </div>
            <div className="w-full flex mt-2 font-light text-[16px]">
              <span>Delivery</span>
              <span className="ms-auto">--</span>
            </div>
            <div className="w-full flex mt-2  text-[20px]">
              <span>Total</span>
              <span className="ms-auto">$280.00</span>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
export default CheckOutPage;
