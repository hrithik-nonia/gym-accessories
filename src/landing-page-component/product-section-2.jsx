import { Link } from "react-router-dom";
import HeadingForLandPageComp from "./heading-for-landing-page-components";

const ProductSectionTwo = () => {
  return (
    <>
      <div className="bg-[#142026] px-3 md:px-0">
        <HeadingForLandPageComp
          title="Shop by Collection"
          subtitle="I'm a title. Click here to add your own text and edit me."
          isDark={true}
        ></HeadingForLandPageComp>

        {/* ----------prodect section----------- */}

        <div className="mt-15 mx-0 md:mt-20 md:mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-15 ">
          <Link
            to="/shopNowPage"
            state={{
              category: "Yoga & Pilates",
              img: "banner_for_section_2.webp",
            }}
          >
            <div className=" aspect-square cursor-pointer relative overflow-hidden rounded-xl group">
              <img
                src="banner_for_section_2.webp"
                className="w-full h-full object-cover rounded-xl transition duration-1000 group-hover:scale-110"
              />
              <div className="absolute bottom-8 left-10 ">
                <h3 className="text-[#fffcfc] font-bold text-3xl font-serif">
                  Yoga & Pilates
                </h3>
                <p className="text-[#fffcfc] font-light font-serif mt-2">
                  Shop Collection
                </p>
              </div>
            </div>
          </Link>

          <Link
            to="/shopNowPage"
            state={{
              category: "Fitness Accessories",
              img: "banner_2_section_2.webp",
            }}
          >
            <div className=" aspect-square cursor-pointer relative overflow-hidden rounded-xl group">
              <img
                src="banner_2_section_2.webp"
                className="w-full h-full object-cover rounded-xl transition duration-1000 group-hover:scale-110"
              />
              <div className="absolute bottom-8 left-10 ">
                <h3 className="text-[#fffcfc] font-bold text-3xl font-serif">
                  Fitness Accessories
                </h3>
                <p className="text-[#fffcfc] font-light font-serif mt-2">
                  Shop Collection
                </p>
              </div>
            </div>
          </Link>

          <Link
            to="/shopNowPage"
            state={{
              category: "Weight Traning",
              img: "banner_3_section_2.jpg",
            }}
          >
            <div className=" aspect-square cursor-pointer relative overflow-hidden rounded-xl group">
              <img
                src="banner_3_section_2.jpg"
                className="w-full h-full object-cover rounded-xl transition duration-1000 group-hover:scale-110"
              />
              <div className="absolute bottom-8 left-10 ">
                <h3 className="text-[#fffcfc] font-bold text-3xl font-serif">
                  Weight Traning
                </h3>
                <p className="text-[#fffcfc] font-light font-serif mt-2">
                  Shop Collection
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ProductSectionTwo;
