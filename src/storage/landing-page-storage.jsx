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
  return (
    <AppContext.Provider value={{ cards }}>{children}</AppContext.Provider>
  );
};

export default LandingPageStore;
