import { useState, useContext } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { AppContext } from "../storage/landing-page-storage";
import { Link } from "react-router-dom";

// ✅ alag component — har card ka apna state hoga
const CardItem = ({ cart }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, setShowCart, setSelectedProductId } =
    useContext(AppContext);

  return (
    <div className="min-w-[250px] md:min-w-[304px] p-3 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300 cursor-pointer relative flex flex-col">
      <Link
        to="ShowSelectedProductPage"
        onClick={() => setSelectedProductId(cart.id)}
      >
        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-xl absolute top-0 left-0">
          {`rate: ${cart.rating.rate}`}
        </span>

        <div className="w-full aspect-square">
          <img
            src={cart.image}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </Link>

      <div className="p-4 flex flex-col grow">
        <Link
          to="ShowSelectedProductPage"
          onClick={() => setSelectedProductId(cart.id)}
        >
          <h2 className="text-lg font-light text-[#141414]">{cart.title}</h2>
          <p className="text-gray-500 text-lg">{cart.price}</p>
        </Link>

        <div className="mt-auto">
          <div className="border mt-auto h-10 flex items-center justify-between px-2 gap-2 rounded-lg ">
            <button
              className="cursor-pointer"
              onClick={() => {
                setQuantity((prev) => Math.max(1, prev - 1));
              }}
            >
              <CiCircleMinus size={"30px"} />
            </button>

            <span className="w-12 text-center">{quantity}</span>

            <button
              className="cursor-pointer"
              onClick={() => {
                setQuantity((prev) => prev + 1);
              }}
            >
              <CiCirclePlus size={"30px"} />
            </button>
          </div>

          <button
            className="border mt-3 rounded-lg w-full py-2 text-[#141414] font-light cursor-pointer hover:bg-[#141414] hover:text-[#fffcfc] transition duration-300"
            onClick={() => {
              if (quantity > 0) {
                addToCart(cart, quantity);
                setShowCart(true); // ✅ yeh add karo
                setQuantity(1);
              }
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
