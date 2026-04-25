import { useContext, useEffect, useState } from "react";
import {
  CiHeart,
  CiFacebook,
  CiCircleMinus,
  CiCirclePlus,
  CiLight,
} from "react-icons/ci";
import { FaPinterest, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import HorizontalScroll from "./scroll-able-product-section-2";
import { AppContext } from "../storage/landing-page-storage";
import { Link } from "react-router-dom";
import LikedProductPage from "./liked-product-page";
import OrderUnavailableModal from "./buy-btn-page";

const ShowSelectedProductPage = () => {
  // ----------state for information list----------
  const [openIndex, setOpenIndex] = useState(0);

  // -------------show selected item at top of the page--------------
  const { selectedProductId, cards, addToCart, setShowCart } =
    useContext(AppContext);

  // ---------add count state--------
  const [quantity, setQuantity] = useState(1);

  // ---------handle add to cart btn----------
  const handleAddToCart = () => {
    if (showProductData && quantity > 0) {
      addToCart(showProductData, quantity); // cart mein add
      setShowCart(true); // cart open
    }
  };

  // -------------create state for filtered product to show top of the page-----------
  const [showProductData, setShowProductData] = useState(null);

  useEffect(() => {
    // selectedProductId na ho toh localStorage se lo
    const id = selectedProductId || localStorage.getItem("selectedProductId");
    const product = cards.find((item) => item.id == id);
    if (product) {
      setShowProductData(product);
    }
  }, [selectedProductId, cards]);

  // ----------list data for information list----------
  const data = [
    {
      title: "PRODUCT INFO",
      content:
        "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.",
    },
    {
      title: "RETURN & REFUND POLICY",
      content:
        "You can return products within 7 days. Refund will be processed after inspection.",
    },
    {
      title: "SHIPPING INFO",
      content: "Shipping takes 3-5 business days depending on your location.",
    },
  ];
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ----------Liked Product Page show------------
  const [showlikedProductPage, setShowLikedProductPage] = useState(false);

  // -----------show buy page-------------
  const [showBuyPage, setShowBuyPage] = useState(false);

  return (
    <>
      <div>
        <div className="b  w-[60%] mx-auto py-6">
          <div className="py-6 font-light text-[14px] flex">
            {showProductData && (
              <div>
                <Link to="/">Home </Link>/ {showProductData.title}
              </div>
            )}
            <div className="ms-auto">Prev | Next</div>
          </div>

          {showProductData && (
            <div className="flex mt-4">
              <div className="w-[60%] p-8">
                <div className="w-full aspect-square">
                  <img
                    src={showProductData.image}
                    alt="product image"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                <p className="font-light text-[13px] mt-3">
                  {showProductData.description}
                </p>
              </div>
              <div className=" w-[40%] py-6">
                <h1 className="font-light text-[26px]">
                  {showProductData.title}
                </h1>
                <p className="font-light text-[13px]">{`reting: ${showProductData.rating.rate}    rating count: ${showProductData.rating.count}`}</p>
                <p className="font-light text-[20px] mt-5">
                  {showProductData.price}
                </p>

                {/* ----------product quantity---------- */}
                <div className=" mt-5  flex items-center justify-between  gap-2 w-[20px]">
                  <button
                    className="cursor-pointer"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    <CiCircleMinus size={"30px"} />
                  </button>

                  <span className=" text-center">{quantity}</span>

                  <button
                    className="cursor-pointer"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    <CiCirclePlus size={"30px"} />
                  </button>
                </div>

                <div className="flex gap-2 px-5 mt-5">
                  <button
                    className="font-light bg-[#141414] text-[#fffcfc] flex-1 py-2 rounded-lg hover:bg-gray-400 hover:text-[#141414] transition-colors duration-300 ease-in-out cursor-pointer"
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </button>
                  <button
                    className="border rounded-lg px-1 hover:bg-[#B01E28]  transition-colors duration-300 ease-in-out cursor-pointer"
                    onClick={() => setShowLikedProductPage(true)}
                  >
                    <CiHeart size={"30px"} />
                  </button>
                </div>
                <div className="p-5">
                  <button
                    className="text-[#141414] bg-[#a9977b] py-2 rounded-lg w-full hover:bg-gray-200  transition-colors duration-300 ease-in-out cursor-pointer"
                    onClick={() => setShowBuyPage(true)}
                  >
                    Buy Now
                  </button>
                </div>

                {/* --------------information list--------- */}
                <div className="max-w-xl mx-auto  text-[#141414]">
                  {data.map((item, index) => (
                    <div key={index} className="border-b">
                      {/* Header */}
                      <div
                        className="flex justify-between items-center py-4 cursor-pointer"
                        onClick={() => toggle(index)}
                      >
                        <h3 className="text-sm tracking-wide">{item.title}</h3>
                        <span className="text-xl">
                          {openIndex === index ? "−" : "+"}
                        </span>
                      </div>

                      {/* Content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                        }`}
                      >
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* -------social media links--------- */}
                <div className="flex pt-8 gap-6">
                  <a href="#">
                    <CiFacebook size={"25px"} />
                  </a>
                  <a href="#">
                    <FaPinterest size={"25px"} />
                  </a>
                  <a href="#">
                    <FaWhatsapp size={"25px"} />
                  </a>
                  <a href="#">
                    <FaSquareXTwitter size={"25px"} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* --------------scrolla able cards------------- */}
        <HorizontalScroll></HorizontalScroll>
      </div>

      {showlikedProductPage && (
        <LikedProductPage onClose={() => setShowLikedProductPage(false)} />
      )}

      {showBuyPage && (
        <OrderUnavailableModal onClose={() => setShowBuyPage(false)} />
      )}
    </>
  );
};

export default ShowSelectedProductPage;
