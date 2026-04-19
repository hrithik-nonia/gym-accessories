import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div
        className=" py-15 md:py-25  grid grid-cols-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 "
        id="contact"
      >
        <p>
          <a
            href="#"
            className="text-[#142026] text-[25px] font-bold flex justify-center"
          >
            GYM
            <span className="text-red-500 ml-1">X.</span>
          </a>
        </p>
        <div className=" px-10 ">
          <h2 className="mb-6 font-bold text-center md:text-left">Store</h2>
          <p className="font-light text-center md:text-left">
            <a href="#">Shop</a> <br />
            <a href="#">Shipping & Returns</a>
            <br />
            <a href="#">Store Policy</a>
            <br />
            <a href="#">FAQ</a>
          </p>
        </div>

        <div className=" px-10 ">
          <h2 className="mb-6 font-bold text-center md:text-left">Contact</h2>
          <p className="font-light text-center md:text-left">
            <a href="#">500 Terry Francine Street</a> <br />
            <a href="#">San Francisco, CA 94158</a>
            <br />
            <a href="#">Tel: 123-456-7890</a>
            <br />
            <a href="#">info@mysite.com</a>
          </p>
        </div>

        <div className=" px-10 ">
          <h2 className="mb-6 font-bold text-center md:text-left">Follow Us</h2>
          <p className="flex gap-4 justify-center md:justify-start">
            <a href="#">
              <CiFacebook size={"20px"} />
            </a>
            <a href="#">
              <FaInstagram size={"20px"} />
            </a>

            <a href="#">
              <AiOutlineYoutube size={"20px"} />
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#a9977b] ">
        <p className="text-[#141414] text-sm text-center py-2 font-light">
          © 2035 by GYM X.
        </p>
      </div>
    </>
  );
};
export default Footer;
