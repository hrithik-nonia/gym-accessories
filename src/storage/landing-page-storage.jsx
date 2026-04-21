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
    setCartItems((prev) => {
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

  return (
    <AppContext.Provider value={{ cards, cartItems, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default LandingPageStore;
