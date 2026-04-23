import { RxAvatar } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
import Heading from "./heading";
import { Link } from "react-scroll";
import Login from "../landing-page-sub-component/login";
import { useState, useContext } from "react";
import Cart from "../landing-page-sub-component/cart";
import { AppContext } from "../storage/landing-page-storage";

const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { showCart, setShowCart, cartItems, scrollToTop } =
    useContext(AppContext);

  return (
    <>
      {/* ---------add heading-------- */}
      <Heading></Heading>

      <div className="bg-[#fffcfc] flex items-center h-17 border">
        {/* -------logo container ------------ */}
        <div className="bg-[#1f2126] lg:w-1/5 py-4 text-center px-2 w-full h-full">
          <button
            className="text-[#fffcfc] text-[25px] font-bold cursor-pointer "
            onClick={() => scrollToTop(1500)}
          >
            GYM
            <span className="text-red-500 ml-1">X.</span>
          </button>
        </div>

        {/* ----------- links container for desktop--------------- */}
        <div className=" w-full lg:w-1/2 ml-auto py-4 h-full hidden lg:block">
          <ul className="flex gap-20 items-center justify-center h-full text-[14px]">
            <li>
              <button
                className=" text-[#a9977b] cursor-pointer"
                onClick={() => scrollToTop(1500)}
              >
                Home
              </button>
            </li>

            {/* --------shop all btn--------- */}
            <li className="relative group">
              <button className="text-[#141414] cursor-pointer">
                shop All
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-[#fffcfc] border border-gray-200 rounded-lg py-2 min-w-42.5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 -translate-y-1.5 group-hover:translate-y-0 cursor-pointer">
                <a
                  href="#"
                  className="block px-4 py-2 text-[13px] text-[#141414] hover:bg-gray-50 hover:text-[#a9977b]"
                >
                  Weight Traning
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-[13px] text-[#141414] hover:bg-gray-50 hover:text-[#a9977b]"
                >
                  Yoga & Pilates
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-[13px] text-[#141414] hover:bg-gray-50 hover:text-[#a9977b]"
                >
                  Fitness Accessories
                </a>
              </div>
            </li>

            {/* --------contect btn---------- */}
            <li>
              <Link
                className="text-[#141414] cursor-pointer"
                to="contact"
                smooth={true}
                duration={2500}
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                className="text-[#141414] flex gap-2 cursor-pointer"
                onClick={() => setShowLogin(true)}
              >
                <span className="flex items-center justify-center">
                  <RxAvatar size={"25px"} />
                </span>
                <span>Log In</span>
              </button>
            </li>

            <li>
              <button
                className="text-[#141414] flex gap-2 cursor-pointer"
                onClick={() => setShowCart(true)}
              >
                <span className="flex items-center justify-center">
                  <CiShoppingCart size={"25px"} />
                  {cartItems.length > 0 && (
                    <span className="absolute top-11 right-18 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </span>
                <span> Cart</span>
              </button>
            </li>
          </ul>
        </div>

        {/* --------------links container for mobile ------------ */}
        <div className=" w-full lg:w-1/2 ml-auto py-4 h-full lg:hidden  flex items-center justify-center">
          <div className=" w-full flex gap-13">
            <span className="flex items-center ml-auto ">
              <CiShoppingCart size={"30px"} />
            </span>

            <button className="text-[30px] pr-5">☰</button>
          </div>
        </div>
      </div>

      {/* ----------show login page---------- */}
      {showLogin && <Login onClose={() => setShowLogin(false)}></Login>}

      {/* ----------show cart page------------- */}
      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </>
  );
};
export default NavBar;
