import { PiCaretRightLight } from "react-icons/pi";
import PriceRangeSlider from "./price-range-slider";
import shopSectionBanner from "../assets/shop_now_banner.avif";
import Card from "../landing-page-component/card";
import MobileFilterMenu from "./burger-menu-for-shop-all-comp";
import { useContext } from "react";
import { AppContext } from "../storage/landing-page-storage";
import { Link, useLocation } from "react-router-dom";

const ShopAllPage = () => {
  const { cards, scrollToTop } = useContext(AppContext);
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
    "Best Sellers":
      "This is your category description. It’s a great place to tell customers what this category is about, connect with your audience and draw attention to your products.",
    Sale: "This is your category description. It’s a great place to tell customers what this category is about, connect with your audience and draw attention to your products.",
    "All Products":
      "This is your category description. It's a great place to tell customers what this category is about.",
  };
  return (
    <>
      <div className="px-0 md:px-20">
        <div className=" flex gap-1 font-light items-center text-[#141414]  px-3 md:py-6 py-3">
          <Link to="/"> Home</Link>
          <PiCaretRightLight />
          <p>{category}</p>
        </div>

        <div className="flex">
          {/* ----------section for navigation---------- */}

          <section className="  p-3 w-[15%] font-light hidden md:block">
            {/* -------------product links---------- */}
            <div className="mb-12 text-[#141414]">
              <span className="text-[22px] block mb-3">Browse by</span>
              <hr />
              <ul className="text-[15px] pt-3 ">
                <li className="mb-3">
                  <span
                    className="cursor-pointer hover:underline transition duration-500"
                    onClick={() => scrollToTop(1500)}
                  >
                    All Products
                  </span>
                </li>
                <li className="mb-3">
                  <Link
                    to="/shopNowPage"
                    state={{
                      category: "Best Sellers",
                      img: "banner_for_best_seller.avif",
                    }}
                    className="hover:underline transition duration-500"
                  >
                    Best Sellers
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/shopNowPage"
                    state={{
                      category: "Fitness Accessories",
                      img: "banner_2_section_2.webp",
                    }}
                    className="hover:underline transition duration-500"
                  >
                    Fitness Accessories
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/shopNowPage"
                    state={{
                      category: "Sale",
                      img: "banner_for_sale.avif",
                    }}
                    className="hover:underline transition duration-500"
                  >
                    Sale
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/shopNowPage"
                    state={{
                      category: "Weight Training",
                      img: "banner_3_section_2.jpg",
                    }}
                    className="hover:underline transition duration-500"
                  >
                    Weight Training
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/shopNowPage"
                    state={{
                      category: "Yoga & Pilates",
                      img: "banner_for_section_2.webp",
                    }}
                    className="hover:underline transition duration-500"
                  >
                    Yoga & Pilates
                  </Link>
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
            <MobileFilterMenu data={cards}></MobileFilterMenu>

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
