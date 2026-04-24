import MainSection from "./landing-page-component/landing-page";
import NavBar from "./landing-page-component/navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import { AnimatePresence, motion } from "framer-motion";
import CheckOutPage from "./landing-page-sub-component/check-out-btn-page";
import ViewCartData from "./landing-page-sub-component/view-cart-data-page";

// -----------animation routing----------------
function AnimatedRoutes() {
  const location = useLocation();

  // -------------hide navbar on checkout page------------
  const hideNavbar = location.pathname === "/CheckOutPage";

  return (
    <>
      {!hideNavbar && <NavBar />} {/* ✅ sirf checkout par hide hoga */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<MainSection />} />
            <Route path="/shopNowPage" element={<ShopAllPage />} />
            <Route
              path="/ShowSelectedProductPage"
              element={<ShowSelectedProductPage />}
            />
            <Route
              path="/shipping"
              element={<PolicyPage {...shippingData} />}
            />
            <Route
              path="/store-policy"
              element={<PolicyPage {...storePolicyData} />}
            />
            <Route path="/faq" element={<PolicyPage {...faqData} />} />
            <Route path="/CheckOutPage" element={<CheckOutPage />} />
            <Route path="/ViewCartData" element={<ViewCartData />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LandingPageStore>
        <ScrollToTop />

        <AnimatedRoutes />
        <Footer />
      </LandingPageStore>
    </BrowserRouter>
  );
}

export default App;
