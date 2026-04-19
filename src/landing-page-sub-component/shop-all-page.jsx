import { PiCaretRightLight } from "react-icons/pi";
import PriceRangeSlider from "./price-range-slider";
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

          <div className="bg-red-500 w-[85%]">b</div>
        </div>
      </div>
    </>
  );
};
export default ShopAllPage;
