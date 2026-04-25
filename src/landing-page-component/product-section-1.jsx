import Card from "./card";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useRef, useContext } from "react";
import { AppContext } from "../storage/landing-page-storage";
import HeadingForLandPageComp from "./heading-for-landing-page-components";

const ProductSectionOne = () => {
  // ------------take card data------------
  const { cards } = useContext(AppContext);

  // ---------men's data -----------
  const mensCards = cards.filter((cart) => cart.category === "men's clothing");

  // ----------this is for horizontal scroll------------
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    const cardWidth = scrollRef.current.querySelector("div").offsetWidth;
    scrollRef.current.scrollBy({ left: -(cardWidth + 16), behavior: "smooth" });
  };

  const scrollRight = () => {
    const cardWidth = scrollRef.current.querySelector("div").offsetWidth;
    scrollRef.current.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
  };
  return (
    <>
      <div>
        <HeadingForLandPageComp
          title="Men's Collection"
          subtitle="Best outfits for men"
        ></HeadingForLandPageComp>

        {/* -----------add card-------------- */}
        <div className=" md:m-15 grid grid-cols-[auto_1fr_auto] items-center gap-4 mx-0 my-10">
          <button
            className="text-[#141414] cursor-pointer"
            onClick={scrollLeft}
          >
            <CiCircleChevLeft size={"40px"} />
          </button>
          <div
            ref={scrollRef}
            className=" flex gap-4 p-2 overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            <Card data={mensCards}></Card>
          </div>
          <button
            className="text-[#141414] cursor-pointer"
            onClick={scrollRight}
          >
            <CiCircleChevRight size={"40px"} />
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductSectionOne;
