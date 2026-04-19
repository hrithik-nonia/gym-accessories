import MainSection from "./landing-page-component/landing-page";
import NavBar from "./landing-page-component/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopAllPage from "./landing-page-sub-component/shop-all-page";

function App() {
  return (
    <>
      {/* ---------navbar add--------- */}
      <NavBar></NavBar>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/shopNowPage" element={<ShopAllPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
