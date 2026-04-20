import { useContext, useRef, useEffect, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { AppContext } from "../storage/landing-page-storage";

const Card = () => {
  // ------------scroll loading effect-----------
  const { cards } = useContext(AppContext);
  const loaderRef = useRef(null);
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible((prev) => prev + 4);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {cards.slice(0, visible).map((cart) => (
        <div
          className=" min-w-[250px] md:min-w-[304px] p-3 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300 cursor-pointer relative"
          key={cart.id}
        >
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-xl absolute top-0 left-0">
            {`rate: ${cart.rating.rate}`}
          </span>
          <div className="w-full aspect-square ">
            <img
              src={cart.image}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="p-4">
            <h2 className="text-lg font-light text-[#141414]">{cart.title}</h2>
            <p className="text-gray-500 text-lg ">{cart.price}</p>

            <div className="border  mt-2 h-10 flex items-center justify-between px-2 gap-2 rounded-lg">
              <button className="cursor-pointer">
                <CiCircleMinus size={"30px"} />
              </button>

              <input
                type="text"
                className="w-12 text-center h-full outline-none "
              />

              <button className="cursor-pointer">
                <CiCirclePlus size={"30px"} />
              </button>
            </div>

            <button className="border mt-3 rounded-lg w-full py-2 text-[#141414] font-light cursor-pointer hover:bg-[#141414] hover:text-[#fffcfc] transition duration-300">
              Add To Cart
            </button>
          </div>
        </div>
      ))}

      <div ref={loaderRef} className="h-10"></div>
    </>
  );
};
export default Card;
