import { useContext, useState } from "react";
import { AppContext } from "../storage/landing-page-storage";
import { MdDelete } from "react-icons/md";
import { FiTag, FiFileText, FiLock } from "react-icons/fi";

const ViewCartData = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [promoOpen, setPromoOpen] = useState(false);
  const [noteOpen, setNoteOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [note, setNote] = useState("");

  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQtyChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
      ),
    );
  };

  const subtotal = cartItems
    .reduce((total, item) => total + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <>
      <div className=" bg-[#f8f7f5] font-['Cormorant_Garamond',serif] py-10 px-4">
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          {/* --------Left: My Cart-------- */}
          <div>
            <h2 className="text-2xl font-light tracking-widest text-[#1a1a1a] mb-1 font-['Jost',sans-serif]">
              My cart
            </h2>
            <hr className="border-[#d0cdc8] mb-6" />

            {cartItems.length === 0 ? (
              <p className="text-[#888] font-['Jost',sans-serif] font-light text-sm tracking-wide py-10 text-center">
                Your cart is empty.
              </p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center gap-5 py-5">
                    {/* Image */}
                    <div className="w-[100px] h-[100px] bg-[#eeece8] flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] font-['Jost',sans-serif] font-light text-[#1a1a1a] truncate">
                        {item.title}
                      </p>
                      <p className="text-sm font-['Jost',sans-serif] font-light text-[#888] mt-1">
                        ₹ {item.price}
                      </p>
                    </div>

                    {/* Qty Controls */}
                    <div className="flex items-center border border-[#ccc] gap-0">
                      <button
                        onClick={() => handleQtyChange(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center text-[#555] hover:bg-[#eee] transition font-['Jost',sans-serif] text-lg"
                      >
                        −
                      </button>
                      <span className="w-10 text-center text-sm font-['Jost',sans-serif] font-light text-[#1a1a1a]">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => handleQtyChange(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center text-[#555] hover:bg-[#eee] transition font-['Jost',sans-serif] text-lg"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right min-w-[80px]">
                      <p className="text-sm font-['Jost',sans-serif] font-light text-[#1a1a1a]">
                        ₹ {(item.price * item.qty).toFixed(2)}
                      </p>
                    </div>

                    {/* Delete */}
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-[#aaa] hover:text-[#333] transition ml-2"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>
                  <hr className="border-[#d0cdc8]" />
                </div>
              ))
            )}

            {/* --------Promo & Note-------- */}
            <div className="mt-6 space-y-3">
              {/* Promo */}
              <div>
                <button
                  onClick={() => setPromoOpen(!promoOpen)}
                  className="flex items-center gap-2 text-sm font-['Jost',sans-serif] font-light text-[#1a1a1a] tracking-wide hover:opacity-70 transition"
                >
                  <FiTag size={15} />
                  Enter a promo code
                </button>
                {promoOpen && (
                  <div className="mt-2 flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo code"
                      className="border border-[#ccc] bg-transparent px-3 py-2 text-sm font-['Jost',sans-serif] font-light text-[#1a1a1a] outline-none w-48 placeholder:text-[#aaa]"
                    />
                    <button className="px-4 py-2 bg-[#1a1a1a] text-[#f8f7f5] text-sm font-['Jost',sans-serif] font-light hover:bg-[#333] transition">
                      Apply
                    </button>
                  </div>
                )}
              </div>

              {/* Note */}
              <div>
                <button
                  onClick={() => setNoteOpen(!noteOpen)}
                  className="flex items-center gap-2 text-sm font-['Jost',sans-serif] font-light text-[#1a1a1a] tracking-wide hover:opacity-70 transition"
                >
                  <FiFileText size={15} />
                  Add a note
                </button>
                {noteOpen && (
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Write a note..."
                    rows={3}
                    className="mt-2 w-full border border-[#ccc] bg-transparent px-3 py-2 text-sm font-['Jost',sans-serif] font-light text-[#1a1a1a] outline-none resize-none placeholder:text-[#aaa]"
                  />
                )}
              </div>
            </div>
          </div>

          {/* --------Right: Order Summary-------- */}
          <div className="lg:pt-0">
            <h2 className="text-2xl font-light tracking-widest text-[#1a1a1a] mb-1 font-['Jost',sans-serif]">
              Order summary
            </h2>
            <hr className="border-[#d0cdc8] mb-6" />

            <div className="space-y-4">
              <div className="flex justify-between text-sm font-['Jost',sans-serif] font-light text-[#1a1a1a]">
                <span>Subtotal</span>
                <span>₹ {subtotal}</span>
              </div>

              <div className="flex justify-between text-sm font-['Jost',sans-serif] font-light text-[#1a1a1a]">
                <span>Delivery</span>
                <span className="text-[#aaa]">--</span>
              </div>

              <div>
                <a
                  href="#"
                  className="text-sm font-['Jost',sans-serif] font-light text-[#1a1a1a] underline underline-offset-2 hover:opacity-60 transition"
                >
                  West Bengal, India
                </a>
              </div>
            </div>

            <hr className="border-[#d0cdc8] my-5" />

            <div className="flex justify-between text-base font-['Jost',sans-serif] font-light text-[#1a1a1a] mb-6">
              <span>Total</span>
              <span>₹ {subtotal}</span>
            </div>

            <button className="w-full bg-[#1a1a1a] text-[#f8f7f5] py-3 text-sm font-['Jost',sans-serif] font-light tracking-widest hover:bg-[#333] transition duration-300">
              Checkout
            </button>

            <div className="flex items-center justify-center gap-2 mt-3 text-[#888]">
              <FiLock size={13} />
              <span className="text-xs font-['Jost',sans-serif] font-light tracking-wide">
                Secure Checkout
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ViewCartData;
