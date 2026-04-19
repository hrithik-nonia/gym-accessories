import gymImg from "../assets/banner-1.avif";
import HeroSection from "./hero-section";
import ProductSectionOne from "./product-section-1";
import ProductSectionTwo from "./product-section-2";
import ProductSectionThree from "./product-section-3";
import EndSection from "./end-section";
import FormSection from "./form-section";

const MainSection = () => {
  return (
    <>
      <div
        className="h-[50vh] md:min-h-screen  bg-cover bg-center bg-fixed   "
        style={{ backgroundImage: `url(${gymImg})` }}
      >
        {/* ---------add responsive banner elements ------------ */}
        <HeroSection></HeroSection>
      </div>

      {/* --------- product section 1 ---------- */}
      <ProductSectionOne></ProductSectionOne>
      {/* ---------product section 2 --------- */}
      <ProductSectionTwo></ProductSectionTwo>
      {/* ----------product section 3---------- */}
      <ProductSectionThree></ProductSectionThree>
      {/* ----------ending section---------- */}
      <EndSection></EndSection>
      {/* -----------form section------------- */}
      <FormSection></FormSection>
    </>
  );
};
export default MainSection;
