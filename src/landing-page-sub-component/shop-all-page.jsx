import { PiCaretRightLight } from "react-icons/pi";
import PriceRangeSlider from "./price-range-slider";
import shopSectionBanner from "../assets/shop_now_banner.avif";
import Card from "../landing-page-component/card";
import MobileFilterMenu from "./burger-menu-for-shop-all-comp";
import { useContext } from "react";
import { AppContext } from "../storage/landing-page-storage";
import { useLocation } from "react-router-dom";

const ShopAllPage = () => {
  const { cards } = useContext(AppContext);
  const location = useLocation();

  // -----------state receiving------------
  const category = location.state?.category || "All Products";
  const image = location.state?.img || shopSectionBanner;

  // Category ke hisaab se description
  const descriptions = {
    "Yoga & Pilates":
      "Yoga aur Pilates ke liye best products. Apni flexibility aur strength badhao.",
    "Fitness Accessories":
      "Fitness accessories jo aapki workout ko next level le jaaye.",
    "Weight Training": "Weight training ke liye premium equipment aur gear.",
    "All Products":
      "This is your category description. It's a great place to tell customers what this category is about.",
  };
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
                src={image}
                alt="shopSectionBanner"
                className="w-full h-[300px] md:h-[500px] object-cover"
              />

              {/* --------------bannre text------------ */}
              <div className="px-3 md:px-0">
                <h1 className="text-[#141414] md:text-6xl text-3xl font-bold md:mt-8 mt-4">
                  {category}
                </h1>
                <div className="md:w-[700px] w-full mt-6 font-light">
                  {descriptions[category]}
                </div>
              </div>
            </div>

            {/* --------------responsive product nanigation bar------------ */}
            <MobileFilterMenu></MobileFilterMenu>

            {/* ---------product cards------------- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3 px-3 mdd:px-0">
              <Card data={cards}></Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopAllPage;
