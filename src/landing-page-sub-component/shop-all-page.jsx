import { PiCaretRightLight } from "react-icons/pi";
import PriceRangeSlider from "./price-range-slider";
import shopSectionBanner from "../assets/shop_now_banner.avif";
import Card from "../landing-page-component/card";
import MobileFilterMenu from "./burger-menu-for-shop-all-comp";

const ShopAllPage = () => {
  return (
    <>
      <div className="px-0 md:px-20">
        <div className=" flex gap-1 font-light items-center text-[#141414]  px-3 md:py-6 py-3">
          <p> Home</p>
          <PiCaretRightLight />
          <p>All Products</p>
        </div>

        <div className="flex">
          {/* ----------section for navigation---------- */}

          <section className="  p-3 w-[15%] font-light hidden md:block">
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
          <div className="md:w-[85%] w-full">
            {/* ----------banner div------------ */}
            <div className="md:pb-10 pb-4">
              {/* -------------banner img add ---------- */}
              <img
                src={shopSectionBanner}
                alt="shopSectionBanner"
                className="w-full md:h-full h-[300px] object-cover"
              />

              {/* --------------bannre text------------ */}
              <div className="px-3 md:px-0">
                <h1 className="text-[#141414] md:text-6xl text-3xl font-bold md:mt-8 mt-4">
                  All Products
                </h1>
                <div className="md:w-[700px] w-full mt-6 font-light">
                  This is your category description. It’s a great place to tell
                  customers what this category is about, connect with your
                  audience and draw attention to your products.
                </div>
              </div>
            </div>

            {/* --------------responsive product nanigation bar------------ */}
            <MobileFilterMenu></MobileFilterMenu>

            {/* ---------product cards------------- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3 px-3 mdd:px-0">
              <Card></Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopAllPage;
