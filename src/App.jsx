import MainSection from "./landing-page-component/landing-page";
import NavBar from "./landing-page-component/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopAllPage from "./landing-page-sub-component/shop-all-page";
import Footer from "./landing-page-component/footer";
import LandingPageStore from "./storage/landing-page-storage";

function App() {
  return (
    <>
      <LandingPageStore>
        <BrowserRouter>
          {/* ---------navbar add--------- */}
          <NavBar />
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/shopNowPage" element={<ShopAllPage />} />
          </Routes>

          {/* --------footer------------ */}
          <Footer />
        </BrowserRouter>
      </LandingPageStore>
    </>
  );
}
export default App;
