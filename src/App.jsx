import MainSection from "./landing-page-component/landing-page";
import NavBar from "./landing-page-component/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopAllPage from "./landing-page-sub-component/shop-all-page";
import Footer from "./landing-page-component/footer";
import LandingPageStore from "./storage/landing-page-storage";
import ShowSelectedProductPage from "./landing-page-sub-component/show-selected-product-page";
import ScrollToTop from "./landing-page-sub-component/route-to-show-top-of-the-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <LandingPageStore>
          {/* ----------route to show top of the page----------- */}
          <ScrollToTop></ScrollToTop>
          {/* ---------navbar add--------- */}
          <NavBar />
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/shopNowPage" element={<ShopAllPage />} />
            <Route
              path="/ShowSelectedProductPage"
              element={<ShowSelectedProductPage />}
            />
          </Routes>

          {/* --------footer------------ */}
          <Footer />
        </LandingPageStore>
      </BrowserRouter>
    </>
  );
}
export default App;
