import gymImg from "../assets/banner-1.avif";
import NavBar from "./navbar";
import HeroSection from "./hero-section";
import ProductSectionOne from "./product-section-1";

const MainSection = () => {
  return (
    <>
      <div
        className="min-h-screen  bg-cover bg-center bg-fixed   "
        style={{ backgroundImage: `url(${gymImg})` }}
      >
        {/* ---------add navbar ---------- */}
        <NavBar></NavBar>
        {/* ---------add responsive banner elements ------------ */}
        <HeroSection></HeroSection>
      </div>

      {/* --------- product section 1 ---------- */}
      <ProductSectionOne></ProductSectionOne>
    </>
  );
};
export default MainSection;
