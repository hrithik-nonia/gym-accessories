import HeadingForLandPageComp from "./heading-for-landing-page-components";

const EndSection = () => {
  return (
    <>
      <div className="bg-[#a9977b] py-16 ">
        <div className="md:w-1/2 w-full md:mx-auto px-4 md:px-0">
          <HeadingForLandPageComp
            title="The Best Equipment for Meeting Your Goals"
            subtitle="I'm a title. Click here to add your own text and edit me."
          ></HeadingForLandPageComp>
          {/* ---------shop all button---------- */}
          <div className="flex justify-center mt-2 ">
            <a
              href="/shopNowPage"
              className="bg-[#141414] text-white rounded-xl px-6 py-3 text-sm mt-6 hover:bg-[#142026] hover:scale-105 transition duration-300 cursor-pointer "
            >
              Shop All
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default EndSection;
