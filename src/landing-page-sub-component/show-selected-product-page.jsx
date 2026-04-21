import { useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";

const products = [
  {
    id: 1,
    title: "Product 1",
    price: 29.99,
    image: "https://fakestoreapi.com/img/81fAn1tQGsL._AC_UY879_.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    price: 49.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    price: 19.99,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    price: 39.99,
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: 5,
    title: "Product 5",
    price: 59.99,
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
];

const ShowSelectedProductPage = () => {
  // ----------for information list----------
  const [openIndex, setOpenIndex] = useState(0);

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

  // --------------for scroll product-----------
  const scrollRef = useRef(null);
  const CARD_WIDTH = 210 + 16; // card + gap

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -CARD_WIDTH, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
  };

  return (
    <>
      <div>
        <div className="b  w-[60%] mx-auto py-6">
          <div className="py-6 font-light text-[14px]">
            Home / Yoga & Pilates / I'm a product
          </div>
          <div className="flex mt-4">
            <div className=" w-[60%] p-8">
              <img
                src="gym_model.jpg"
                alt="product image"
                className="rounded-lg"
              />

              <p className="font-light text-[13px] mt-3">
                I'm a product description. I'm a great place to add more details
                about your product such as sizing, material, care instructions
                and cleaning instructions.
              </p>
            </div>
            <div className=" w-[40%] py-6">
              <h1 className="font-light text-[26px]">I'm a product</h1>
              <p className="font-light text-[13px]">SKU: 0003</p>
              <p className="font-light text-[20px] mt-5">
                $30.00 Regular Price$20.00
              </p>
              <p className="font-light text-[20px] mt-3">Quantity*2</p>

              <div className="flex gap-2 px-5 mt-5">
                <button className="font-light bg-[#141414] text-[#fffcfc] flex-1 py-2 rounded-lg hover:bg-gray-400 hover:text-[#141414] transition-colors duration-300 ease-in-out cursor-pointer">
                  Add To Cart
                </button>
                <button className="border rounded-lg px-1 hover:bg-[#B01E28]  transition-colors duration-300 ease-in-out cursor-pointer">
                  <CiHeart size={"30px"} />
                </button>
              </div>
              <div className="p-5">
                <button className="text-[#141414] bg-[#a9977b] py-2 rounded-lg w-full hover:bg-gray-200  transition-colors duration-300 ease-in-out cursor-pointer">
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
            </div>
          </div>
        </div>
      </div>

      {/* .................................... */}

      <div className="px-4 py-6">
        {/* ----------scroll container with buttons---------- */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
          {/* -----left button----- */}
          <button
            onClick={scrollLeft}
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
          >
            ‹
          </button>

          {/* -----scrollable cards----- */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
                style={{ width: "210px" }}
              >
                {/* ----image---- */}
                <div style={{ width: "210px", height: "210px" }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* ----info---- */}
                <div className="p-3">
                  <p className="text-sm font-light text-[#141414] line-clamp-2">
                    {product.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    ₹ {product.price}
                  </p>
                  <button className="mt-2 w-full border rounded-lg py-1.5 text-sm font-light hover:bg-[#141414] hover:text-white transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* -----right button----- */}
          <button
            onClick={scrollRight}
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
          >
            ›
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowSelectedProductPage;
