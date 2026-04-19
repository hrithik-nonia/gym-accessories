import { PiCaretRightLight } from "react-icons/pi";
import PriceRangeSlider from "./price-range-slider";
import shopSectionBanner from "../assets/shop_now_banner.avif";
import Dropdown from "./dropdown-of-shop-all";

const ShopAllPage = () => {
  return (
    <>
      <div className="px-20">
        <div className=" flex gap-1 font-light items-center text-[#141414]  px-3 py-6">
          <p> Home</p>
          <PiCaretRightLight />
          <p>All Products</p>
        </div>

        <div className="flex ">
          {/* ----------section for navigation---------- */}

          <section className="  p-3 w-[15%] font-light">
            {/* -------------product links---------- */}
            <div className="mb-12 text-[#141414]">
              <span className="text-[22px] block mb-3">Browse by</span>
              <hr />
              <ul className="text-[15px] pt-3">
                <li className="mb-3">
                  <span>All Products</span>
                </li>
                <li className="mb-3">
                  <span>Best Sellers</span>
                </li>
                <li className="mb-3">
                  <span>Fitness Accessories</span>
                </li>
                <li className="mb-3">
                  <span>Sale</span>
                </li>
                <li className="mb-3">
                  <span>Weight Training</span>
                </li>
                <li className="mb-3">
                  <span>Yoga & Pilates</span>
                </li>
              </ul>
            </div>

            <div className="text-[#141414] font-light text-[22px] pb-3">
              <h2>Filter by</h2>
            </div>
            <hr />

            {/* ----------price range slider---------- */}
            <PriceRangeSlider></PriceRangeSlider>
          </section>

          {/* -----------show product here------------- */}
          <div className="w-[85%]">
            {/* ----------banner div------------ */}
            <div className="pb-10">
              {/* -------------banner img add ---------- */}
              <img
                src={shopSectionBanner}
                alt="shopSectionBanner"
                className="w-full h-full object-cover"
              />

              {/* --------------bannre text------------ */}
              <div>
                <h1 className="text-[#141414] text-6xl font-bold mt-8">
                  All Products
                </h1>
                <div className="w-[700px] mt-6 font-light">
                  This is your category description. It’s a great place to tell
                  customers what this category is about, connect with your
                  audience and draw attention to your products.
                </div>
              </div>
            </div>

            {/* ----------product nanigation bar---------- */}
            <div className="flex rounded-lg  border-gray-200  shadow-md">
              <div className="py-3 font-light text-[#141414] me-auto">
                18 products
              </div>

              {/* ----------dropdown------------- */}
              <Dropdown></Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopAllPage;
