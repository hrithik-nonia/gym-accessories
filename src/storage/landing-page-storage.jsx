import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const LandingPageStore = ({ children }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.log(err));
  }, []);

  // ----------add to cart----------
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, qty) => {
    console.log("addToCart called:", product.title, qty);
    setCartItems((prev) => {
      console.log("prev cartItems:", prev);
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item,
        );
      } else {
        return [...prev, { ...product, qty }];
      }
    });
  };
  // -------------for cart open------------
  const [showCart, setShowCart] = useState(false);

  // --------------selected product id to show in show-selected-product-page----------------
  const [selectedProductId, setSelectedProductId] = useState(() => {
    return localStorage.getItem("selectedProductId") || 0;
  });

  // Aur ek useEffect add karo jo har change par save kare
  useEffect(() => {
    localStorage.setItem("selectedProductId", selectedProductId);
  }, [selectedProductId]);

  // -------------scroll to top--------------
  const scrollToTop = (duration = 2000) => {
    const start = window.scrollY;
    const startTime = performance.now();

    const scroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeInOut (smooth feel)
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <AppContext.Provider
      value={{
        cards,
        cartItems,
        addToCart,
        showCart,
        setShowCart,
        selectedProductId,
        setSelectedProductId,
        scrollToTop,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default LandingPageStore;
