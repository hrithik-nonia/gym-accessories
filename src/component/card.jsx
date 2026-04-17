import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

const Card = () => {
  const cards = [
    {
      id: 1,
      productStatus: "new",
      img: "product-1.avif",
      price: 600,
      productName: "i m a product",
    },
    {
      id: 2,
      productStatus: "new",
      img: "product-1.avif",
      price: 600,
      productName: "i m a product",
    },
    {
      id: 3,
      productStatus: "new",
      img: "product-1.avif",
      price: 600,
      productName: "i m a product",
    },
    {
      id: 4,
      productStatus: "new",
      img: "product-1.avif",
      price: 600,
      productName: "i m a product",
    },
    {
      id: 5,
      productStatus: "new",
      img: "product-1.avif",
      price: 600,
      productName: "i m a product",
    },
    {
      id: 6,
      productStatus: "new",
      img: "product-1.avif",
      price: 600,
      productName: "i m a product",
    },
    {
      id: 7,
      productStatus: "new",
      img: "product-1.avif",
      price: 600,
      productName: "i m a product",
    },
    {
      id: 8,
      productStatus: "new",
      img: "product-1.avif",
      price: 600,
      productName: "i m a product",
    },
  ];
  return (
    <>
      {cards.map((cart) => (
        <div
          className=" min-w-[250px] md:min-w-[304px] p-3 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300 cursor-pointer relative"
          key={cart.id}
        >
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-xl absolute top-0 left-0">
            {cart.productStatus}
          </span>
          <div className="w-full aspect-square ">
            <img
              src={cart.img}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="p-4">
            <h2 className="text-lg font-light text-[#141414]">
              {cart.productName}
            </h2>
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

            <button className="border mt-3 rounded-lg w-full py-2 text-[#141414] font-light cursor-pointer">
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
