import Card from "./card";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useRef, useContext } from "react";
import { AppContext } from "../storage/landing-page-storage";

const ProductSectionOne = () => {
  // ------------take card data-----------
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
        <h1 className="text-[#141414] text-[30px] sm:text-[44px]  font-bold text-center mt-16  font-serif">
          Up to 20% off Selected Items
        </h1>
        <p className="text-center font-light text-[#141414] mt-3">
          I'm a title. Click here to add your own text and edit me.
        </p>

        {/* -----------add card-------------- */}
        <div className=" md:m-15 grid grid-cols-[auto_1fr_auto] items-center gap-4 mx-0 my-10">
          <button className="text-[#141414]" onClick={scrollLeft}>
            <CiCircleChevLeft size={"40px"} />
          </button>
          <div
            ref={scrollRef}
            className=" flex gap-4 p-2 overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            <Card data={mensCards}></Card>
          </div>
          <button className="text-[#141414] " onClick={scrollRight}>
            <CiCircleChevRight size={"40px"} />
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductSectionOne;
