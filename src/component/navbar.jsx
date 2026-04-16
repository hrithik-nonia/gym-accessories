import { RxAvatar } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";

const NavBar = () => {
  return (
    <>
      <div className="bg-[#fffcfc] flex items-center h-17">
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
            <li>
              <a href="#" className="text-[#141414]">
                shop All
              </a>
            </li>
            <li>
              <a href="#" className="text-[#141414]">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-[#141414] flex gap-2">
                <span className="flex items-center justify-center">
                  <RxAvatar size={"25px"} />
                </span>
                <span>Log In</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-[#141414] flex gap-2">
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
    </>
  );
};
export default NavBar;
