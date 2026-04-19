import { createContext } from "react";

export const AppContext = createContext();

const LandingPageStore = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export default LandingPageStore;
