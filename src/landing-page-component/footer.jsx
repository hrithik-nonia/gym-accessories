import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";

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
            onClick={(e) => {
              e.preventDefault();
              const start = window.scrollY;

              const duration = 2000; // 2 seconds
              const startTime = performance.now();

              const scroll = (currentTime) => {
                const elapsed = currentTime - startTime;

                const progress = Math.min(elapsed / duration, 1);

                // easeInOutCubic — super smooth feel
                const ease =
                  progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

                window.scrollTo(0, start * (1 - ease));

                if (progress < 1) {
                  requestAnimationFrame(scroll);
                }
              };

              requestAnimationFrame(scroll);
            }}
          >
            GYM
            <span className="text-red-500 ml-1">X.</span>
          </a>
        </p>
        <div className=" px-10 ">
          <h2 className="mb-6 font-bold text-center md:text-left">Store</h2>
          <p className="font-light text-center md:text-left">
            <Link to="/shopNowPage">Shop</Link> <br />
            <Link to="/shipping">Shipping & Returns</Link>
            <br />
            <Link to="/store-policy">Store Policy</Link>
            <br />
            <Link to="/faq">FAQ</Link>
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
