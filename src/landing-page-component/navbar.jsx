import { RxAvatar } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
import Heading from "./heading";
import { Link } from "react-scroll";
import Login from "../landing-page-sub-component/login";
import { useState } from "react";
import Cart from "../landing-page-sub-component/cart";

const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      {/* ---------add heading-------- */}
      <Heading></Heading>

      <div className="bg-[#fffcfc] flex items-center h-17 border">
        {/* -------logo container ------------ */}
        <div className="bg-[#1f2126] lg:w-1/5 py-4 text-center px-2 w-full h-full">
          <a href="#" className="text-[#fffcfc] text-[25px] font-bold ">
            GYM
            <span className="text-red-500 ml-1">X.</span>
          </a>
        </div>

        {/* ----------- links container for desktop--------------- */}
        <div className=" w-full lg:w-1/2 ml-auto py-4 h-full hidden lg:block">
          <ul className="flex gap-20 items-center justify-center h-full text-[14px]">
            <li>
              <a href="#" className=" text-[#a9977b]">
                Home
              </a>
            </li>

            {/* --------shop all btn--------- */}
            <li className="relative group">
              <a href="#" className="text-[#141414]">
                shop All
              </a>
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-[#fffcfc] border border-gray-200 rounded-lg py-2 min-w-[170px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 translate-y-[-6px] group-hover:translate-y-0">
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
                duration={1500}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-[#141414] flex gap-2 cursor-pointer"
                onClick={() => setShowLogin(true)}
              >
                <span className="flex items-center justify-center">
                  <RxAvatar size={"25px"} />
                </span>
                <span>Log In</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-[#141414] flex gap-2"
                onClick={() => setShowCart(true)}
              >
                <span className="flex items-center justify-center">
                  <CiShoppingCart size={"25px"} />
                </span>
                <span> Cart</span>
              </a>
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
      {showCart && <Cart onClose={() => setShowCart(false)}></Cart>}
    </>
  );
};
export default NavBar;
