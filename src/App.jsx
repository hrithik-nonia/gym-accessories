import MainSection from "./landing-page-component/landing-page";
import NavBar from "./landing-page-component/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopAllPage from "./landing-page-sub-component/shop-all-page";
import Footer from "./landing-page-component/footer";
import LandingPageStore from "./storage/landing-page-storage";
import ShowSelectedProductPage from "./landing-page-sub-component/show-selected-product-page";
import ScrollToTop from "./landing-page-sub-component/route-to-show-top-of-the-page";
import PolicyPage from "./landing-page-sub-component/footer-sub-comp-page";
import {
  shippingData,
  storePolicyData,
  faqData,
} from "./landing-page-sub-component/footer-sub-comp-data";

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
            {/* ✅ Teen alag routes — ek hi component */}
            <Route
              path="/shipping"
              element={<PolicyPage {...shippingData} />}
            />
            <Route
              path="/store-policy"
              element={<PolicyPage {...storePolicyData} />}
            />
            <Route path="/faq" element={<PolicyPage {...faqData} />} />
          </Routes>

          {/* --------footer------------ */}
          <Footer />
        </LandingPageStore>
      </BrowserRouter>
    </>
  );
}
export default App;
