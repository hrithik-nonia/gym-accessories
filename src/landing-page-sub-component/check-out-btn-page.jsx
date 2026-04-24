import { useContext, useState } from "react";
import { AppContext } from "../storage/landing-page-storage";
import { Link } from "react-router-dom";
import { FiEdit2, FiTag } from "react-icons/fi";
import { XCircle } from "lucide-react";

const CheckOutPage = () => {
  const { cartItems } = useContext(AppContext);
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const subtotal = cartItems
    .reduce((total, item) => total + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <div className="min-h-screen bg-white font-['Jost',sans-serif] ">
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* --------Top Navbar-------- */}
      <header className="border-b border-[#e0e0e0] px-10 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-[20px] font-bold tracking-wider text-[#1a1a1a]"
          >
            GYM <span className="text-red-500">X.</span>
          </Link>
          <span className="text-[15px] font-light tracking-widest text-[#1a1a1a]">
            CHECKOUT
          </span>
        </div>
        <Link
          to="/shopNowPage"
          className="text-sm font-light text-[#1a1a1a] underline underline-offset-4 hover:opacity-60 transition"
        >
          Continue Browsing
        </Link>
      </header>

      {/* --------Main Layout-------- */}
      <div className="flex min-h-[calc(100vh-61px)]">
        {/* --------Left: Payment Error-------- */}
        <div className="flex-1 flex flex-col items-center justify-center border-r border-[#e0e0e0] px-10 py-16">
          <XCircle size={48} strokeWidth={1} className="text-[#1a1a1a] mb-6" />
          <h2 className="text-2xl font-bold text-[#1a1a1a] text-center leading-snug mb-3">
            We can't accept online
            <br />
            payments
          </h2>
          <p className="text-sm font-light text-[#666] text-center">
            Contact us for help with your order.
          </p>
        </div>

        {/* --------Right: Order Summary-------- */}
        <div className="w-[420px] flex-shrink-0 px-8 py-10 bg-[#f9f9f9]">
          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-base font-medium text-[#1a1a1a] tracking-wide">
              Order summary
              <span className="font-light text-[#888] text-sm">
                ({totalItems} items)
              </span>
            </h3>
            <Link to="/ViewCartData">
              <FiEdit2
                size={16}
                className="text-[#888] hover:text-[#1a1a1a] transition cursor-pointer"
              />
            </Link>
          </div>

          {/* Items */}
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => {
              const hasDiscount =
                item.originalPrice && item.originalPrice > item.price;
              const total = (item.price * item.qty).toFixed(2);
              const totalOrig = hasDiscount
                ? (item.originalPrice * item.qty).toFixed(2)
                : null;

              return (
                <div key={item.id} className="flex items-center gap-3">
                  {/* Image with qty badge */}
                  <div className="relative w-[60px] h-[60px] bg-[#eeece8] flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain p-1"
                    />
                    <span className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-[#555] text-white text-[10px] flex items-center justify-center font-medium">
                      {item.qty}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-light text-[#1a1a1a] truncate">
                      {item.title}
                    </p>
                    <p className="text-xs font-light text-[#aaa] mt-0.5">
                      SKU: {String(item.id).padStart(4, "0")}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-right flex-shrink-0">
                    {hasDiscount && (
                      <p className="text-xs text-[#aaa] line-through">
                        ₹ {totalOrig}
                      </p>
                    )}
                    <p className="text-sm font-light text-[#1a1a1a]">
                      ₹ {total}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Promo Code Box */}
          <div
            className="border border-[#ddd] rounded-lg px-4 py-3 mb-6 cursor-pointer hover:border-[#aaa] transition"
            onClick={() => setPromoOpen(!promoOpen)}
          >
            <div className="flex items-center gap-2 text-sm font-light text-[#1a1a1a]">
              <FiTag size={14} className="text-[#888]" />
              <span className="underline underline-offset-2">
                Enter a promo code
              </span>
            </div>
            {promoOpen && (
              <div
                className="mt-3 flex gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo code"
                  className="border border-[#ccc] bg-white px-3 py-1.5 text-sm font-light text-[#1a1a1a] outline-none flex-1 placeholder:text-[#bbb]"
                />
                <button className="px-3 py-1.5 bg-[#1a1a1a] text-white text-sm font-light hover:bg-[#333] transition">
                  Apply
                </button>
              </div>
            )}
          </div>

          {/* Totals */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm font-light text-[#1a1a1a]">
              <span>Subtotal</span>
              <span>₹ {subtotal}</span>
            </div>
            <div className="flex justify-between text-sm font-light text-[#1a1a1a]">
              <span>Delivery</span>
              <span className="text-[#aaa]">--</span>
            </div>
            <hr className="border-[#ddd]" />
            <div className="flex justify-between text-base font-semibold text-[#1a1a1a]">
              <span>Total</span>
              <span>₹ {subtotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
